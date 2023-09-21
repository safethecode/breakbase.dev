import { constructMetadata } from '@/utils/next';
import {
  WorkSansFontStyle,
  BebasNenuFontStyle,
  PretendardFontStyle,
} from '@/styles/globalFontsStyle';

import Providers from './providers';

import '@/styles/globalStyle.css';

export const metadata = constructMetadata({
  title: '핏짜 — 개발자를 위한 뉴스레터',
  description: '핏짜 — 업무에 집중해야 하는 개발자를 위한 뉴스레터입니다.',
  keywords: ['newsletter', 'developer', 'frontend'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#000" />
      <body className={PretendardFontStyle.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
