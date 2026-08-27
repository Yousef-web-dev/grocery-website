import { motion } from "framer-motion";

const Heading = (props) => {
  return (
        <div className="mx-auto w-fit">
            <h2 className="md:text-5xl text-[2.5rem] font-bold font-heading italic tracking-wide">
              <span className="text-orange-500">{props.highlight}</span> {props.heading}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-34 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto origin-right"
            ></motion.div>
        </div>
  )
}

export default Heading