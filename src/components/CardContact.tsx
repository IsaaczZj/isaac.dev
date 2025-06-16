import arrow from "../assets/colored_icons/ArrowUpRight.svg";

type CardContact = {
  img: string;
  text: string;
  link: string;
};
const CardContact = ({ img, text, link }: CardContact) => {
  return (
    <a
      target="_blank"
      href={link}
      className="p-5 flex bg-gray-300 w-[200px] md:w-[400px] border-2 border-transparent hover:border-blue transition ease-linear cursor-pointer rounded-md"
    >
      <div className="flex items-center gap-3 flex-1">
        <img src={img} />
        <span>{text}</span>
      </div>
      <img src={arrow} />
    </a>
  );
};

export default CardContact;
