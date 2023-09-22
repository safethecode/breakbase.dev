import localFont from 'next/font/local';

import { Work_Sans, Bebas_Neue } from 'next/font/google';

export const WorkSansFontStyle = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

export const BebasNenuFontStyle = Bebas_Neue({
  variable: '--font-bebas-nenu',
  weight: '400',
  subsets: ['latin'],
});

export const PretendardFontStyle = localFont({
  variable: '--font-pretendard',
  src: '../../public/_static/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export const JalnanFontStyle = localFont({
  variable: '--font-jalnan',
  src: '../../public/_static/fonts/Jalnan.ttf',
  display: 'swap',
  weight: '400',
});
