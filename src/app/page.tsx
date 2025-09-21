import Image from "next/image";
import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section id="hero" className="mx-auto mt-20 flex max-w-7xl flex-col gap-16 px-6">

        <nav className="flex h-14 w-full items-center junstify-between">
          <Image
           className="h-14 w-14" src={logoSvg} alt='Logomarca da Wanderlust'
           />

           <div className="flex gap-8 items-center ">

            <Link href="#hero" className="font-medium px-5 py-3 text-white bg-fuchsia-500 rounded-full text-stone-700 hover:text-fuchsia-500 transition-colors">
            <p className="font-bold">Preço</p>

            </Link>

              <Link href="#hero" className="font-medium px-5 py-3 text-white bg-fuchsia-500 rounded-full text-stone-700 hover:text-fuchsia-500 transition-colors">
            <p className="font-bold">Sobre</p>

            </Link>

              <Link href="#hero" className="font-medium px-5 py-3 text-white bg-fuchsia-500 rounded-full text-stone-700 hover:text-fuchsia-500 transition-colors">
            <p className="font-bold">Blog</p>

            </Link>
              <Link href="#hero" className="font-medium px-5 py-3 text-white bg-fuchsia-500 rounded-full text-stone-700 hover:text-fuchsia-500 transition-colors">
            <p className="font-bold">Começar</p>

            </Link>

           </div>

        </nav>
        
      <div className="w-full flex items-center justify-between">

        <div> 

          <h1 className="text-left text-7xl font-black text-stone-800">
            Sua próxima viagem mais{' '} 
            <span className="text-fuchsia-500">eficiente</span>.

          </h1>

        </div>

          <Image 
           className="w-full max-w-2xl"
          src={airplaneSvg}
          alt='Avião dando a volta no planeta Terra'

          />

        </div>

      </section>

    </main>

  );
} 

