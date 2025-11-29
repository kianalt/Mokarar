import {
  MessageCircle,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section dir="rtl"    id="contact" className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-primary mb-10">
        تماس با ما
      </h2>

      {/* Main cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* WhatsApp Card */}
        <a
          href="https://wa.me/989121448945"
          target="_blank"
          rel="noreferrer"
          className="
            glass-card group
            border border-white/15
            p-6
            transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
            hover:scale-[1.03]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                glass-card
                p-3
                flex items-center justify-center
                border border-white/10
                transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:bg-secondary/60
              "
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                ارتباط با واتساپ
              </p>
              <p className="text-white/80 mt-1 tracking-wider">
                ۰۹۱۲۱۴۴۸۹۴۵
              </p>
            </div>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:info@mokarrar.com"
          className="
            glass-card group
            border border-white/15
            p-6
            transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
            hover:scale-[1.03]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                glass-card
                p-3
                flex items-center justify-center
                border border-white/10
                transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:bg-secondary/60
              "
            >
              <Mail className="w-6 h-6 text-white" />
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                آدرس ایمیل
              </p>
              <p className="text-white/80 mt-1">
                info@mokarrar.com
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Social Media */}
      <div className="glass-card border border-white/15 p-6 mt-8">
        <p className="text-center text-lg font-semibold text-white mb-5">
          شبکه‌های اجتماعی
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="
              glass-card
              p-3
              border border-white/10
              transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
              hover:scale-110
              hover:bg-secondary/60
            "
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="
              glass-card
              p-3
              border border-white/10
              transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
              hover:scale-110
              hover:bg-secondary/60
            "
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="
              glass-card
              p-3
              border border-white/10
              transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
              hover:scale-110
              hover:bg-secondary/60
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>

          {/* Telegram */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="
              glass-card
              p-3
              border border-white/10
              transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
              hover:scale-110
              hover:bg-secondary/60
            "
            aria-label="Telegram"
          >
            <Send className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}