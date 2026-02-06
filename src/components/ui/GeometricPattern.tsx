export const GeometricPattern = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="islamic-geometry" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity} />
                        <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity} />
                        <path d="M0 0 L40 40 L80 0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity={opacity * 0.8} />
                        <path d="M0 80 L40 40 L80 80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity={opacity * 0.8} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#islamic-geometry)" />
            </svg>
        </div>
    );
};
