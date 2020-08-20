import '../styles/util.css';

type Props = {
  Component: any,
  pageProps: any,
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default MyApp
