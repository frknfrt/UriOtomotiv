import React, { useState } from "react";
import { WhatsAppOutlined, PhoneOutlined } from "@ant-design/icons"; // Ant Design ikonları

const FloatingIcons = () => {
  const phoneNumber = "+905315108905"; // Telefon numaranı buraya yaz
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  const [isWhatsAppClicked, setIsWhatsAppClicked] = useState(false); // WhatsApp ikonu tıklama durumu
  const [isPhoneClicked, setIsPhoneClicked] = useState(false); // Telefon ikonu tıklama durumu

  // WhatsApp ikonu tıklama işlemi
  const handleWhatsAppClick = () => {
    setIsWhatsAppClicked(true);
    setTimeout(() => {
      setIsWhatsAppClicked(false); // Rengi eski haline döndür
    }, 1000); // 1 saniye sonra eski haline dönecek
  };

  // Telefon ikonu tıklama işlemi
  const handlePhoneClick = () => {
    setIsPhoneClicked(true);
    setTimeout(() => {
      setIsPhoneClicked(false); // Rengi eski haline döndür
    }, 1000); // 1 saniye sonra eski haline dönecek
  };

  return (
    <div style={styles.container}>
      {/* WhatsApp İkonu */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={isWhatsAppClicked ? { ...styles.button, ...styles.clickedButton } : styles.button}
        onClick={handleWhatsAppClick}
      >
        <WhatsAppOutlined style={isWhatsAppClicked ? { ...styles.icon, color: '#ffffff' } : styles.icon} />
      </a>

      {/* Telefon İkonu */}
      <a
        href={`tel:${phoneNumber}`}
        style={isPhoneClicked ? { ...styles.phoneButton, ...styles.clickedButton } : styles.phoneButton}
        onClick={handlePhoneClick}
      >
        <PhoneOutlined style={isPhoneClicked ? { ...styles.icon, color: '#ffffff' } : styles.icon} />
      </a>
    </div>
  );
};

// Stil tanımlamaları
const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 9999,
  },
  button: {
    width: "50px",
    height: "50px",
    backgroundColor: "#25D366", // WhatsApp yeşil rengi
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    textDecoration: "none",
    fontSize: "24px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Animasyon ekleniyor
  },
  phoneButton: {
    width: "50px",
    height: "50px",
    backgroundColor: "#ffffff", // Telefon ikonu arka plan beyaz
    color: "#007bff", // Telefon ikonu mavi
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    textDecoration: "none",
    fontSize: "24px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease",
  },
  icon: {
    fontSize: "30px", // İkon büyüklüğü
  },
  clickedButton: {
    transform: "scale(1.2)", // Tıklandığında büyüme
    boxShadow: "0px 10px 15px rgba(0,0,0,0.2)", // Gölge efekti
    backgroundColor: "#34b7f1", // Tıklandığında arka plan rengi değişir
    color: "#ffffff", // İkon rengi beyaza dönüşür
  },
};

export default FloatingIcons;