import Image from "next/image";
import airplaneSvg from '../assets/airplane.svg'

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex h-screen w-full items-center max-w-screen-lg items-center justyfy-between" >
        <div>
          <h1 className="text-left text-5xl font-black">
            Sua próxima viagem mais{' '} 
            <span className="text-fuchsia-500">eficiente</span></h1>
        </div>
        <Image 
        className="w-full max-w-2xl"
        src={airplaneSvg}
        alt='Franciele'/>
      </section>
    </main>

  );
} 