import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full">
        <Image 
        src='/airplane.svg' 
        alt='Franciele'
        width={580}
        height={580}/>
      </section>
    </main>

  );
} 