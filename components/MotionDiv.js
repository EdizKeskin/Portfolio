'use client';
import { motion } from 'framer-motion';
export default function MotionDiv({ children, ...props }) {
    return (
        <motion.div viewport={{ once: false }}
            initial={props.right ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "easeIn", duration: 0.5 }}>
            {children}
        </motion.div>
    )
}
