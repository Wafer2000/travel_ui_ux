import NuestrosServicios from "@/components/NuestrosServicios";
import Inicio from "@/components/Inicio";
import Paquetes from "@/components/Paquetes";
import QuienesSomos from "@/components/QuienesSomos";
import SaludOcupacional from "@/components/SaludOcupacional";
import NuestroPerfil from "@/components/NuestroPerfil";
import Infraestructura from "@/components/Infraestructura";
import Proteccion from "@/components/Proteccion";
import Informacion from "@/components/Informacion";

export default function Home() {
  return (
    <>
      <Inicio />
      <NuestrosServicios />
      <Paquetes />
      <SaludOcupacional />
      <QuienesSomos />
      <NuestroPerfil />
      <Infraestructura />
      <Proteccion />
      <Informacion />
    </>
  );
}
