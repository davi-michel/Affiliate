import Image from "next/image";

interface CardProps {
  price: number;
  image: string;
  category: string;
};

export default function Card({ price, category, image }: CardProps) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="w-55 rounded-b-xl shadow-lg hover:shadow-xl transition bg-[#EFEAE4] flex-col justify-center p-1 mt-8 relative h-90">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={category}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="flex flex-col px-5 py-2 bg-white rounded-b-xl gap-5">
        <p className="absolute top-0 left-1 m-2 font-semibold">Moda</p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {formattedPrice}
        </h2>
        <button className="px-4 py-2 bg-[#4A4A4A] text-white rounded-lg border hover:bg-white hover:text-black hover:border transition cursor-pointer">
          Ver Promoção
        </button>
      </div>
    </div>
  );
}
