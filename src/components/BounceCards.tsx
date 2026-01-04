import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

export default function BounceCards({
    className = '',
    items = [],
    containerWidth = 400,
    containerHeight = 400,
    animationDelay = 0.5,
    animationStagger = 0.06,
    easeType = 'elastic.out(1, 0.8)',
    transformStyles,
    enableHover = false
}: {
    className?: string;
    items?: { image: string; title?: string }[];
    containerWidth?: number | string;
    containerHeight?: number | string;
    animationDelay?: number;
    animationStagger?: number;
    easeType?: string;
    transformStyles?: string[];
    enableHover?: boolean;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const computedTransformStyles = useMemo(() => {
        if (transformStyles) return transformStyles;

        const centerIndex = (items.length - 1) / 2;
        const translateStep = items.length <= 5 ? 70 : 40;
        const rotateStep = items.length <= 5 ? 5 : 3;

        return items.map((_, i) => {
            const offset = i - centerIndex;
            const rotate = offset * -rotateStep;
            const translate = offset * translateStep;
            return `rotate(${rotate}deg) translate(${translate}px)`;
        });
    }, [items.length, transformStyles]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.card',
                { scale: 0 },
                {
                    scale: 1,
                    stagger: animationStagger,
                    ease: easeType,
                    delay: animationDelay
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [animationDelay, animationStagger, easeType]);

    const getNoRotationTransform = (transformStr: string): string => {
        const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
        if (hasRotate) {
            return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
        } else if (transformStr === 'none') {
            return 'rotate(0deg)';
        } else {
            return `${transformStr} rotate(0deg)`;
        }
    };

    const getPushedTransform = (baseTransform: string, offsetX: number): string => {
        const translateRegex = /translate\(([-0-9.]+)px\)/;
        const match = baseTransform.match(translateRegex);
        if (match) {
            const currentX = parseFloat(match[1]);
            const newX = currentX + offsetX;
            return baseTransform.replace(translateRegex, `translate(${newX}px)`);
        } else {
            return baseTransform === 'none'
                ? `translate(${offsetX}px)`
                : `${baseTransform} translate(${offsetX}px)`;
        }
    };

    const pushSiblings = (hoveredIdx: number) => {
        if (!enableHover || !containerRef.current) return;

        items.forEach((_, i) => {
            // Scope selector to this container
            const selector = containerRef.current?.querySelector(`.card-${i}`);
            if (!selector) return;

            gsap.killTweensOf(selector);

            const baseTransform = computedTransformStyles[i] || 'none';

            if (i === hoveredIdx) {
                const noRotation = getNoRotationTransform(baseTransform);
                gsap.to(selector, {
                    transform: noRotation,
                    duration: 0.4,
                    ease: 'back.out(1.4)',
                    overwrite: 'auto'
                });
            } else {
                const offsetX = i < hoveredIdx ? -160 : 160;
                const pushedTransform = getPushedTransform(baseTransform, offsetX);

                const distance = Math.abs(hoveredIdx - i);
                const delay = distance * 0.05;

                gsap.to(selector, {
                    transform: pushedTransform,
                    duration: 0.4,
                    ease: 'back.out(1.4)',
                    delay,
                    overwrite: 'auto'
                });
            }
        });
    };

    const resetSiblings = () => {
        if (!enableHover || !containerRef.current) return;

        items.forEach((_, i) => {
            const selector = containerRef.current?.querySelector(`.card-${i}`);
            if (!selector) return;

            gsap.killTweensOf(selector);

            const baseTransform = computedTransformStyles[i] || 'none';
            gsap.to(selector, {
                transform: baseTransform,
                duration: 0.4,
                ease: 'back.out(1.4)',
                overwrite: 'auto'
            });
        });
    };

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-center ${className}`}
            style={{
                width: typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
                height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight
            }}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className={`card card-${idx} absolute w-[200px] aspect-[3/4] border-4 border-white dark:border-zinc-800 rounded-[20px] overflow-hidden shadow-2xl group`}
                    style={{
                        transform: computedTransformStyles[idx] || 'none',
                        zIndex: items.length - Math.abs(2 - idx)
                    }}
                    onMouseEnter={() => pushSiblings(idx)}
                    onMouseLeave={resetSiblings}
                >
                    <img className="w-full h-full object-cover" src={item.image} alt={`card-${idx}`} />
                    {item.title && (
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-medium text-center text-sm">{item.title}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
