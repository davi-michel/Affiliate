import { X } from "lucide-react";
import { DM_Serif_Display, Noto_Serif_Thai } from "next/font/google";
import Image from "next/image";

const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-dm-serif-display'
});

const notoSerifThai = Noto_Serif_Thai({
    subsets: ['latin'],
    weight: ['600'],
    variable: '--font-noto-serif-thai'
});

interface CardViewProps {
    image: string;
    category: string;
    price: number;
    name: string;
    description: string;
    onclick: () => void;
}

export default function CardView({ image, category, price, description, name, onclick }: CardViewProps) {
    return (
        <div className="bg-white p-6 rounded-2xl py-6 shadow-md flex flex-col gap-4 relative">
            <X onClick={onclick} className="absolute right-5 cursor-pointer"/>
            <div className="bg-[#EFEAE4] rounded-xl flex justify-center items-center p-4 mt-14">
                <Image
                    src={image} width={250} height={250} alt="Apple Watch"
                />
            </div>

            <div className="mt-6">
                <h1 className="font-black text-4xl font-[--font-dm-serif-display] mb-5">{name}</h1>
                <span className="bg-[#EFEAE4] p-1 px-4 rounded-lg">{category}</span>
                <p className="mt-3">{description}</p>
                <h2 className="font-semibold text-3xl mt-6">{price}</h2>
                <button className="bg-black hover:bg-white hover:text-black border rounded-lg text-white font-normal text-xl p-2 px-4 cursor-pointer mt-5">Ir para a oferta</button>
            </div>
        </div>
    )
}