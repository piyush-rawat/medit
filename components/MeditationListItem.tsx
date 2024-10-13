"use client";

import { Meditation } from "@/types";
import Image from "next/image";
import { LuTimer } from "react-icons/lu";

const MeditationListItem = ({
  meditation,
  onSelect,
}: {
  meditation: Meditation;
  onSelect: (meditation: Meditation) => void;
}) => {
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div
      className="w-full h-[300px] w-[300px]. rounded-xl relative overflow-hidden cursor-pointer hover:scale-[1.05]. transition-all."
      onClick={() => {
        onSelect(meditation);
      }}
    >
      <Image
        width={300}
        height={300}
        alt="meditation-thumbnail"
        src={meditation.thumbnail}
        className="object-cover w-[300px] h-[300px] brightness-75"
      />

      <div className="absolute top-0">
        <div className="relative w-[300px] h-[300px] p-5">
          <p className="text-sm text-white font-semibold">{meditation.title}</p>
          <p className="text-xs text-white">
            {truncate(meditation.description, 400)}
          </p>

          <div className="flex flex-wrap w-1/2 gap-2 absolute bottom-5 left-5">
            {meditation.category.map((c) => (
              <p
                key={c}
                className="text-xs text-white bg-white/10 backdrop-blur-sm px-2 rounded"
              >
                {c}
              </p>
            ))}
          </div>

          <div className="flex items-end border. absolute bottom-5 right-5">
            <LuTimer size={24} className="text-white border." />
            {/* <MdOutlineTimer size={24} className="text-white" /> */}
            <p className="font-secondary text-white text-xl leading-none">
              {meditation.durationString}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationListItem;
