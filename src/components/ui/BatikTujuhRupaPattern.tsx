import { motion } from 'framer-motion';

interface BatikTujuhRupaPatternProps {
    className?: string;
    opacity?: number;
    scale?: number;
    speed?: number; // Duration of one full cycle in seconds
}

export const BatikTujuhRupaPattern = ({
    className = "",
    opacity = 0.05,
    scale = 1,
    speed = 100 // Slower for the complex organic pattern
}: BatikTujuhRupaPatternProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div
                className="absolute inset-[-50%] w-[200%] h-[200%]"
                animate={{
                    x: ["-10%", "0%"],
                    y: ["-10%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror" // Forward and back for a gentle floating Sway
                }}
                style={{
                    opacity: opacity,
                    transform: `scale(${scale})`,
                }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="batik-tujuh-rupa"
                            x="0"
                            y="0"
                            width="200"
                            height="200"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* --- Botanical Flow (Pekalongan Style) --- */}

                            {/* Large Flower (Center) */}
                            <g transform="translate(100, 100)">
                                <path
                                    d="M0,-30 Q20,-50 40,-30 Q50,0 20,20 Q0,40 -20,20 Q-50,0 -40,-30 Q-20,-50 0,-30"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="opacity-80"
                                />
                                <circle cx="0" cy="0" r="10" fill="currentColor" className="opacity-40" />
                                {/* Petal details */}
                                <path d="M0,0 L0,-25" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                                <path d="M0,0 L20,-15" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                                <path d="M0,0 L20,15" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                                <path d="M0,0 L-20,15" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                                <path d="M0,0 L-20,-15" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                            </g>

                            {/* Wavy Stems connecting elements */}
                            <path
                                d="M0,200 Q50,150 100,100 T200,0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-40"
                            />
                            <path
                                d="M200,200 Q150,150 100,100 T0,0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-40"
                            />

                            {/* Leaves */}
                            <g transform="translate(50, 150) rotate(-30)">
                                <path d="M0,0 Q20,-20 40,0 Q20,20 0,0" fill="currentColor" className="opacity-30" />
                                <path d="M0,0 L40,0" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                            </g>
                            <g transform="translate(150, 50) rotate(30)">
                                <path d="M0,0 Q20,-20 40,0 Q20,20 0,0" fill="currentColor" className="opacity-30" />
                                <path d="M0,0 L40,0" stroke="currentColor" strokeWidth="1" className="opacity-50" />
                            </g>

                            {/* Smaller Buds/Flowers */}
                            <g transform="translate(40, 40)">
                                <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60" />
                                <circle cx="0" cy="0" r="5" fill="currentColor" className="opacity-40" />
                            </g>
                            <g transform="translate(160, 160)">
                                <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60" />
                                <circle cx="0" cy="0" r="5" fill="currentColor" className="opacity-40" />
                            </g>

                            {/* Isen-isen (dots) filler */}
                            <circle cx="20" cy="100" r="2" fill="currentColor" className="opacity-30" />
                            <circle cx="180" cy="100" r="2" fill="currentColor" className="opacity-30" />
                            <circle cx="100" cy="20" r="2" fill="currentColor" className="opacity-30" />
                            <circle cx="100" cy="180" r="2" fill="currentColor" className="opacity-30" />

                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#batik-tujuh-rupa)" />
                </svg>
            </motion.div>
        </div>
    );
};
