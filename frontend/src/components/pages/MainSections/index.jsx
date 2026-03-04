import Contact from "../../organisms/Contact";
import Experience from "../../organisms/Experience";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Intro from "../../organisms/Intro";
import Portfolio from "../../organisms/Portfolio";
import Testimonials from "../../organisms/Testimonials";
import Topbar from "../../molecules/Topbar"

export const MainSections = ()=>{
    return (
        <div>
            <Topbar />
                <Header />
                <Intro />
                <Experience />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
        </div>
    )
}