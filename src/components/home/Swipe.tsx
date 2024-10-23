"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { CARD_DATA } from "../../../constant";
import Image from "next/image";
 
export function DemoCardsSwipeV2() {
  const [cards, setCards] = useState(CARD_DATA);
 
  return (
    <div className="grid h-[350px] md:h-[500px] w-full place-items-center">
      {cards.map((card) => {
        return <SwipCard key={card.id} cards={cards} setCards={setCards} {...card} />;
      })}
    </div>
  );
}
 
 
type TCard = {
  id: number;
  url: string;
};
 
type TSwipeCard = {
  id: number;
  url: string;
  setCards: React.Dispatch<React.SetStateAction<TCard[]>>;
  cards: TCard[];
};
 
function SwipCard({ id, url, setCards, cards }: TSwipeCard) {
  const x = useMotionValue(0);
 
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
 
  const isFront = id === cards[cards.length - 1].id;
 
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
 
    return `${rotateRaw.get() + offset}deg`;
  });
 
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };
 
  return (
    <motion.div
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={url}
        alt="Placeholder alt"
        className="h-72 w-60 md:h-96 md:w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
        width={500}
        height={500}
        loading="lazy"
        />

    </motion.div>
  );
}

 
