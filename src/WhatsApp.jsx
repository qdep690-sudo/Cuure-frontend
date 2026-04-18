import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const phoneNumber = "917483068353"; // your number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <FaWhatsapp size={28} color="white" />
    </button>
  );
}