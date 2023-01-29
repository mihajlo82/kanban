import { TitleColumnProp } from "../../../../types/cardSectionType";

const DotsButton = ({ setOpenMenu }: TitleColumnProp) => {
  return (
    <button
      onMouseOver={() => setOpenMenu(true)} 
      onClick={() => setOpenMenu((prev) => !prev)}
      className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
    >
      <svg
        className="h-4 fill-current text-grey-dark cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
      </svg>
    </button>
  );
};

export default DotsButton;
