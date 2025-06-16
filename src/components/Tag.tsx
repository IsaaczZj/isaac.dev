
type TagProps = {
  img: string;
  text: string;
};
const Tag = ({ img, text }: TagProps) => {
  return (
    <div className="w-32 flex gap-2 bg-gray-300 p-2 rounded-4xl border border-transparent hover:border hover:border-blue hover:scale-105">
      <img src={img} alt={`Imagem de ${img}`} className="w-6 h-6 rounded-3xl"/>
      <span>{text}</span>
    </div>
  );
};

export default Tag;
