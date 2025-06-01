import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHero from "./component/MainHero";
import AboutHero from "./component/Hero";
import ProjectsSection from "./component/Projectpage";
import SkillsPage from "./component/Skillpage";
import ContactPage from "./component/Contactppage";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div >
     <MainHero/>
     <AboutHero/>
     <ProjectsSection/>
     <SkillsPage/>
     <ContactPage/>
     <Footer/>
    </div>
  );
}
