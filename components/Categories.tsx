import { motion } from "framer-motion";
import { categories } from "@/utils/data";
import useStore from "@/store";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useStore((store) => store);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap. gap-3 border. overflow-y-scroll px-5 py-3">
        {Object.values(categories).map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className={`text-white ${
              selectedCategory === item
                ? "bg-purple-500 glow-effect"
                : "bg-purple-500/10"
            } rounded-full px-3 py-2 cursor-pointer text-nowrap border border-purple-500`}
            onClick={() =>
              selectedCategory === item
                ? setSelectedCategory(null)
                : setSelectedCategory(item)
            }
          >
            <p className="font-poppins text-xs">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
