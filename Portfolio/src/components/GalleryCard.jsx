import { motion, useTransform } from "motion/react";

export default function GalleryCard({ image, velocity, index }) {
  const rotateX = useTransform(velocity, [-2200, 0, 2200], [16, 0, -16]);
  const rotateY = useTransform(velocity, [-2200, 0, 2200], [-18, 0, 18]);
  const rotateZ = useTransform(velocity, [-2200, 0, 2200], [6, 0, -6]);
  const scale = useTransform(velocity, [-2200, 0, 2200], [0.96, 1.05, 0.96]);

  return (
    <motion.div
      className="group relative h-[420px] w-[320px] overflow-hidden rounded-[24px] shadow-[0_45px_120px_-50px_rgba(15,23,42,0.55)] will-change-transform"
      style={{
        rotateX,
        rotateY,
        rotateZ,
        scale,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05, y: -10, z: 40 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <img
        src={image}
        alt="Gallery"
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent px-4 pt-10 text-white opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-300">Collection</p>
        <p className="mt-2 text-xl font-semibold">Slide {index + 1}</p>
      </div>
    </motion.div>
  );
}
