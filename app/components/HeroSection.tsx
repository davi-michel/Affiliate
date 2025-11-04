import Image from "next/image";
import { Noto_Serif_KR } from "next/font/google";

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export default function HeroSection() {
  return (
    <section className="flex justify-center bg-[#EFEAE4] gap-32 py-16 px-8 rounded-xl">
      <div className="border border-gray-400 px-28 py-4 rounded-xl">
        <Image src="/images/headphonerosa.png" alt="Headphone rosa" width={200} height={200}/>
      </div>

      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-bold mb-9"
        style={{ fontFamily: '"Microsoft Sans Serif", sans-serif'}}>
          PROMOÇÕES<br/>INCRÍVEIS!
        </h2>
        <h3 className="font-[--font-noto-serif-kr] text-3xl text-gray-700">
          As melhores ofertas<br/>em um só lugar
        </h3>
      </div>
      </section>
  );
}
