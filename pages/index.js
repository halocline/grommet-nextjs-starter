import Head from 'next/head';
import { Grommet, Heading, Paragraph } from 'grommet';

const Home = () => {
  return (
    <Grommet>
      <Heading>Yo! Grommet + NextJs</Heading>
      <Paragraph>
        This is a simple starter for testing Grommet with SSR.
      </Paragraph>
    </Grommet>
  );
};

export default Home;
