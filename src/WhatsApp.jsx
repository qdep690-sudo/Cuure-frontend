import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const phoneNumber = "917483068353"; // your number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      className="whatsapp-float"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} color="white" />
    </button>
  );
}