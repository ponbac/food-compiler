import { FC } from "react";

interface HitProps {
  title: string;
  description: string;
  ingredients: string[];
  restaurant: string;
  price: string;
  restaurantURL: string;
  foodoraURL: string;
}

const CustomHit: FC<HitProps> = ({
  title,
  description,
  ingredients,
  restaurant,
  price,
  restaurantURL,
  foodoraURL,
}) => {
  return (
    <div className="bg-gray-200 p-1 mt-1 rounded-lg shadow-lg hover:transition-colors hover:bg-gradient-to-br from-pink-400 to-red-600 hover:cursor-pointer dark:shadow-gray-600">
      <a href={foodoraURL} target="_blank">
        <h2 className="text-xl font-bold text-gray-800 text-left px-1 flex">
          <span className="text-left w-4/5">{title}</span>
          <span className="text-right w-1/5">{price == "0" ? "?" : price} kr</span>
        </h2>
        <div className="">
          <p className="text-gray-700 px-1 flex">
            <span className="text-left w-3/5 italic truncate">
              {description}
            </span>
            <a
              className="text-right w-2/5 "
              href={restaurantURL}
              target="_blank"
            >
              <span className="font-bold hover:underline hover:text-gray-200">
                {restaurant}
              </span>
            </a>
          </p>
        </div>
      </a>
    </div>
  );
};

export default CustomHit;
