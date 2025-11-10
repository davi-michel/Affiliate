'use client'

import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import CardView from "./components/CardView";
import Card from "@/app/components/Card";
import { Instagram, Twitter, Youtube } from 'lucide-react';
import items from "@/public/items.json"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  link: string;
}

export default function Page() {
  const [selectedCard, setSelectedCard] = useState<Product | null>(null);

  const selectCard = (item: any) => setSelectedCard(item);

  return (
    <div className="bg-[#f6ede1] lg:min-h-screen font-poppins gap-10 py-2 lg:py-6 flex lg:flex-row px-2 lg:px-20 overflow-hidden">
      <motion.div
        className="bg-white lg:w-[90%] lg:max-w-[70%] mx-auto rounded-2xl shadow-md"
        animate={{ x: selectedCard ? -40 : 0, opacity: selectedCard ? 0.95 : 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <Header />
        <div className="lg:px-22 px-3 mt-3">
          <HeroSection />
        </div>

        <div className="lg:px-4 flex flex-col justify-center px-auto mt-6">
          <h2 className="text-center text-2xl font-semibold">Comprar</h2>
          <div className="flex flex-col lg:flex-row justify-between lg:mx-20 mx-4 flex-wrap">
            {items.items.map((e, index) => (
              <div key={index}>
                <Card
                  onClick={() => selectCard(e)}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                  category={e.category}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t mt-10 lg:mb-2 border-t-gray-300 font-normal text-md lg:mx-auto mx-4 lg:px-10 lg:w-5/6 lg:py-5 py-3 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center text-[#2e2e2e]">
          <div className="flex gap-8">
            <a href="#">Política de Privacidade</a>
            <a href="#">Contato</a>
            <a href="#">Sobre nós</a>
          </div>
          <div className="flex gap-4">
            <p className="lg:hidden flex">Redes Sociais:</p>
            <Twitter size={24} className="cursor-pointer" />
            <Instagram size={24} className="cursor-pointer" />
            <Youtube size={24} className="cursor-pointer" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedCard && (
          <motion.div
            key={selectedCard.id}
            className="max-w-[30%] mx-auto"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <CardView
              onclick={() => setSelectedCard(null)}
              name={selectedCard.name}
              description={selectedCard.description}
              image={selectedCard.image}
              price={selectedCard.price}
              category={selectedCard.category}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
