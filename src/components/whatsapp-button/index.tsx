// components/WhatsAppButton.js
import { IconBrandWhatsapp } from '@tabler/icons-react';
import React from 'react';


const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER 
  const message = "Hello! I'm interested in your services."; // Optional message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      <IconBrandWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
