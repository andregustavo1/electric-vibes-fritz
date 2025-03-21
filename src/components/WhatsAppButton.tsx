
import React from 'react';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-neon-pink shadow-neon-pink transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Contact via WhatsApp"
    >
      <Phone className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
