import { motion } from "framer-motion";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <motion.div
        className="pb-16 text-center"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-4 md:py-8">
          See the magic. Try now
        </h1>
        <Button />
      </motion.div>
    </div>
  );
}
