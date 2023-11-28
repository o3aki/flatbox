"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";

import { MdOutlineSearch } from "react-icons/md";

const Search = () => {
  const [text, setText] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = {
      searchQuery: text,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/search",
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };

  return (
    <form
      className="flex flex-row border-[1px] border-neutral-700 rounded-[10px] overflow-hidden w-2/5"
      onSubmit={handleSearch}
    >
      <input
        type=""
        placeholder="Поиск"
        className="w-full px-4 py-2 bg-[#23232F]"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit" className="px-3 bg-neutral-700 border-none">
        <MdOutlineSearch className="w-6 h-6" />
      </button>
    </form>
  );
};

export default Search;
