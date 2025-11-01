import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-dm-serif-display'
});

export default function CardView() {
    return (
        <div className="bg-white text-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
            <div>
                {/* image aq */}
            </div>
            <div>
                <h1 className={dmSerifDisplay.className}>Apple Watch</h1>
                <span className="bg-[#EFEAE4]">Tecnologia</span>
                <p>Feita de fluorelastômero resistente, a pulseira esportiva é durável e surpreendentemente macia. O material flexível e compacto se encaixa com perfeição e suavidade no seu pulso. O fecho inovador na forma de pino garante um ajuste perfeito.</p>
                <h2>R$ 1.299,90</h2>
                <button>Ir para a oferta</button>
            </div>
            <div>
                <h3>Promoções relacionadas</h3>
            </div>
        </div>
    )
}