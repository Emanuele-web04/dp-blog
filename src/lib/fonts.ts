import { Plus_Jakarta_Sans, Bricolage_Grotesque, Geist_Mono, Inter, Source_Serif_4 } from 'next/font/google'
import "../app/globals.css"; // Importa il CSS globale

export const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
export const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
export const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source' })
