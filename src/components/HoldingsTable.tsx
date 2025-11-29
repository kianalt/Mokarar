import { useState } from "react";
import Modal from "./Modal";
import logo1 from "../assets/logo-eng.png"

type Holding = {
  name: string;
  logo: string;
  description: string;
  link: string;
};


const holdingA: Holding[] = [
  { name: "شرکت مواد مهندسی مکرر", logo: logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Epoxy", logo: logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Acrylic", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Composite", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Export", logo: logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Industrial", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت..", link: "https://mokarrargroup.com/polyurethane" },
];
const holdingB: Holding[] = [
  { name: "شرکت مواد مهندسی مکرر", logo: "/logos/poly.svg", description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Epoxy", logo: logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Acrylic", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Composite", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Export", logo: logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت.", link: "https://mokarrargroup.com/polyurethane" },
  { name: "مکرر Industrial", logo:logo1, description: "شرکت مواد مهندسی مکرردر سال ۱۳۷۳ با هدف نوآوری در زمینه محصولات نوین شیمیایی و پلیمری (با تولید رزین ها و فراورده های اپوکسی) و فراهم کردن نیازهای مختلف صنایع داخلی در این حوزه پا به عرصه صنعت گذاشت..", link: "https://mokarrargroup.com/polyurethane" },
];

export default function HoldingsTable() {
  const [selected, setSelected] = useState<Holding | null>(null);

  return (
    <section className="py-16 px-4">
  
 <h1 className="text-center text-4xl font-semibold mb-20 mt-10 text-primary ">
    شرکت مواد مهندسی مکرر
      </h1>
<div className="mx-auto max-w-7xl px-4">
  <div className="grid gap-8 md:grid-cols-2 items-start">
    {/* ========== TABLE A ========== */}
    <section className="rounded-2xl p-4">
  <h2
  className="
    glass-card
    border border-gray-300 dark:border-gray-600
    px-8 py-4 mb-5
    text-secondary text-2xl font-semibold
    w-fit mx-auto
    flex items-center justify-center
    text-center
  "
>
  ثروت و ارزش
</h2>
      {/* 3 columns x 2 rows (6 items) on md+; on mobile we can make it 2 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {holdingA.slice(0, 6).map((h) => (
        <button
  key={h.name}
  onClick={() => setSelected(h)}
  className="
    relative h-28 p-4
    border border-gray-300 dark:border-gray-600
    glass-card overflow-hidden
    transform-gpu
    transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
    hover:scale-110
    group
  "
>
  {/* crème glass wipe (RIGHT -> LEFT), very slow + smooth */}
  <span
    className="
      absolute inset-0 z-0
      bg-secondary/70
      backdrop-blur-2xl
      translate-x-full group-hover:translate-x-0
      transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)]
    "
  />

  {/* text above */}
  <p
    className="
      relative z-10
      text-sm font-medium text-center
      text-white/90
      transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
      group-hover:text-white
      group-hover:text-lg
      group-hover:font-bold
    "
  >
    {h.name}
  </p>
</button>

        ))}
      </div>
    </section>

    {/* ========== TABLE B ========== */}
    <section className="rounded-2xl  p-4">
      <h2
  className="
    glass-card
    border border-gray-300 dark:border-gray-600
    px-12 py-4 mb-5
    text-secondary text-2xl font-semibold
    w-fit mx-auto
    flex items-center justify-center
    text-center
  "
>
MMM
</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {holdingB.slice(0, 6).map((h) => (
         <button
  key={h.name}
  onClick={() => setSelected(h)}
  className="
    relative h-28 p-4
    border border-gray-300 dark:border-gray-600
    glass-card overflow-hidden
    transform-gpu
    transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)]
    hover:scale-110
    group
  "
>
  {/* crème glass wipe (RIGHT -> LEFT), very slow + smooth */}
  <span
    className="
      absolute inset-0 z-0
      bg-secondary/70
      backdrop-blur-2xl
      translate-x-full group-hover:translate-x-0
      transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
    "
  />

  {/* text above */}
  <p
    className="
      relative z-10
      text-sm font-medium text-center
      text-white/90
      transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
      group-hover:text-white
      group-hover:text-lg
      group-hover:font-bold
    "
  >
    {h.name}
  </p>
</button>

        ))}
      </div>
    </section>
  </div>
</div>
<div className="w-full flex justify-center mt-16">
  <button
    className="
      relative
      h-16 min-w-[220px] px-14
      glass-card overflow-hidden
      border border-white/30
      bg-[#7b0a10] text-white
      text-xl font-bold tracking-wide
      flex items-center justify-center
      transform-gpu
      transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
      hover:scale-105
      group
    "
    style={{backgroundColor:"#7b0a10"}}
  >
    {/* smooth black wipe on hover */}
    <span
      className="
        absolute inset-0 z-0
        bg-black/95
        translate-x-full group-hover:translate-x-0
        transition-transform duration-[2000ms] ease-[cubic-bezier(.16,1,.3,1)]
      "
    />
    <span className="relative z-10">سرمایه گذاری</span>
  </button>
</div>


      

     
      {selected && (
  <Modal onClose={() => setSelected(null)}>
    <div className="text-center" style={{ direction: "rtl" }}>
      
      {/* logo */}
      <img
        src={selected.logo}
        alt={selected.name}
        className="mx-auto w-40 h-auto mb-8"  // ✅ bigger logo + space below
      />

      {/* title */}
      <h3 className="text-2xl font-semibold text-white mb-6">
        {selected.name}
      </h3>

      {/* description */}
      <p className="text-gray-200 leading-relaxed text-justify mb-8 px-2 md:px-6">
        {selected.description}
      </p>

      {/* link */}
      <a
        href={selected.link}
        target="_blank"
        className="
          inline-flex items-center justify-center
          glass-card px-6 py-3
          bg-secondary/60 text-white font-bold
          hover:bg-black transition-all duration-500
        "
      >
        مشاهده وبسایت →
      </a>
    </div>
  </Modal>
)}
 <div className="w-full flex justify-center mt-36">
  <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
    
    {/* ABOUT US */}
    <a
      href="#about"
      className="
        relative h-14 min-w-[180px] px-10
        glass-card overflow-hidden
        border border-white/30
        bg-white/10 text-white
        text-lg font-semibold tracking-wide
        flex items-center justify-center
        transform-gpu
        transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
        hover:scale-105
        group
      "
    >
      {/* subtle light wipe */}
      <span
        className="
          absolute inset-0 z-0
          bg-white/20
          translate-x-full group-hover:translate-x-0
          transition-transform duration-[1800ms] ease-[cubic-bezier(.16,1,.3,1)]
        "
      />
      <span className="relative z-10">درباره ما</span>
    </a>

   

    {/* CONTACT US */}
    <a
      href="#contact"
      className="
        relative h-14 min-w-[180px] px-10
        glass-card overflow-hidden
        border border-white/30
        bg-black/20 text-white
        text-lg font-semibold tracking-wide
        flex items-center justify-center
        transform-gpu
        transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
        hover:scale-105
        group
      "
    >
      {/* gray wipe */}
      <span
        className="
          absolute inset-0 z-0
          bg-gray-400/30
          translate-x-full group-hover:translate-x-0
          transition-transform duration-[1800ms] ease-[cubic-bezier(.16,1,.3,1)]
        "
      />
      <span className="relative z-10">تماس با ما</span>
    </a>

  </div>
</div>

    </section>
  );
}
