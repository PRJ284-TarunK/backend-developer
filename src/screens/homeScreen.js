import "../common/styles/themedBg.css";
import "../common/styles/themedBorder.css";
import "../styles/hero.css";
import Profile from "../components/profilePhoto";
import { Palette1 } from "../common/colors";
import ExperienceItem from "../components/experienceItem";

function HomeScreen() {
    return (
        <div>
            <div className="moving-section">
                <div
                    style={{
                        flexDirection: "column",
                        backgroundColor: Palette1,
                    }}
                >
                    <Profile />
                    <div
                        style={{
                            flexDirection: "row",
                            backgroundColor: Palette1,
                        }}
                    >
                        <h1 className="blended-text">Hello, I am Tarun</h1>
                        <p className="blended-text">
                            The result driven backend developer
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px", // spacing between cards
                }}
            >
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </div>
    );
}

export default HomeScreen;
