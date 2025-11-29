import type { ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        px-4 sm:px-6
      "
    >
      {/* Soft glass overlay (NOT black) */}
      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-black/25 dark:bg-black/35   /* ✅ much lighter */
          backdrop-blur-sm               /* ✅ soft blur of whole page */
        "
        aria-hidden
      />

      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        dir="ltr"  /* ✅ force LTR so right=right even if content is RTL */
        className="
          relative w-full max-w-4xl md:max-w-5xl
          rounded-2xl
          border border-white/50         /* ✅ clearer but not harsh */
          shadow-2xl
          p-10 md:p-12

          /* ✅ prettier gray liquid glass */
          bg-white/10 dark:bg-white/5
          backdrop-blur-2xl
          ring-1 ring-white/10
          
          transition-all duration-700
          ease-[cubic-bezier(.16,1,.3,1)]
          animate-[modalIn_0.7s_cubic-bezier(.16,1,.3,1)]
        "
      >
        {/* Close Button (TOP-RIGHT + RED) */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-[#620206]                /* ✅ your red */
            text-white
            shadow-lg
            hover:bg-black
            transition-all duration-500
            hover:scale-110
          "
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div dir="rtl">{children}</div>
      </div>

      <style>
        {`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(20px) scale(.97); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </div>
  );
}
