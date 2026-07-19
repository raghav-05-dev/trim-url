import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-56 text-center">
            Transform long, cluttered links into clean, shareable URLs in seconds. Our URL Shortener is fast, secure, and easy to use, making it perfect for social media, marketing campaigns, business, and personal sharing. Create shortened links instantly, track performance with ease, and share smarter with a reliable platform built for everyone.
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer hover:bg-blue-300'>Try Now</button></Link>
          <Link href="/github"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer hover:bg-blue-300'>GitHub</button></Link>
        </div> 
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}