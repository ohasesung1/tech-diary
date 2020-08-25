import '../styles/util.css';
import { wrapper } from 'store';

type Props = {
  Component: any,
  pageProps: any,
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
