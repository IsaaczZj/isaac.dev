type CardProps = React.ComponentProps<"a"> & {
  img: string;
  title: string;
  description: string;
  project_link: string;
};
const Card = ({ img, title, description, project_link }: CardProps) => {
  return (
    <a
      href={project_link}
      target="_blank"
      className="flex flex-col gap-2 bg-gray-300 items-center max-w-72 p-3 rounded-2xl hover:scale-110 transition ease-linear border-2 border-transparent hover:border-blue"
    >
      <img
        src={img}
        alt={`Projeto ${title}`}
        className=" rounded-2xl w-full h-36 object-contain"
      />
      <div className="mt-2 w-full ">
        <h2 className="font-bold text-start">{title}</h2>
        <p className="text-sm text-gray-500 mt-2 mb-2">{description}</p>
        <a
          className="text-sm text-blue font-medium cursor-pointer"
          target="_blank"
          href={project_link}
        >
          Link para o projeto
        </a>
      </div>
    </a>
  );
};

export default Card;
