import Speaker from "../img/Speaker.png";

export const SpeakerCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <div className="xl:w-1/3 md:w-2/5 flex items-center justify-center">
        <img
          className="rounded-full md:w-64 md:h-64 w-40 h-40"
          src={Speaker}
          alt=""
        />
      </div>
      <div className="xl:w-5/6 md:w-3/5 text-white">
        <div className="flex flex-row justify-between">
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-title">
            Andrea Carballo
          </h2>
          <p className="xl:text-2xl md:text-xl border px-4 py-2">Speaker</p>
        </div>
        <div className="xl:text-2xl md:text-xl">
          <p className="mt-5 text-justify">
            Es la hija mayor de una familia de seis miembros. A la edad de 7
            años, visito la iglesia por primera vez. Tomó una desición por Jesus
            a los 15 años. Servia en el Ministerio Juvenil, en misiones y en
            giras evangelísticas.
          </p>
          <br />
          <p className="text-justify">
            Andrea es Doctora en Nutrición Humana y Master en Teologiá.
            Actualemente, es mamá de tres hermosos niños; Raul, Juan Diego y
            Sara. Actualmente es la Pastora General junto con su esposo, El
            Pastor Eduardo Vargas y como familia le sirven al Señor en nuestra
            amada iglesia Oasis.
          </p>
        </div>
      </div>
    </div>
  );
};
