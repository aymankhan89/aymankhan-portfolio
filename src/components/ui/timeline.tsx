// "use client"
// import { useScroll, useTransform, motion } from "framer-motion"
// import type React from "react"
// import { useEffect, useRef, useState } from "react"

// interface TimelineEntry {
//   title: string
//   content: React.ReactNode
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [height, setHeight] = useState(0)

//   // Improve the height calculation with a resize observer
//   useEffect(() => {
//     if (!ref.current) return

//     const updateHeight = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect()
//         setHeight(rect.height)
//       }
//     }

//     // Initial calculation
//     updateHeight()

//     // Set up resize observer to handle window resizing
//     const resizeObserver = new ResizeObserver(updateHeight)
//     resizeObserver.observe(ref.current)

//     return () => {
//       if (ref.current) resizeObserver.unobserve(ref.current)
//     }
//   }, [])

//   // Improve scroll tracking with better offset values
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 20%", "end 80%"],
//   })

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

//   return (
//     <div className="w-full md:px-10" ref={containerRef}>
//       <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
//           My Journey as a Frontend Developer
//         </h2>
//         <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl italic">
//           I started my journey at iLotusLand and spent 2 years building IoT
//           platforms. For the past 2 years, I&#39;ve been growing at
//           DigitalFortress — and the journey continues. <br /> Here&apos;s a
//           timeline of my journey.
//         </p>
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-40 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
//                 {item.title}
//               </h3>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.content}{" "}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Fixed ResizeObserver cleanup with stable element reference
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      const rect = element.getBoundingClientRect();
      setHeight(rect.height);
    };

    // Initial height calculation
    updateHeight();

    // Set up resize observer
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    // Cleanup using stable element reference
    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
          My Journey as a Frontend Developer
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl italic">
          I started my journey at iLotusLand and spent 2 years building IoT
          platforms. For the past 2 years, I&#39;ve been growing at
          DigitalFortress — and the journey continues. <br /> Here&apos;s a
          timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
