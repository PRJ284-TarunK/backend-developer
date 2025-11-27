import "../common/styles/themedBg.css";
import "../common/styles/themedBorder.css";
import "../styles/hero.css";
import ExperienceCard from "../components/experienceCard";
import NavBar from "../components/navbar";
import { fetchEducationData, fetchExperienceData } from "../common/services/dataServices";
import Heading from "../components/heading";
import Hero from "../components/hero";
import EducationCard from "../components/educationCard";


function HomeScreen() {

    return (
        <div>
            <NavBar />
            {/* <VerticalSocialBar /> */}
            <Hero />
            <Heading label="Experience" />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {fetchExperienceData().map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
            <Heading label="Education" />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {fetchEducationData().map((exp, index) => (
                    <EducationCard key={index} education={exp} />
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;
