import Layout from "../src/layout/Layout";
import AboutComponent from "../src/components/AboutComponent";
import Drops from "../src/components/Drops";
import ServicesComponent from "../src/components/ServicesComponent";
import KendurnsHero from "../src/components/KendurnsHero";
import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";

const Index = () => {
  return (
    <Layout pageName={"Home Static"}>
     
      <KendurnsHero />

      <AboutComponent />

      <ServicesComponent />

      <Drops />

      {/* <WhyChooseUsComponent /> */}
    </Layout>
  );
};
export default Index;
