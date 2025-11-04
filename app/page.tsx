import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import CardView from "./components/CardView";
import { Instagram, Twitter, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="bg-[#f6ede1] min-h-screen font-poppins gap-10 py-6 flex px-20">
      <div className="bg-white w-[90%] max-w-[70%] mx-auto rounded-2xl shadow-md">
        <Header />
        <div className="px-20">
          <HeroSection />
        </div>
        <div className="border-t mt-10 border-t-gray-300 font-normal text-md mx-auto px-20 w-5/6 py-5 flex justify-between items-center">
          <div className="flex gap-8">
            <a href="#">Política de Privacidade</a>
            <a href="#">Contato</a>
            <a href="#">Sobre nós</a>
          </div>
          <div className="flex gap-4">
            <Twitter size={24} className="cursor-pointer" />
            <Instagram size={24} className="cursor-pointer" />
            <Youtube size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="max-w-[30%] mx-auto">
        <CardView />
      </div>
    </div>
  );
}

export default App;
