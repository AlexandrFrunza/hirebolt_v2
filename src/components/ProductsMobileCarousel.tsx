"use client";

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsMobileCarousel({
  products,
}: {
  products: { category: string; description: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const ratio = scrollLeft / (scrollWidth - clientWidth || 1);
    setActiveIndex(Math.round(ratio * (products.length - 1)));
  };

  return (
    <div
      ref={trackRef}
      onScroll={handleScroll}
      className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.category}
          className={`!w-80 !flex-none shrink-0 snap-start ${
            index === activeIndex ? "!outline-lime-200" : ""
          }`}
          {...product}
        />
      ))}
    </div>
  );
}
