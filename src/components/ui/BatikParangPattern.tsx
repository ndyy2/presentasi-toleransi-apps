import { motion } from 'framer-motion';

interface BatikParangPatternProps {
    className?: string;
    opacity?: number;
    scale?: number;
    speed?: number; // Duration of one full cycle in seconds
}

export const BatikParangPattern = ({
    className = "",
    opacity = 0.05,
    scale = 1,
    speed = 60
}: BatikParangPatternProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div
                className="absolute inset-[-50%] w-[200%] h-[200%]"
                animate={{
                    x: ["-25%", "0%"],
                    y: ["-25%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    opacity: opacity,
                    transform: `rotate(-45deg) scale(${scale})`,
                }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="batik-parang-floral"
                            x="0"
                            y="0"
                            width="140"
                            height="200"
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)"
                        >
                            {/* --- Main Parang Spine (S-shape) --- */}
                            <path
                                d="M70,0 Q120,50 70,100 Q20,150 70,200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                className="opacity-90"
                            />

                            {/* --- Secondary Inner Lines (Branches/Details) --- */}
                            <path
                                d="M70,20 Q95,45 70,70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-60"
                            />
                            <path
                                d="M70,130 Q45,155 70,180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-60"
                            />

                            {/* --- Mlinjon (Diamond Accents) along the spine --- */}
                            <path
                                d="M70,35 L85,50 L70,65 L55,50 Z"
                                fill="currentColor"
                                className="opacity-30"
                            />
                            <path
                                d="M70,135 L85,150 L70,165 L55,150 Z"
                                fill="currentColor"
                                className="opacity-30"
                            />

                            {/* --- Floral Elements (Bunga) --- */}
                            {/* Stylized Flower 1 (Top right curve) */}
                            <g transform="translate(90, 80) scale(0.6)">
                                <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="opacity-50" />
                                <path d="M-10,-5 Q0,-20 10,-5 Q20,0 10,5 Q0,20 -10,5 Q-20,0 -10,-5" fill="currentColor" className="opacity-40" />
                                <circle cx="0" cy="0" r="3" fill="currentColor" />
                            </g>
                            {/* Stylized leaf branching out */}
                            <path
                                d="M90,80 Q110,60 120,40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-50"
                            />
                            <path
                                d="M120,40 Q130,30 110,30 Q100,40 120,40"
                                fill="currentColor"
                                className="opacity-40"
                            />


                            {/* Stylized Flower 2 (Bottom left curve) */}
                            <g transform="translate(50, 180) scale(0.6)">
                                <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="opacity-50" />
                                <path d="M-10,-5 Q0,-20 10,-5 Q20,0 10,5 Q0,20 -10,5 Q-20,0 -10,-5" fill="currentColor" className="opacity-40" />
                                <circle cx="0" cy="0" r="3" fill="currentColor" />
                            </g>
                            {/* Stylized leaf branching out */}
                            <path
                                d="M50,180 Q30,160 20,140"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-50"
                            />
                            <path
                                d="M20,140 Q10,130 30,130 Q40,140 20,140"
                                fill="currentColor"
                                className="opacity-40"
                            />


                            {/* --- Connecting Lines check --- */}
                            <path
                                d="M70,0 L70,10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-40"
                            />
                            <path
                                d="M70,190 L70,200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-40"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#batik-parang-floral)" />
                </svg>
            </motion.div>
        </div>
    );
};
