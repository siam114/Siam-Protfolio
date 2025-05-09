import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/siambanner.jpg" width={40} height={40} alt="" className="img-cover" />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-3 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-1 lg:mb-1">
                    Hello I&apos;m <span className="bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] bg-clip-text text-transparent">SM Sumsuzzaman</span>
                    </h2>
                    <p className="mb-1">Junior Frontend Developer</p>
                    <p className="mb-1">What&apos;s App : 01783030598</p>
                    <p className="mb-8 lg:mb-10">Email : smsiam987@gmail.com</p>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                          label="Download CV"
                          icon="download"
                          href='Resume.pdf'

                        />

                        <ButtonOutline 
                          href="#about"
                          label="Scroll down"
                          icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="mt-5 lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img src="/siambanner.jpg" width={656} height={800} alt="" className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;