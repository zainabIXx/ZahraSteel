import React from "react";
import { X } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-black border-2 border-gray-600 rounded-lg p-8 md:p-12 max-w-2xl mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-4">
            Get Your Quote
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            For immediate assistance, feel free to call, WhatsApp, or email our representatives directly at{" "}
            <a href="tel:06-5369255" className="font-semibold transition-colors hover:underline" style={{ color: '#ed1b24' }}>
              06-5369255
            </a>
            ,{" "}
            <a href="tel:050-4284908" className="font-semibold transition-colors hover:underline" style={{ color: '#ed1b24' }}>
              050-4284908
            </a>
            ,{" "}
            <a href="tel:055-9974813" className="font-semibold transition-colors hover:underline" style={{ color: '#ed1b24' }}>
              055-9974813
            </a>
            , or{" "}
            <a href="mailto:zahra_steel@hotmail.com" className="font-semibold transition-colors hover:underline" style={{ color: '#ed1b24' }}>
              zahra_steel@hotmail.com
            </a>
            . Whether you're ready for a consultation, have project details, or want to share references or drawings, our team is prepared to provide expert guidance and tailored solutions promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;