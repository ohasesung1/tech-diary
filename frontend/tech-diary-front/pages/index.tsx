import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { env } from 'libs/config/env';
import { MainTemplate } from 'component/template/MainTemplate';


// type Props = {
//   Component: any,
//   pageProps: any,
// };

export default function IndexPage() {
  return (
   <>
    <Head>
      <title>{env.appName}</title>
    </Head>
    <MainTemplate>
      
    </MainTemplate>
   </>
  )
}
