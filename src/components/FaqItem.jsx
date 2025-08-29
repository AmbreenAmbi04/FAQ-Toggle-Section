import { motion } from 'framer-motion';
import { useState } from 'react';

const FaqItem = ({ question, answer }) => {

const [ isOpen, setIsOpen ] = useState(false);

const toggleAnswer = () => {
  setIsOpen (!isOpen);
}


return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
        <motion.div className="card" style={{ marginBottom: "20px" }}>
            <motion.h2 className="card-title" 
            style={{ paddingTop: "20px", paddingBottom: "20px", color: "purple", fontWeight: "bold" }}>
                { question }
                </motion.h2>
            <motion.button onClick={ toggleAnswer } className="button">
             {isOpen ? "+" : "-"}
            </motion.button>
        </motion.div>
        <motion.div>
            {isOpen &&
            <motion.p className = "card-text" style={{ marginBottom: "20px", color: "blue", fontSize: "18px" }}>
                { answer }
            </motion.p>}
        </motion.div>
    </motion.div>
)

}

export default FaqItem;