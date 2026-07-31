import { motion, useScroll, useVelocity, useSpring, useTransform } from "motion/react";
import MarqueeRow from "./MarqueeRow";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=900",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",
  "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=900",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900",
  "https://images.unsplash.com/photo-1513938709626-033611b8cc03?w=900",
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900",
];

function useVelocityOffset(scrollY) {
  const velocity = useVelocity(scrollY);
  const spring = useSpring(velocity, { stiffness: 140, damping: 30 });
  const offset = useTransform(spring, (latest) => latest * 0.00016);
  return { velocity: spring, offset };
}

export default function VelocityGallery() {
  const { scrollY } = useScroll();
  const { velocity, offset } = useVelocityOffset(scrollY);
  const headerY = useTransform(offset, [-1, 0, 1], [28, 0, -28]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <motion.div
          style={{ y: headerY }}
          className="mb-16 max-w-3xl rounded-[36px] border border-white/10 bg-slate-900/70 px-8 py-10 shadow-2xl backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Scroll Velocity Linked Gallery
          </p>
          <h2 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            A premium gallery with scroll-linked horizontal motion.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Scroll vertically to control the speed, direction, and 3D offset of each row. The motion is spring-smoothed and loops infinitely.
          </p>
        </motion.div>

        <div className="space-y-8">
          <MarqueeRow images={images} velocity={velocity} direction={-1} rowIndex={0} />
          <MarqueeRow images={images} velocity={velocity} direction={1} rowIndex={1} />
          <MarqueeRow images={images} velocity={velocity} direction={-1} rowIndex={2} />
        </div>
      </div>
    </section>
  );
}
