import React, { useState } from 'react';
import { Award, Loader2, CheckCircle2 } from 'lucide-react';

const MintCertificateButton = () => {
  const [mintStatus, setMintStatus] = useState('idle'); 

  const handleMintCertificate = async () => {
    if (mintStatus === 'loading') return;
    
    setMintStatus('loading');
    
    try {
      // Space for Mani's Web3 logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMintStatus('success');
      setTimeout(() => setMintStatus('idle'), 3000); 
    } catch (error) {
      console.error('Minting failed:', error);
      setMintStatus('idle');
    }
  };

  const buttonConfig = {
    idle: {
      text: "Mint Certificate",
      icon: <Award className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />,
      className: "border border-[#3FA3A7] bg-[#3FA3A7] text-white"
    },
    loading: {
      text: "Minting...",
      icon: <Loader2 className="h-4 w-4 animate-spin" />,
      className: "border border-[#3FA3A7] bg-[#3FA3A7] text-white opacity-90"
    },
    success: {
      text: "Certificate Minted!",
      icon: <CheckCircle2 className="h-4 w-4 transition-transform duration-300 animate-bounce" />,
      className: "border border-green-500 bg-green-500 text-white"
    }
  };

  const currentButton = buttonConfig[mintStatus];

  return (
    <button
      onClick={handleMintCertificate}
      disabled={mintStatus === 'loading'}
      className={`group relative overflow-hidden ${currentButton.className} px-4 py-2 rounded flex items-center gap-2 transition-all duration-300`}
    >
      {currentButton.icon}
      {currentButton.text}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/25 transition-transform duration-300 group-hover:scale-100" />
    </button>
  );
};

export default MintCertificateButton;
