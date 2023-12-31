import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <h1 className="head-text">
              FASHION,
              <br className="xl:block hidden" /> AI-STYLE
            </h1>
          </motion.div>
          <motion.div {...headContentAnimation} className="flex flex-col gap-6">
            <p className="max-w-md font-normal text-gray-600 text-base">
              Design your distinct t-shirt with our state-of-the-art 3D
              customization tool.{" "}
              <strong>Dive into the depths of your creativity</strong> and make
              your fashion statement unforgettably unique.
            </p>
            <CustomButton
              type="filled"
              title="Customize it"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
