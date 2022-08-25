import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import { theme } from "./../styles/theme/theme";
import { ThemeProvider } from 'next-themes'

const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider defaultTheme="">
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
}

export default MyApp;
