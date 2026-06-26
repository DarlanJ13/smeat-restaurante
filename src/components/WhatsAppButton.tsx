import { Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5519998805368';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de fazer uma reserva no Smeat.'
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110"
    >
      <Phone className="h-6 w-6" strokeWidth={2.5} />
    </a>
  );
}
