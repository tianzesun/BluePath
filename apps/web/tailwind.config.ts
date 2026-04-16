import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Ensure Tailwind scans all your components and pages
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Platform Theme: Defined here so it's easy to reskin
        // Current: UofT (University of Toronto)
        brand: {
          navy: "#002A5C",     // UofT Blue
          silver: "#E8F1F8",   // Light background contrast
          accent: "#2563eb",   // Electric Blue for active paths
        },
        // Graph Node Colors (used by React Flow)
        node: {
          course: "#ffffff",
          prereq: "#002A5C",
          selected: "#2563eb",
        }
      },
      // Essential for making the "Beautiful App" look
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
