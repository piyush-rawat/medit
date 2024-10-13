import { Meditation } from "@/types";
import MeditationListItem from "./MeditationListItem";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import PlayerCard from "./PlayerCard";
import useStore from "@/store";

const MeditationList = ({ meditations }: { meditations: Meditation[] }) => {
  const [selectedMeditation, setSelectedMeditation] =
    useState<Meditation | null>(null);

  const handleOnSelect = (meditation: Meditation) => {
    setSelectedMeditation(meditation);
  };

  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <>
      {meditations
        .filter((item) =>
          selectedCategory ? item.category.includes(selectedCategory) : true
        )
        .map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 1, scale: 0.7 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              // transition: { duration: 0.2 }
            }}
            whileHover={{ scale: 1.05 }}
            // viewport={{ once: true}}
          >
            <MeditationListItem
              key={m.id}
              meditation={m}
              onSelect={handleOnSelect}
            />
          </motion.div>
        ))}

      <AnimatePresence>
        {selectedMeditation && (
          <PlayerCard
            meditation={selectedMeditation}
            onDismiss={() => setSelectedMeditation(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MeditationList;
