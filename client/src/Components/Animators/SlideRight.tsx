import { motion } from "framer-motion";
import SlideAnimationType from "../../Types";

const SlideRight = (props: SlideAnimationType) => {

    return (
        <div style={{
            overflowY: "hidden",
            overflowX: "visible"
        }}>
            <motion.div
                variants={{
                    initial: { opacity: 0, x: -1000 },
                    final: { opacity: 1, x: 0 }
                }}
                initial="initial"
                animate="final"
                transition={{ duration: props.duration ? props.duration : 0.5, delay: props.delay ? props.delay : 2 }}
            >
                {props.children}
            </motion.div>
        </div>

    )
}


export default SlideRight;