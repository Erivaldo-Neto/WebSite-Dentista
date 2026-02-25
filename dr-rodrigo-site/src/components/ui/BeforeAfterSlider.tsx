import { useState, useRef, useCallback, useEffect } from 'react';
import { m } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt?: string;
    afterAlt?: string;
}

export const BeforeAfterSlider = ({
    beforeSrc,
    afterSrc,
    beforeAlt = 'Antes',
    afterAlt = 'Depois',
}: BeforeAfterSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (isDragging) {
                handleMove(e.clientX);
            }
        },
        [isDragging, handleMove]
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            handleMove(e.touches[0].clientX);
        },
        [handleMove]
    );

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-sm cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* Imagem Depois (Base) */}
            <img
                src={afterSrc}
                alt={afterAlt}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
            />

            {/* Imagem Antes (Overlay com clip-path) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeSrc}
                    alt={beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* Linha Divisória */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-gold z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            />

            {/* Handle Central */}
            <div
                className="absolute top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 bg-[#0A2A43] border-2 border-gold rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
            >
                <ChevronsLeftRight size={20} className="text-gold" />
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
