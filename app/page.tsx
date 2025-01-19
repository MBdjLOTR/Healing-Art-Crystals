"use client";
import { useState } from "react";
import Image from "next/image";

type Artwork = {
  title: string;
  img: string;
  description: string;
};

const featuredArtworks: Artwork[] = [
  {title: "Lady Galadriel", img: "/images/galadriel.jpg", description: "The Lady of Light, a beacon of wisdom and grace in Middle-earth, wife of Lord Celeborn of the Teleri shipwright elves,Lady of Lorien." },
  {title: "Elvenking Thranduil", img: "/images/thranduil.jpg", description: "The Elvenking of Mirkwood, fierce and unrelenting, who singlehandedly keeps the necromancers dark army at bay in the Greenwood." },
  {title: 'Legolas Greenleaf', img:"/images/legolas.jpg", description:"Prince of Mirkwood,the swift and agile woodland Elf, masterful with bow and blade."},
  {title:'Arwen Undomiel', img:"/images/arwen.jpg",description: "The Evenstar of her people, a symbol of beauty and enduring love for all creatures, big and small"},
  {title:'Gandalf',img:'/images/gandalf.jpg',description:"Istari,the wise and powerful wizard,one of the Maiar, protector and one of the chief guardians of Middle-earth, comes and goes as he pleases"},
  {title:'Tauriel',img:'/images/tauriel.jpg',description:"Captain of the Kings Guard in Mirkwood, right hand of Prince Legolas, the fierce and skilled warrior of Mirkwood, fiercely loyal,compassionate and brave."}
];

export default function Home() {
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-blue-300">
      <header className="text-center mb-12">
      <h1 className="text-6xl font-extrabold text-white text-center text-glow">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore a curated selection of my featured artworks.
        </p>
      </header>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-300 via-green-300 to-yellow-300">
        <div className="animate-spin-slow">
          <Image src="/images/logo.svg" alt="Animated Logo" width={500} height={500} />
        </div>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredArtworks.map((art, index) => (
          <div
            key={index}
            onClick={() => setSelected(art)}
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
          >
            <Image
              src={art.img}
              alt={art.title}
              width={300}
              height={200}
              className="object-cover"
            />
            <h2 className="text-center text-xl font-semibold mt-4">{art.title}</h2>
          </div>
        ))}
      </main>

      <div className="text-center mt-12">
        <a
          href="/gallery"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View Full Gallery
        </a>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg space-y-4 text-center max-w-md">
            <Image
              src={selected.img}
              alt={selected.title}
              width={500}
              height={400}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold">{selected.title}</h2>
            <p>{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
