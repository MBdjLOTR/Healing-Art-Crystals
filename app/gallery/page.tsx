"use client";
import { useState } from "react";
import Image from "next/image";

type Artwork = {
  title: string;
  img: string;
  description: string;
};

const gallery: Artwork[] = [
  { title: "Meriadoc Brandybuck", img: "/images/merry.jpg", description: "The cheerful and quick-witted Hobbit, full of curiosity and courage, conneisseur of pipeweed, extremely curious" },
  { title: "Peregrin Took", img: "/images/pippin.jpg", description: "The playful and loyal Hobbit, curious and impulsive, loves pranks, very loyal, always ready for an adventure." },
  { title:'Frodo Baggins', img:"/images/frodo.jpg", description:"The brave bearer of the One Ring, Bilbo's nephew and heir, a thoughful philosopher, resilient and determined."},
  { title:"Samwise Gamgee",img:"/images/sam.jpg", description:"A loyal and brave Hobbit from The Lord of the Rings, known for his unwavering loyalty to Frodo (he follows Frodo everywhere) and his courage on their perilous journey to destroy the One Ring."},
  { title:"Bilbo Baggins",img:"/images/bilbo.jpg", description:"Another beloved Hobbit who accompanies the company of 13 dwarves as a burglar, Bilbo is curious and clever, and he discovers his own bravery and resourcefulness on an unexpected adventure with a group of Dwarves on a quest to reclaim their homeland."},
  { title:"Bofur",img:"/images/bofur.jpg",description:"A cheerful and optimistic Dwarf who joins Thorin Oakenshield's company, Bofur is known for his good spirits, generosity, and deep camaraderie with his fellow adventurers. He also plays a mean flute."},
  { title:"Fili",img:"/images/fili.jpg",description:"Fíli is the older, responsible one, among the twin scouts in Thorin's company, both are brave warriors who share a strong bond and loyalty to their uncle Thorin"},
  { title:"Kili",img:"/images/kili.jpg",description:"Kili is the younger, more impulsive brother, who acts before he thinks, a superb archer, he is the youngest in the company and well loved by his elder fellow dwarves"},
  { title:'Gimli',img:"/images/gimli.jpg",description:"A stout and hardy Dwarf, son of Gloin from the company of Thorin Oakenshield, Gimli is a fierce warrior and a loyal friend. He forms an unlikely but deep friendship with Legolas, an Elf, during their journey, and offers sage council to Aragorn when Aragorn is on the verge of making impulsive decisions."},
  { title:'Aragorn', img:"/images/aragorn.jpg",description:"Known as Strider, Aragorn is a skilled ranger and the rightful heir to the throne of Gondor, he is a courageous leader, a masterful swordsman, and plays a key role in the defeat of Sauron. He seldom reaches the battlefield on time, and gets stressed easily."}
  // Add more images as needed
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<Artwork | null>(null); // Define the type explicitly

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gallery.map((art, index) => (
          <div
            key={index}
            onClick={() => setSelected(art)} // Now `art` matches the type `Artwork`
            className="cursor-pointer"
          >
            <Image
              src={art.img}
              alt={art.title}
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            </div>
        ))}
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
              onClick={() => setSelected(null)} // Reset to null
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
