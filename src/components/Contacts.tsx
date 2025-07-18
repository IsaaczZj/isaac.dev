import CardContact from "./CardContact";
import linkedin from "../assets/icons_default/LinkedinLogo.svg";
import instagram from "../assets/icons_default/InstagramLogo.svg";
import github from "../assets/icons_default/GithubLogo.svg";
import mail from "../assets/icons_default/EnvelopeSimple.svg";
const Contacts = () => {
  return (
    <div className="bg-gray-100 h-full px-10">
      <div className="container flex flex-col justify-center items-center py-20">
        <header className="text-center">
          <h3 className="text-purple text-center mb-2 text-xl">Contato</h3>
          <p className="text-2xl text-center ">Gostou do meu trabalho?</p>
          <span className="text-gray-500">
            Entre em contato ou acompanhe minhas redes sociais
          </span>
        </header>
        <div className="mt-10 space-y-5">
          <CardContact
            img={mail}
            text="Currículo"
            link="/isaac-medeiros-currículo.pdf"
          />
          <CardContact
            img={linkedin}
            text="Linkedin"
            link="https://www.linkedin.com/in/isaac-medeiros-dev/"
          />
          <CardContact
            img={instagram}
            text="Instagram"
            link="https://www.instagram.com/isaac_pmedeiros/"
          />
          <CardContact
            img={github}
            text="GitHub"
            link="https://github.com/IsaaczZj"
          />
          <CardContact
            img={mail}
            text="Email"
            link="mailto:joseisaac.isaac123@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
