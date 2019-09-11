import Link from 'next/link';
import FancyLink from '../components/FancyLink';

const About = () => (
  <div>
    <p>This is a page about the site.</p>
    <p><Link href="/" passHref><FancyLink>Back to Home</FancyLink></Link></p>
  </div>
)

export default About;