import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { MicrophoneIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avator";
import HeaderOptions from "./HeaderOptions";
import { useResultContext } from "../context/ResultProvider";
import img1 from '../img/a-2.jpg'


interface Props {
  selected: string;
}

const Header: FC<Props> = ({ selected }) => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useResultContext();
  const [text, setText] = useState<string>(searchTerm);

  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            value={text}
            placeholder="Search Google"
            className="flex-grow w-full focus:outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <XMarkIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => setText("")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
        </form>
        <Avatar url={img1}  className="ml-auto" />
      </div>

      <HeaderOptions selected={selected} />
    </header>
  );
};

export default Header;