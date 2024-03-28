import HeaderSection from "../Component/HeaderSection/HeaderSection";
import HeroSection from "../Component/HeroSection/HeroSection";
import AboutSection from "../Component/AboutSection/AboutSection";
import IconSection from "../Component/IconSection/IconSection";
import WhySection from "../Component/WhySection/WhySection";
import FormSection from "../Component/FormSection/FormSection";
import FooterSection from "../Component/FooterSection/FooterSection";


function HomePage() {
    return(
        <div>
            <HeaderSection />
            <HeroSection />
            <AboutSection />
            <IconSection />
            <WhySection />
            <FormSection />
            <FooterSection />
        </div>
    )
}

export default HomePage;