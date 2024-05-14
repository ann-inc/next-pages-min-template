import { useEffect } from "react";
import { JssProvider } from "react-jss";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { createGenerateId } from "jss";

export default function App(props: { Component: any; pageProps: any }) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <JssProvider generateId={createGenerateId({ minify: true })}>
        <Head>
          <title>Mantine next example</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </JssProvider>
    </>
  );
}
