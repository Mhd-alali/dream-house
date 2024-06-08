import React from 'react';
import { pageFade } from '../animation';
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className='container h-[80vh] flex items-center justify-center'>
            <h1 className='text-2xl text-center'>Dream House is not a real company, <br /> this project is presented by Mohammed al-ali as Project 1 for Cordobas private university, <br /> for more works visit <a target='_blank' rel="noreferrer" className='text-blue-500' href="https://muhammed-ali.vercel.app/">Mohammed's personal site</a></h1>
        </motion.div>
    );
}

export default About;