import { FC } from "react";

interface HitProps {
  title: string;
  ingredients: string;
}

const CustomHit: FC<HitProps> = ({ title, ingredients }) => {
  return (
    <div className="flex-row border-2 rounded mt-1 bg-white text-black">
      <p>{title}</p>
      <p>{ingredients}</p>
    </div>
  );
};

export default CustomHit;
