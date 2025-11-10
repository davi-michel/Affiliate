import Image from "next/image";
import { Noto_Serif_KR } from "next/font/google";

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center p-10 bg-[#EFEAE4] gap-4 lg:gap-32 lg:py-16 lg:px-8 rounded-xl">
      <div className="border border-gray-400 px-20 lg:px-28 py-4 rounded-xl">
        <Image src="/images/headphonerosa.png" alt="Headphone rosa" width={200} height={200}/>
      </div>

      <div className="flex flex-col items-center lg:gap-12">
        <h2 className="lg:text-4xl text-center text-3xl font-bold mb-2 lg:mb-9"
        style={{ fontFamily: '"Microsoft Sans Serif", sans-serif'}}>
          PROMOÇÕES<br/>INCRÍVEIS!
        </h2>
        <h3 className="font-[--font-noto-serif-kr] text-center lg:text-3xl text-2xl text-gray-700">
          As melhores ofertas<br/>em um só lugar
        </h3>
      </div>
      </section>
  );
}
