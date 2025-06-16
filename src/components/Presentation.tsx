import layoutImage from "../assets/User.png";
import foto from "../assets/foto.png";
import Tag from "./Tag";
import gitHub from "../assets/colored_icons/GitHub.svg";
import html from "../assets/colored_icons/HTML.svg";
import css from "../assets/colored_icons/CSS.svg";
import js from "../assets/colored_icons/JavaScript.svg";
import ts from "../assets/colored_icons/ts-logo.png";
import react from "../assets/colored_icons/React.svg";
import node from "../assets/colored_icons/Node.js.svg";
const Presentation = () => {
  return (
    <div className="presentation px-10">
      <div className="container flex flex-col justify-center items-center py-20">
        <header className="flex flex-col gap-10 items-center justify-center text-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <img src={layoutImage} className="w-28 h-28" alt="" />
            <img
              src={foto}
              className="w-26 h-26 absolute top-1 left-1 rounded-full shadow-lg object-cover"
              alt=""
            />
          </div>
          <h3 className="">
            HELLO WORLD! Meu nome é{" "}
            <span className="text-red">Isaac Medeiros</span> e sou
          </h3>
          <h1 className="text-xl md:text-5xl font-semibold -mt-4">
            Desenvolvedor Front-End
          </h1>
          <p className="text-center md:w-2xl text-gray-400">
            Transformo necessidades em aplicações reais, evolventes e
            funcionais. Desenvolvo sistemas através da minha paixão pela
            tecnologia, contribuindo com soluções inovadoras e eficazes para
            desafios complexos.
          </p>
        </header>
        <div className="mt-10 -mb-10 grid grid-cols-2 md:flex gap-2 ">
          <Tag img={gitHub} text="GitHub" />
          <Tag img={html} text="HTML" />
          <Tag img={ts} text="TypeScript" />
          <Tag img={css} text="CSS" />
          <Tag img={js} text="JavaScript" />
          <Tag img={react} text="React " />
          <Tag img={node} text="Node.js" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
