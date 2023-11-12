"use client"

import Image from "next/image";

const Hero = () => {
    return (
        <section className="hero">
            {/* Mobile Hero */}
            <div className="lg:hidden">
                <div>
                    <h1 className="hero_headText">
                        Good Food Us
                        Good Mood
                    </h1>
                </div>

                <div className="hero_image mt-6">
                    <Image
                        src="/assets/images/hero.svg"
                        alt='Hero Image'
                        width={500}
                        height={500}
                        className='object-contain '
                    />
                </div>

                <div>
                    <p className="text-[#757575] text-[18px] leading-7">
                        I would think that conserving our natural resources
                        should be a conservative position: Not to waste food, and
                        not to throw away a lot of the food that we buy.
                    </p>
                    <div className="mt-5 flex gap-3">
                        <button
                            type="button"
                            onClick={() => { }}
                            className="hero_button--primary"
                        >
                            Daftar Sekarang
                        </button>
                        <button
                            type="button"
                            onClick={() => { }}
                            className="hero_button-secondary"
                        >
                            About Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Hero */}
            <div className="max-lg:hidden flex">
                <div className="w-[815px] flex flex-col gap-12 py-8 sm:max-lg:hidden">
                    <h1 className="hero_headText">
                        Good Food Us
                        <br />
                        Good Mood
                    </h1>
                    <p className="text-[#757575] text-[18px] leading-7 sm:max-lg:hidden">
                        I would think that conserving our natural resources
                        <br className='sm:block hidden' />
                        should be a conservative position: Not to waste food, and {" "}
                        <br className='max-xl:hidden' />
                        not to throw away a lot of the food that we buy.
                    </p>
                    <div className="flex gap-5">
                        <button
                            type="button"
                            onClick={() => { }}
                            className="hero_button--primary"
                        >
                            Daftar Sekarang
                        </button>
                        <button
                            type="button"
                            onClick={() => { }}
                            className="hero_button--secondary"
                        >
                            About Us
                        </button>
                    </div>
                </div>

                <div className="hero_Image--desktop">
                    <Image
                        src="/assets/images/hero-image-desktop.svg"
                        alt='Hero Image'
                        width={1000}
                        height={500}
                        className='object-contain'
                    />
                </div>
            </div>
        </section >
    );
};

export default Hero;