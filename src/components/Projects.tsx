import Card from "./Card";
import refound from "../assets/projects/refound.png";
import advinhe from "../assets/projects/adinha.png";
import planer from "../assets/projects/plan.er.jpg";
import fintech from "../assets/projects/fintech.png";
import todo from "../assets/projects/todo.jpg";
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
          img={planer}
          title="Plan.er"
          description="Sistema full-stack para organizar viagens com envio de emails"
          project_link="https://github.com/IsaaczZj/trip-planner-front-end"
        />
        <Card
          img={todo}
          title="My Tasks"
          description="Um sistema full-stack de gerenciamento de tarefas"
          project_link="https://github.com/IsaaczZj/full-stack-todo"
        />
        <Card
          img={fintech}
          title="Fintech"
          description="Um sistema de dashboard financeiro (Fintech)"
          project_link="https://fintech-liard-two.vercel.app"
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
      </div>
    </div>
  );
};

export default Projects;
