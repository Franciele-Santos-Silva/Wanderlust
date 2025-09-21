import Image from "next/image";
import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="mx-auto max-w-7xl px-6 py-8">

        <nav className="flex items-center justify-between w-full mb-16">

          <div className="flex-shrink-0">
            <Image
              className="h-14 w-14" 
              src={logoSvg} 
              alt='Logomarca da Wanderlust'
            />
          </div>

          <div className="flex gap-4 items-center">
            <Link href="#precos" className="font-bold px-6 py-3 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-600 transition-colors">
              Preço
            </Link>

            <Link href="#sobre" className="font-bold px-6 py-3 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-600 transition-colors">
              Sobre
            </Link>

            <Link href="#blog" className="font-bold px-6 py-3 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-600 transition-colors">
              Blog
            </Link>
            
            <Link href="#comecar" className="font-bold px-6 py-3 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-600 transition-colors">
              Começar
            </Link>
          </div>
        </nav>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-800 leading-tight mb-8">
              Sua próxima viagem mais{' '} 
              <span className="text-fuchsia-500">eficiente</span>.
            </h1>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image 
              className="w-full max-w-md lg:max-w-lg"
              src={airplaneSvg}
              alt='Avião dando a volta no planeta Terra'
              priority
            />
          </div>
        </div>

      </section>
    </main>
  );
}