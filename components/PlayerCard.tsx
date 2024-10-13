import { motion } from "framer-motion";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import Player from "./Player";
import { Meditation } from "@/types";

const cardStyles = [
  "relative",
  // "container",
  "h-screen",
  "w-screen",
  "md:max-w-4xl",
  "md:h-auto",
  // "max-w-4xl",
  "md:m-3",
  "bg-slate-800",
  "md:rounded-xl",
  "p-5",
  "sm:p-10",
  "pt-16",
  "flex",
  "flex-col",
  "gap-8",
  "overflow-scroll",
  "bg-slate-900 bg-gradient-to-b from-slate-900 to-slate-800",
];

const PlayerCard = ({
  meditation,
  onDismiss,
}: {
  meditation: Meditation;
  onDismiss: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="backdrop-blur-sm absolute w-screen h-screen inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ y: 1000 }}
        className={cardStyles.join(" ")}
      >
        <div
          onClick={onDismiss}
          className="absolute top-[10px] right-[10px] bg-slate-500. rounded-lg p-1 cursor-pointer hover:bg-slate-600"
        >
          <HiXMark size={32} className="top-0 right-0 text-white" />
        </div>
        {/* </div> */}
        <div className="flex flex-col md:flex-row gap-8 borde">
          <div className="borde">
            <Image
              width={300}
              height={300}
              alt="meditation-thumbnail"
              src={meditation.thumbnail}
              className="object-cover w-[300px]. h-[300px]. w-full md:w-[300px] aspect-square"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-white">{meditation.title}</h1>
              <p className="text-white">{meditation.description}</p>
            </div>
          </div>
        </div>
        <Player audioLink={meditation.audioLink} />
      </motion.div>
    </motion.div>
  );
};

export default PlayerCard;
