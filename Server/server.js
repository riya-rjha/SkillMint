// server.js
require('dotenv').config();
const express = require('express');
const ethers = require('ethers');
const { create } = require('ipfs-http-client');
const { createCanvas, loadImage } = require('canvas');
const contractABI = require('./contractABI.json');

const app = express();
const port = 3000;

// Configure IPFS client
const ipfs = create({ url: process.env.IPFS_URL || 'http://localhost:5001' });

// Configure Ethereum provider and contract
const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  contractABI,
  wallet
);

// Certificate generation function
async function generateCertificate(studentName, courseName, completionDate) {
  const canvas = createCanvas(1000, 700);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 1000, 700);

  // Add border
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 10;
  ctx.strokeRect(10, 10, 980, 680);

  // Add certificate text
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#000000';
  ctx.fillText('Certificate of Completion', 500, 100);

  ctx.font = '30px Arial';
  ctx.fillText(`This certifies that`, 500, 200);
  
  ctx.font = 'bold 40px Arial';
  ctx.fillText(studentName, 500, 260);
  
  ctx.font = '30px Arial';
  ctx.fillText(`has successfully completed the course`, 500, 320);
  
  ctx.font = 'bold 40px Arial';
  ctx.fillText(courseName, 500, 380);
  
  ctx.font = '20px Arial';
  ctx.fillText(`Completion Date: ${completionDate}`, 500, 450);

  return canvas.toBuffer();
}

// IPFS upload function
async function uploadToIPFS(buffer) {
  const result = await ipfs.add(buffer);
  return result.path;
}

// Metadata generation function
function generateMetadata(studentName, courseName, completionDate, imageURI) {
  return {
    name: `${courseName} Certificate`,
    description: `Course completion certificate for ${studentName}`,
    image: `ipfs://${imageURI}`,
    attributes: [
      {
        trait_type: 'Student Name',
        value: studentName
      },
      {
        trait_type: 'Course Name',
        value: courseName
      },
      {
        trait_type: 'Completion Date',
        value: completionDate
      }
    ]
  };
}

// Event listener for course completion
contract.on('CourseCompleted', async (studentAddress, courseId, event) => {
  try {
    console.log(`Course completed by ${studentAddress} for course ${courseId}`);
    
    // Fetch student and course details (you would typically get this from your database)
    const studentName = 'John Doe'; // Replace with actual student name
    const courseName = 'Blockchain Development 101'; // Replace with actual course name
    const completionDate = new Date().toISOString().split('T')[0];
    
    // Generate and upload certificate image
    const certificateImage = await generateCertificate(studentName, courseName, completionDate);
    const imageURI = await uploadToIPFS(certificateImage);
    
    // Generate and upload metadata
    const metadata = generateMetadata(studentName, courseName, completionDate, imageURI);
    const metadataURI = await uploadToIPFS(Buffer.from(JSON.stringify(metadata)));
    
    // Mint NFT
    const tx = await contract.mintCertificate(studentAddress, courseId, `ipfs://${metadataURI}`);
    await tx.wait();
    
    console.log(`Certificate NFT minted for ${studentAddress}`);
  } catch (error) {
    console.error('Error processing certificate:', error);
  }
});

// API endpoint to manually trigger certificate generation (for testing)
app.post('/generate-certificate', express.json(), async (req, res) => {
  const { studentAddress, courseId } = req.body;
  
  try {
    // Manually trigger the same process as the event listener
    // This is useful for testing or manual certificate generation
    // ... (same code as in the event listener)
    
    res.json({ success: true, message: 'Certificate generation initiated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});