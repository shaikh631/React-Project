import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function ScrollHorizontal() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const items = [
      {
        id: 1,
        label: "Policy Point",
        image: "/iBayzat.png",
        url: "https://policypoint.vercel.app",
        points: ["React", "Tailwind", "Modern UI", "Responsive UX"],
      },
      {
        id: 2,
        label: "MegaBlog",
        image: "/MegaBlog.png",
        url: "https://...",
        points: ["Next.js", "Content Structure", "Fast Loading", "Clean Design"],
      },
      {
        id: 3,
        label: "Banking System",
        image: "/Bank.png",
        url: "https://...",
        points: ["Java", "Spring Boot", "Secure Flow", "Dashboard"],
      },
      {
        id: 4,
        label: "Online Examination System",
        image: "/OnlineExam.png",
        url: "https://...",
        points: ["React", "Node.js", "Exam UI", "Real-time Logic"],
      },
    ];

    const ITEM_WIDTH = 1200;
    const GAP = 30;

    // Move from first item centered to last item centered
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

    return (
      <div ref={containerRef} className="relative h-[300vh] py-20">
        <div className="mx-auto mb-12 flex max-w-[1200px] flex-col items-start px-6 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Projects</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Selected work with modern UI and real-world impact.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            A glimpse into the apps and experiences I’ve built across web, product, and full-stack development.
          </p>
        </div>
        <div className="sticky top-0 flex h-screen w-[min(90vw,1100px)] mx-auto items-center overflow-visible">
          
          <motion.div style={{ x }} className="flex gap-[30px] will-change-transform">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-[650px] w-[min(90vw,1100px)] shrink-0 overflow-hidden rounded-3xl group"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-300 group-hover:brightness-75" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8">
                  <div className="w-full">
                    <span className="mb-2 block text-sm font-mono text-white/70">0{item.id}</span>
                    <h2 className="inline-flex rounded-full border border-white/20 bg-white/15 px-6 py-3 text-2xl font-semibold text-white shadow-lg backdrop-blur-md">
                      {item.label}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {item.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur-sm"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    )
}

/**
 * ==============   Styles   ================
//  */

// function StyleSheet() {
//     return (
//         <style>{`
//             body {
//                 overflow-x: hidden;
//             }

//             #example {
//                 height: auto;
//                 overflow: visible;
//             }

//             .intro-section {
//                 height: 50vh;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: flex-end;
//                 align-items: center;
//                 text-align: center;
//                 padding-bottom: 40px;
//             }

//             .intro-section h1 {
//                 font-size: clamp(36px, 8vw, 72px);
//                 color: var(--white);
//                 margin: 0;
//                 text-transform: uppercase;
//             }

//             .scroll-container {
//                 height: 300vh;
//                 position: relative;
//             }

//             .sticky-wrapper {
//                 position: sticky;
//                 top: 0;
//                 height: 100vh;
//                 //  width: 400px;
//                 margin: 0 auto;
//                 display: flex;
//                 align-items: center;
//                 justify-content: flex-start;
//                 overflow: visible;
//                  width: min(90vw, 1100px);
//             }

//             .gallery {
//                 display: flex;
//                 gap: 30px;
//                 will-change: transform;
                
//             }

//             .gallery-item {
//                 flex-shrink: 0;
//                 //  width: 600px;
//                 // height: 500px;
//                // border-radius: 12px;
//                 position: relative;
//                 overflow: hidden;
//                 background-image: var(--item-image);
//                 background-size: cover;
//                 background-position: center;
//                  width: min(90vw, 1100px);
//     height: 650px;
//     border-radius: 24px;
//             }

//             .gallery-item::before {
//                 content: "";
//                 position: absolute;
//                 inset: 0;
//                 background: linear-gradient(
//                     to bottom,
//                     transparent 60%,
//                     var(--item-color)
//                 );
//                 mix-blend-mode: multiply;
//             }

//             .item-content {
//                 position: absolute;
//                 bottom: 30px;
//                 left: 30px;
//                 z-index: 1;
//             }

//             .item-number {
//                 font-size: 14px;
//                 color: var(--item-color);
//                 font-family: "Geist Mono", monospace;
//                 display: block;
//                 margin-bottom: 8px;
//             }

//             .gallery-item h2 {
//                 font-size: 28px;
//                 font-weight: 600;
//                 color: var(--white);
//                 margin: 0;
//             }

//             .outro-section {
//                 height: 100vh;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//             }

//             @media (max-width: 600px) {
//                 .sticky-wrapper {
//                     width: 280px;
//                 }

//                 .gallery {
//                     gap: 15px;
//                 }

//                 .gallery-item {
//                     width: 280px;
//                     height: 350px;
//                 }
//             }

//             @media (prefers-reduced-motion: reduce) {
//                 .gallery {
//                     transform: none !important;
//                 }
//                 .scroll-container {
//                     height: auto;
//                 }
//                 .sticky-wrapper {
//                     position: relative;
//                     height: auto;
//                     width: 100%;
//                     overflow-x: auto;
//                     padding: 50px 0;
//                 }
//             }
//         `}</style>
//     )
// }
