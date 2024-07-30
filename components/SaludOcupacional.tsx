import React from "react";

const SaludOcupacional = () => {
  return (
    <section
      className="flexCenter flex-col overflow-y-auto scroll-smooth"
      id="Salud Ocupacional"
    >
      <div className="relative text-center items-center">
        <h2 className="text-[30px] font-bold lg:bold-64 text-[#2e569b] uppercase">
          Servicios de Salud Ocupacional
        </h2>
        <h2 className="p-5 text-gray-30 lg:text-[20px]">
          Monitoreo y evaluación de estado de salud del personal de la
          intitución a través de pruebas de Laboratorio Clínico con el fin de
          prevenir o detectar de manera temprana enfermedades de diferentes
          tipos según perfil de los empleados, generando bienestar al interior
          de la empresa lo que conlleva a un óptimo desempeño laboral y un
          ambiente organizacional sano y estable
        </h2>
      </div>
      <div className="flexCenter relative w-full">
        <img
          alt="salud_ocupacional"
          loading="lazy"
          width={1440}
          height={580}
          decoding="async"
          data-nimg="1"
          className="w-full object-cover object-center"
          style={{ color: "transparent" }}
          src="/salud_ocupacional.jpg"
        />
      </div>
    </section>
  );
};

export default SaludOcupacional;
