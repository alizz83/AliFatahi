import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import NewsSection from "../../components/NewsSection/NewsSection";

const services = [
    {
    title: "مشاوره",
    description: "مشاوره با هنرجو ها و استادان",
    type: "consult",
    color: "green",
    className: "consult-card",
  },
  
  {
    title: "کنسرت",
    description: "تک نوازی،هم نوازی،آوا",
    type: "courses",
    color: "green",
    className: "courses-card",
  },
  {
    title: "خرید انواع ساز",
    description: "کیفیت عالی،قیمت مناسب",
    type: "job",
    color: "purple",
    className: "job-card",
  },
  {
    title: "برترین اساتید",
    description: "اساتید با تجربه تدریس بیش از دو دهه",
    type: "test",
    color: "purple",
    className: "test-card",
  },
  
];

function Home() {
  return (
    <main className="home">

      <section className="services-section">

        <Breadcrumb />

        <h1 className="section-title">
          خدمات ما، راهی به سوی موفقیت شما
        </h1>


        <div className="services-layout">

          <div className="cards-area">

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}

          </div>


          <HeroSlider />

        </div>


      </section>


      <NewsSection />


    </main>
  );
}


export default Home;