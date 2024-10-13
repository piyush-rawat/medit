"use client";

import Categories from "@/components/Categories";
import MeditationList from "@/components/MeditationList";
import { meditations } from "@/utils/data";

import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900 bg-gradient-to-b from-slate-900 to-slate-800 px-10. relative flex flex-col h-screen border."
    >
      <div className="border. pt-10 pb-5 py-10. shadow-2xl">
        <h1 className="text-4xl text-center text-white mb-4">
          Welcome to Medit
        </h1>
        <p className="text-xl text-center text-white mb-2">
          How are you feeling today?
        </p>

        <p className="text-center text-white">Select a category</p>

        <Categories />
      </div>

      <div className="flex justify-center start-0 border. border-red-700 overflow-scroll">
        <div>
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border. border-green-500 py-10">
            <MeditationList meditations={meditations} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
