import {ArrowRight, Download, Info} from "lucide-react";
import {Button} from "@/components/ui/button";
import ParticleNetwork from "@/objects/ParticleNetwork";
import {useState, useEffect} from "react";
import DownloadModal from "@/objects/DownloadModal";
import {motion} from "framer-motion";
import "./HeroSection.css";
import {Monitor} from "lucide-react";

const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: custom * 0.1
        }
    })
};

const HeroSection = () => {
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setScrolled(scrollPos > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-x-hidden pt-16">
            <div className="absolute inset-0 z-0">
                <ParticleNetwork/>
            </div>

            <div className="container mx-auto z-10 text-center">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="mb-8 flex justify-center"
                >
                    <div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-shamir-neon to-shamir-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.3)]">
                        <span className="text-black font-bold text-3xl">S</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="neon-text-gradient animate-text-shimmer font-bold text-5xl md:text-6xl lg:text-7xl mb-6"
                >
                    Shamir – The World's Most Secure <br className="hidden md:block"/> Anonymous Messenger
                </motion.h1>

                <motion.p
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Built on Adi Shamir’s secret‑sharing principles, Shamir lets you chat anywhere in complete privacy.
                </motion.p>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={6}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                    <div className={`transition-all duration-500 ${scrolled ? 'animate-bounce' : ''}`}>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: {duration: 0.3}
                            }}
                            className="h-fit rounded-md will-change-transform"
                        >
                            <Button
                                size="lg"
                                className="bg-shamir-neon text-black hover:bg-shamir-neon/90 transition-all duration-300 group rounded-md"
                                onClick={() => setShowDownloadModal(true)}
                            >
                                Download on iOS / Android
                                <Download
                                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${scrolled ? 'group-hover:translate-y-1' : 'group-hover:translate-y-0.5'}`}/>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: {duration: 0.3}
                        }}
                        className="h-fit rounded-md will-change-transform"
                    >
                        <a
                            href="https://app.messages.ltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-shamir-blue text-shamir-blue hover:bg-shamir-blue/10
             transition-all duration-300 group rounded-md"
                            >
                                <Monitor
                                    className="mr-2 h-5 w-5 m duration-300
               group-hover:translate-x-1"
                                />
                                Web версия
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={8}
                    className="w-full max-w-md mx-auto h-12 relative opacity-60"
                >
                    <div className="absolute inset-0 key-pattern"></div>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-shamir-dark via-transparent to-shamir-dark"></div>
                </motion.div>
            </div>

            <DownloadModal
                open={showDownloadModal}
                onOpenChange={setShowDownloadModal}
            />
        </section>
    );
};

export default HeroSection;
