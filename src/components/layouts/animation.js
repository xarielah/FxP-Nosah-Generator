import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = ({ children }) => {
    return (
        <motion.article
            animate={{ y: 0 }}
            initial={{ y: -900 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.article>
    );
};

export default AnimationWrapper;
