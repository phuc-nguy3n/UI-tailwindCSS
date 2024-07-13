import Academic from "../assets/icons/Academic";
import Bell from "../assets/icons/Bell";
import Book from "../assets/icons/Book";
import Clould from "../assets/icons/Clould";
import Computer from "../assets/icons/Computer";
import Currency from "../assets/icons/Currency";
import Gift from "../assets/icons/Gift";
import Home from "../assets/icons/Home";
import ItemJobList, { JobProps } from "../Components/Two/ItemJobList";
import React from "react";

const jobItems: JobProps[] = [
  {
    bgClass: "bg-rose-50",
    icon: <Home />,
    title: "Furniture",
  },

  {
    bgClass: "bg-fuchsia-100",
    icon: <Bell />,
    title: "Bell",
  },

  {
    bgClass: "bg-indigo-50",
    icon: <Book />,
    title: "Book",
  },

  {
    bgClass: "bg-teal-100",
    icon: <Clould />,
    title: "Clould",
  },

  {
    bgClass: "bg-lime-100",
    icon: <Computer />,
    title: "Computer",
  },

  {
    bgClass: "bg-violet-200",
    icon: <Currency />,
    title: "Currency",
  },

  {
    bgClass: "bg-amber-100",
    icon: <Gift />,
    title: "Gift",
  },

  {
    bgClass: "bg-rose-50",
    icon: <Academic />,
    title: "Academic",
  },
];

const JobList: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-[72px] shadow-lg">
      <div className="flex justify-between gap-3">
        <div className="relative flex-grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute left-4 top-1/2 size-6 -translate-y-1/2 opacity-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for a part-time job"
            className="w-f w-full rounded border border-zinc-200 py-4 pe-4 ps-[46px] focus:border-indigo-950 focus:outline-none"
          />
        </div>
        <button className="inline-flex gap-2.5 rounded bg-indigo-950 p-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>

          <span>Use map</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {jobItems.map(
          (item: JobProps): React.ReactElement => (
            <ItemJobList
              bgClass={item.bgClass}
              icon={item.icon}
              title={item.title}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default JobList;
