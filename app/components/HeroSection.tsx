// app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex justify-center bg-[#EFEAE4] gap-32 py-8 px-8">
      
      <div className="border border-gray-400 px-16 py-4 rounded-xl">
        <Image src="/images/headphonerosa.png" alt="Headphone rosa" width={200} height={200}/>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-sans text-3xl font-bold">
          PROMOÇÕES INCRÍVEIS!
        </h2>
        <h3 className="font-noto text-xl text-gray-700">
          As melhores ofertas em um só lugar
        </h3>
      </div>
      
    </section>
  );
}
