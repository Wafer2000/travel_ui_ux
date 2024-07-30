import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Inicio = () => {
  return (
    <section
      id="Inicio"
      className="padding-container flex flex-col gap-20 py-10 pb-32 mb:gap-28 lg:py-20 xl:flex-row bg-inicio bg-cover bg-center bg-no-repeat h-[70vh] overflow-y-auto scroll-smooth"
    >

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 lg:px-30 xl:px-30">
        <div className="container w-full flex flex-col items-start justify-center ml-4">
          <h1 className="text-[#2ca9c6] text-right font-bold uppercase lg:text-3xl md:text-2xl sm:text-1xl xs:text-1xl">
            LABORATORIO CLÍNICO
          </h1>
          <h1 className="text-[#2e569b] text-right font-bold uppercase lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl">
            LANDSTEINER
          </h1>
          <h1 className="text-[#2ca9c6] text-right font-bold uppercase lg:text-3xl md:text-2xl sm:text-1xl xs:text-1xl">
            IPS S.A.S.
          </h1>
        </div>

        <p className="text-[18px] mt-6 text-gray-30 xl:max-w-[520px] w-full text-start ml-4">
          Cuidar tu salud es nuestro compromiso
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row pt-5 justify-start ml-4">
          <Link href="https://gold-mole-609706.hostingersite.com/search-report">
            <Button type="button" title="Ver Resultados" variant="btn_blue" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
