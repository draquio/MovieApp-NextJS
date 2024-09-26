
import type { Config } from "tailwindcss";
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens: {
			tablet: '700px',
			// => @media (min-width: 640px) { ... }
			laptop: '950px',
			// => @media (min-width: 1024px) { ... }
		},
		keyframes: {
			fadeup: {
			  "0%": {
				opacity: "0",
				transform: "translateY(30px)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0px)",
			  },
			},
			fade: {
				"0%": {
				  opacity: "0",
				},
				"100%": {
				  opacity: "1",
				},
			},
			blur: {
				"0%": {
				  filter: "blur(20px)",
				},
				"100%": {
				  filter: "blur(0px)",
				},
			},
			scaleUp: {
				"0%": {
				  transform: "scale(0.7)",
				},
				"100%": {
				transform: "scale(1)",
				},
			}
		},
		animation: {
			fadeup: "fadeup 0.5s ease-in-out",
			fade: "fade 0.5s ease-in-out",
			blur: "blur 0.5s ease-in-out",
			scaleUp: "scaleUp 0.5s ease-in-out",
		  },
  	}
  },
//   plugins: [require("tailwindcss-animate")],
};
export default config;
