import {
  Castoro,
  Hanken_Grotesk,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import LocalFont from "next/font/local";

export const cooper = LocalFont({
  src: "../../public/fonts/CooperLtBTLight.ttf",
  variable: "--font-cooper-serif",
});

export const hanken = Hanken_Grotesk({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const castoro = Castoro({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
export const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
