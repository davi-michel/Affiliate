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

export default function CardView() {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4">
            <div className="bg-[#EFEAE4] rounded-2xl flex justify-center items-center p-4 mt-8">
                <Image
                    src="/images/apple_watch.png" width={250} height={250} alt="Apple Watch" className="rotate-12"
                />
            </div>

            <div>
                <h1 className="font-black text-4xl font-[--font-dm-serif-display] mb-3">Apple Watch</h1>
                <span className="bg-[#EFEAE4] p-1 px-4 rounded-lg">Tecnologia</span>
                <p className="mt-3">Feita de fluorelastômero resistente, a pulseira esportiva é durável e surpreendentemente macia. O material flexível e compacto se encaixa com perfeição e suavidade no seu pulso. O fecho inovador na forma de pino garante um ajuste perfeito.</p>
                <h2 className="font-semibold text-3xl mt-3">R$ 1.299,90</h2>
                <button className="bg-black rounded-lg text-white font-normal text-xl p-2 px-4 cursor-pointer mt-3">Ir para a oferta</button>
            </div>
            <div>
                <h3 className="font-semibold text-2xl mt-2">Promoções relacionadas</h3>
                <div className="flex justify-between">
                    <a href="#">
                        <div className="bg-[#EFEAE4] rounded-2xl flex justify-center items-center p-4 mt-8 relative w-56 h-56">
                            <p className="absolute top-0 left-1 m-2 font-semibold">Moda</p>
                            <Image
                                src="/images/shirt.png"
                                alt="Shirt"
                                fill
                                className="object-contain rotate-12"
                            />
                        </div>
                    </a>

                    <a href="#">
                        <div className="bg-[#EFEAE4] rounded-2xl flex justify-center items-center p-4 mt-8 relative w-56 h-56">
                            <p className="absolute top-0 left-1 m-2 font-semibold">Games</p>
                            <Image
                                src="/images/controller.png"
                                alt="Controller"
                                width={120}
                                height={120}
                                className="object-contain rotate-12"
                            />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}