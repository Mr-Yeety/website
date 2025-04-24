import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Contact"] as const;
type Tab = typeof tabs[number];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<Tab>("Home");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  // Properly set refs without returning a value
  const setTabRef = useCallback((el: HTMLButtonElement | null, index: number) => {
    tabRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    const container = containerRef.current;

    if (currentTab && container) {
      const tabRect = currentTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Default positions
      let left = tabRect.left - containerRect.left;
      let width = tabRect.width;

      // Handle first tab by making sure it doesn't overflow
      if (index === 0) {
        const extra = 8; // Offset to make it reach the left edge
        left = 0;
        width = tabRect.right - containerRect.left + extra;
      }

      // Handle last tab by making sure it doesn't overflow
      else if (index === tabs.length - 1) {
        const extra = 8; // Offset to make it reach the right edge
        width = containerRect.right - tabRect.left + extra;
      }

      // Prevent slider from going outside the container's boundaries
      if (left + width > containerRect.width) {
        width = containerRect.width - left;
      }

      setSliderStyle({ left, width });
    }
  }, [activeTab]);

  return (
    <div className="flex justify-center items-center mt-10">
      <div
        ref={containerRef}
        className="relative flex justify-evenly bg-transparent border-1 border-content/30 rounded-lg px-2 py-1 w-75" 
      >
        {/* Slider */}
        <motion.div
          className="absolute top-0 bottom-0 bg-content-light/20 rounded-lg z-0"
          animate={{
            left: sliderStyle.left,
            width: sliderStyle.width,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Tabs */}
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => setTabRef(el, i)}  // Using the callback ref
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-4 py-1 text-sm font-medium transition-colors font-poppins duration-200 text-content`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
