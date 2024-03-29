import Speaker from '../components/Speaker';
import { Element } from 'react-scroll';
import Header from '../components/ui/Header';
import useGetStaticData from '../services/useGetStaticData';
import Head from 'next/head';

export default function Speakers() {
  const { isLoaded, rpData } = useGetStaticData();

  const { speakerSection } = rpData;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header isHero={false}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isLoaded && (
        <Element name="speakers">
          {<Speaker speakers={speakerSection.list} />}
        </Element>
      )}
    </>
  );
}
