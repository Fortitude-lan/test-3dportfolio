import React from 'react'
import { words } from '../constants'
import Button from "@/components/Button";
import HeroExperience from '@/components/heroModels/HeroExperience';


const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONNENT */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className="flex flex-col gap-7">
                        <div className="hero-text text-foreground">
                            <h1>
                                Shaping
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt="person"
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-highlight"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>

                            </h1>
                            <h1>into Real Projexts</h1>
                            <h1>that Deliver Result</h1>
                        </div>
                        <p className="text-highlight md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Adrian, a developer based in Croatia with a passion for
                            code.
                        </p>

                        <Button
                            text="See My Work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>

                {/* RIGHT: 3D MODEL */}
                <figure>
                    <div className='hero-3d-layout border-transparent border-2'>
                    <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero 