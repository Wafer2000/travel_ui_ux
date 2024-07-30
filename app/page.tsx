import Camp from "@/components/Camp";
import NuestrosServicios from "@/components/NuestrosServicios";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Inicio from "@/components/Inicio";
import Paquetes from "@/components/Paquetes";

export default function Home() {
  return (
    <>
      <Inicio />
      <NuestrosServicios />
      <Paquetes/>
      <Camp />
      <Guide />
      <GetApp />
    </>
  )
}
