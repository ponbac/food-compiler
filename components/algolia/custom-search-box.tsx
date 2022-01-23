import { FC, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";

interface SearchBoxProps {
  currentRefinement: string;
  refine: (value: string) => void;
  isSearchStalled: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({
  currentRefinement,
  isSearchStalled,
  refine,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchPlaceholder = (): string => {
    const exampleFood = [
      "Råbiff",
      "Vitlökspizza",
      "Pad Thai",
      "Tryffelpasta",
      "Sushi",
    ];
    return exampleFood[Math.floor(Math.random() * exampleFood.length)];
  };

  return (
    <div className="flex border-2 border-gray-300 rounded bg-white text-black">
      <button className="flex items-center justify-center px-4 border-r border-gray-300">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
      <input
        type="text"
        className="px-4 py-2 w-full outline-none"
        value={searchValue}
        onChange={(event) => {
          if (event.target.value.length < searchValue.length) {
            refine(event.currentTarget.value);
          } else if (event.target.value.length > 0) { // TODO: Should there be a limit? Debouncing instead?
            refine(event.currentTarget.value);
          }
          setSearchValue(event.target.value);
        }}
        placeholder={searchPlaceholder()}
      />
    </div>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
