import "@/styles/globals.css";
import {
  // Backdrop,
  // CircularProgress,
  StyledEngineProvider,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";
const queryClient = new QueryClient();

// import { SessionProvider, useSession, signOut } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const handleStart = (url) => {
      ref.current.continuousStart();
    };
    const handleStop = () => {
      ref.current.complete();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {/* <SessionProvider
        session={session}
        // Re-fetch session every 4  minutes
        refetchInterval={4 * 60}
        // Re-fetches session when window is focused
        refetchOnWindowFocus={true}
      > */}
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <SnackbarProvider maxSnack={3}>
              <StyledEngineProvider injectFirst>
                <LoadingBar color="#2F7CE3" ref={ref} />
                {Component.getLayout(<Component {...pageProps} />)}
              </StyledEngineProvider>
            </SnackbarProvider>
          </Hydrate>
        </QueryClientProvider>
      {/* </SessionProvider> */}
    </ThemeProvider>
  );
}