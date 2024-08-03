import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'dbg': '#100f1b',
        'sbg': '#161526',
        'mbg': '#1b1b2f',
        'hbg': '#222131',
        'ibg': '#2e2f43',
        'tbg': '#282646',
        'txy': '#e3d64d',
        'txg': '#50d748',
        'txp': '#ff6998',
        'txl': '#bd93f9',
        'txc': '#43c7fd',
      },
    },
  },
  plugins: [],
};
export default config;
