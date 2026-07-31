import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  wrap,
} from "motion/react";
import GalleryCard from "./GalleryCard";

const CARD_WIDTH = 320;
const GAP = 24;

export default function MarqueeRow({ images, velocity, direction = 1, rowIndex }) {
  const totalWidth = (CARD_WIDTH + GAP) * images.length;
  const x = useMotionValue(0);
  const velocityFactor = useTransform(velocity, [-2500, 0, 2500], [-1.8, 0, 1.8]);
  const smooth = useSpring(velocityFactor, { stiffness: 160, damping: 32 });

  useAnimationFrame((_, delta) => {
    const offset = smooth.get() * direction * delta * 60;
    x.set(wrap(-totalWidth, 0, x.get() + offset));
  });

  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        className="flex min-w-[200%] gap-6 will-change-transform"
        style={{ x }}
      >
        {[...images, ...images].map((image, index) => (
          <GalleryCard
            key={`${rowIndex}-${index}`}
            image={image}
            velocity={velocity}
            index={index % images.length}
          />
        ))}
      </motion.div>
    </div>
  );
}
