import {
  Hero,
  CustomerReview,
  Footer,
  Nav,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
  Suscribe,
} from "./Components/Sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b  ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
