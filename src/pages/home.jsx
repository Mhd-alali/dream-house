import React from 'react';
import { pageFade } from '../animation';
import { Section } from '../components/section';
import { motion } from 'framer-motion'
import { Hero } from '../components/hero';

function Home({ properties }) {
    return (
        <motion.main variants={pageFade} initial="from" animate="to" exit="exit" className='flow-root mb-10 relative'>
            <Hero />
            <div className="">
                <h3 className='font-bold text-5xl container mb-5 mt-12'>Real Estates</h3>
                <div className="bg-gray-100 rounded-md space-y-14">
                    {['Houses', "Apartments", "Farms"].map((section, index) => <Section properties={properties[index]} key={section} section={section} />)}
                </div>
            </div>
        </motion.main>
    )
}

export default Home;