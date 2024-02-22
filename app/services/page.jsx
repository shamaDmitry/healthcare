import CTA from '../Components/blocks/CTA';
import QualityImprovementOrganization from '../Components/ServicesPage/QualityImprovementOrganization';
import ProgramIntegrity from '../Components/ServicesPage/ProgramIntegrity';
import DataAnalytics from '../Components/ServicesPage/DataAnalytics';
import SpecialStudies from '../Components/ServicesPage/SpecialStudies';
import Banner from '../Components/ServicesPage/Banner';

const Page = async () => {
  return (
    <section className="relative bg-light">
      <Banner />

      <QualityImprovementOrganization />

      <ProgramIntegrity />

      <DataAnalytics />

      <SpecialStudies />

      <CTA />
    </section>
  );
};

export default Page;
