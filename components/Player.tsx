import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { convertSecondsToMinutes } from "@/utils/globalFunctions";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PlayerButton = ({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="text-white bg-[rgba(255,255,255,0.4)] rounded-full p-5 cursor-pointer hover:bg-[rgba(255,255,255,0.5)]"
    >
      {icon}
    </div>
  );
};

const Player = ({ audioLink }: { audioLink: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const [playerCurrentTime, setPlayerCurrentTime] = useState("00:00");

  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const forward10 = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += 10;
  };

  const backward10 = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime -= 10;
  };

  const handleOnEnded = () => {
    if (!audioRef.current) return;
    // audioRef.current.currentTime = 0;
    setSliderValue(0);
    setPlayerCurrentTime("00:00");
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (!audioRef.current) return;
      setPlayerCurrentTime(
        convertSecondsToMinutes(Math.round(audioRef.current.currentTime))
      );
      setSliderValue(audioRef.current.currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const [playerDuration, setPlayerDuration] = useState("00:00");

  return (
    <div className="border. flex flex-col gap-5">
      <audio
        ref={audioRef}
        src={audioLink}
        controls
        className="hidden"
        onLoadedMetadata={(e) => {
          const audio = e.target as HTMLAudioElement;

          setPlayerDuration(
            convertSecondsToMinutes(Math.round(audio.duration))
          );
        }}
        onEnded={handleOnEnded}
      ></audio>
      <div className="flex justify-between. justify-around items-center border. border-red-500">
        <PlayerButton
          icon={<TbRewindBackward10 className="text-xl" />}
          onClick={backward10}
        />
        {isPlaying ? (
          <PlayerButton
            icon={<FaPause className="text-3xl" />}
            onClick={pause}
          />
        ) : (
          <PlayerButton icon={<FaPlay className="text-3xl" />} onClick={play} />
        )}
        <PlayerButton
          icon={<TbRewindForward10 className="text-xl" />}
          onClick={forward10}
        />
      </div>
      <div className="border. border-blue-500 flex flex-col gap-2">
        <div className="flex">
          <Slider
            min={0}
            max={audioRef.current?.duration}
            step={1}
            value={sliderValue}
            onChange={(value) => {
              if (typeof value === "number") {
                setSliderValue(value);
                if (!audioRef.current) return;
                audioRef.current.currentTime = value;
                setPlayerCurrentTime(
                  convertSecondsToMinutes(Math.round(value))
                );
              }
            }}
            styles={{
              track: { backgroundColor: "#a855f7", height: 1 },
              rail: { backgroundColor: "#94a3b8", height: 1 },
              handle: {
                background: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
                border: "none",
                height: 20,
                width: 20,
                marginTop: -10,
                opacity: 1,
                // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              },
            }}
            activeDotStyle={{ color: "red", backgroundColor: "red" }}
          />
        </div>

        <div className="flex justify-between text-white border. border-yellow-500">
          <p className="font-secondary text-xl">{playerCurrentTime}</p>
          <p className="font-secondary text-xl">{playerDuration}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
