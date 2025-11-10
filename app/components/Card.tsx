import Image from "next/image";

interface CardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  onClick: () => void;
};

export default function Card({ price, category, image, name, onClick }: CardProps) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="lg:w-55 rounded-b-xl shadow-lg hover:shadow-xl transition bg-[#EFEAE4] flex-col justify-center p-1 mt-8 relative h-90">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={category}
          fill
          className="object-scale-down rounded-t-xl"
        />
      </div>

      <div className="flex flex-col px-5 py-4 bg-white rounded-b-xl gap-5">
        <p className="absolute top-0 left-1 m-2 font-semibold">{name}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {formattedPrice}
        </h2>

        <button
          onClick={onClick}
          className="px-4 py-2 bg-[#4A4A4A] text-white rounded-lg border hover:bg-white hover:text-black hover:border transition cursor-pointer"
        >
          Ver Promoção
        </button>
      </div>
    </div>

  );
}
