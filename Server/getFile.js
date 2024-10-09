const { PinataSDK } = require("pinata");
const fs = require("fs");
const { Blob } = require("buffer");
require("dotenv").config();

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

async function upload() {
	try {
		const blob = new Blob([fs.readFileSync("./NFTTest.jpg")]);
		const file = new File([blob], "NFTTest.jpg", { type: "image/jpeg" });
		const upload = await pinata.upload.file(file);
		console.log(upload);
	} catch (error) {
		console.log(error);
	}
}

async function getFile(cid) {
	try {
		const blob = await pinata.gateways.get(cid);
		const buffer = Buffer.from(await blob.data.arrayBuffer());
		console.log(buffer);
		
		// Save the buffer as a file on the system
		fs.writeFileSync("./test.jpg", buffer);

		console.log("File saved successfully.");
	} catch (error) {
		console.log(error);
	}
}

getFile("bafkreieipptxkfguuxqnu2hqf4e2tghrrhpj7bfznkmkt22idx5e7qct5i");
// upload()