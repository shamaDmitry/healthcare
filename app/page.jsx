import Banner from './Components/HomePage/Banner';
import CTA from './Components/blocks/CTA';
import Solutions from './Components/HomePage/Solutions';
import ProviderServices from './Components/HomePage/ProviderServices';
import PayerServices from './Components/HomePage/PayerServices';
import Government from './Components/HomePage/Government';
import AboutUs from './Components/HomePage/AboutUs';
import LatestNews from './Components/News/LatestNews';

export default async function Home() {
  return (
    <section className="relative bg-light">
      <Banner />

      <Solutions />

      <ProviderServices />

      <PayerServices />

      <Government />

      <AboutUs />

      <LatestNews />

      <CTA />
    </section>
  );
}
