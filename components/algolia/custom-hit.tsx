import { FC } from "react";

interface HitProps {
  title: string;
  ingredients: string[];
  restaurant: string;
}

const CustomHit: FC<HitProps> = ({ title, ingredients, restaurant }) => {
  return (
    <div className="bg-gray-200 p-1 mt-1 rounded-lg shadow-lg hover:transition-colors hover:bg-gradient-to-br from-pink-400 to-red-600 hover:cursor-pointer dark:shadow-gray-600">
      <h2 className="text-xl font-bold text-gray-800 text-left pl-1">
        {title}
      </h2>
      <div className="">
        <p className="text-gray-700 px-1 flex">
          <span className="text-left w-1/2 italic">
            {ingredients.map((i) => {
              return (
                <span key={i} className="">
                  {i === ingredients[ingredients.length - 1] ? i : i + ", "}
                </span>
              );
            })}
          </span>{" "}
          <span className="text-right w-1/2 font-bold">{restaurant}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomHit;
