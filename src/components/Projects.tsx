import Card from "./Card";
import refound from "../assets/projects/refound.png";
import advinhe from "../assets/projects/adinha.png";
import form from "../assets/projects/formlogin.png";
import fintech from "../assets/projects/fintech.png";
import hairDay from "../assets/projects/hair.png";
import purpleCalculator from "../assets/projects/purplecalculator.png";
const Projects = () => {
  return (
    <div className="container flex flex-col justify-center items-center py-20 px-10">
      <header>
        <h3 className="text-red text-center mb-2 text-xl">Meu trabalho</h3>
        <p className="text-2xl text-center ">Veja os projetos em destaque</p>
      </header>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
        <Card
          img={refound}
          title="Refound"
          description="Sistema de solicitação e gerenciamento de reembolsos"
          project_link="https://github.com/IsaaczZj/Refound"
        />
        <Card
          img={advinhe}
          title="Advinhe"
          description="Um jogo divertido de adivinhação de palavras"
          project_link="https://adivinha-o-gamma.vercel.app"
        />
        <Card
          img={purpleCalculator}
          title="Purple Calculator"
          description="Uma calculadora completa e modular"
          project_link="https://purple-calculator-tnl1-2lbbfa9a6.vercel.app"
        />

        <Card
          img={fintech}
          title="Fintech"
          description="Um sistema de dashboard financeiro (Fintech)"
          project_link="https://fintech-liard-two.vercel.app"
        />
        <Card
          img={hairDay}
          title="Hair Day"
          description="Sistema para facilitar agendamentos em salões de beleza"
          project_link="https://github.com/IsaaczZj/hair_day"
        />
        <Card
          img={form}
          title="Form Login"
          description="Um sistema de usuários com funcionalidades de login e cadastro"
          project_link="https://github.com/IsaaczZj/FormLoginDark"
        />
      </div>
    </div>
  );
};

export default Projects;
