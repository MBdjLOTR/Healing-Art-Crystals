"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 to-purple-300">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">About the Artist</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get to know more about the person behind the art.
        </p>
      </header>
      <main className="flex flex-col items-center md:flex-row md:items-start md:justify-center gap-8">
        <Image
          src="/images/profile photo.jpg"
          alt="Artist portrait"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
        <div className="max-w-lg text-gray-800 text-lg">
          <p>
            Hello! I am <strong>Medhavi Bhardwaj</strong>, a passionate artist and software engineer
            with a love for creating visual masterpieces, stunning visuals and innovative digital solutions. My
            art journey started at a young age and has evolved alongside my career in technology.
          </p>
          <p className="mt-4">
            Through my work, I strive to combine the worlds of creativity and logic, showcasing
            the beauty of both. Thank you for visiting my portfolio—feel free to explore and get
            inspired!I love reading and art. So I decided to combine my interests and this website came to be. I hope you enjoy your stay here.
          </p>
        </div>
      </main>

      <footer className="text-center mt-16">
        <Link
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
