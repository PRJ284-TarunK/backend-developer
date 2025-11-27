export default function Experience() {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <h3 className="role">Backend Developer</h3>
                <span className="period">JAN 2025 - Present</span>
            </div>
            <div className="company-location">
                IIT Palakkad — Palakkad, Kerala, India
            </div>
            <p className="description">
                Develop REST APIs using Kotlin & Spring Boot for ERP modules.
            </p>
            <ul className="points">
                <li>Implemented caching (Caffeine) and Swagger documentation.</li>
                <li>Leading backend architecture for Research Module.</li>
            </ul>
            <div className="tech-stack">
                <span className="tech">Kotlin</span>
                <span className="tech">Spring Boot</span>
                <span className="tech">MongoDB</span>
                <span className="tech">Caffeine</span>
            </div>
        </div>

    );
}
