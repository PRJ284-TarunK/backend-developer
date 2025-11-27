
function ExperienceItem() {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-bold">Experience</h2>

            <div className="card shadow-lg border-0 rounded-4 p-3">
                <div className="card-body">
                    {/* Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                        <div>
                            <h4 className="fw-bold mb-1">Backend Developer</h4>
                            <p className="text-muted mb-2">
                                <strong>
                                    Institute Automation Cell, IIT Palakkad
                                </strong>{" "}
                                — Palakkad, Kerala
                            </p>
                        </div>
                        <span className="badge bg-primary fs-6 px-3 py-2">
                            Jan 2025 – Present
                        </span>
                    </div>

                    <hr />

                    {/* Points */}
                    <ul className="mt-3">
                        <li className="mb-2">
                            Develop RESTful APIs using <strong>Kotlin</strong>{" "}
                            and <strong>Spring Boot</strong> for ERP modules (UG
                            Course Registration, Course Offerings, Instructor
                            Assignment, Semester Planning) serving
                            <strong> 1500+ users</strong>, improving scalability
                            and maintainability.
                        </li>

                        <li className="mb-2">
                            Implement prerequisite validation, caching (
                            <strong>Caffeine</strong>), and API documentation (
                            <strong>Swagger</strong>), boosting validation
                            accuracy by <strong>35%</strong> and reducing
                            deployment time by <strong>40%</strong> through
                            modular architectures.
                        </li>

                        <li className="mb-2">
                            Leading backend design for the{" "}
                            <strong>Research Module</strong>, streamlining PG
                            thesis tracking, guideship workflows, and scholar
                            document processes for{" "}
                            <strong>450+ PG scholars</strong>.
                        </li>
                    </ul>

                    {/* Skills */}
                    <div className="mt-4">
                        <h6 className="fw-bold">Tech Stack:</h6>
                        <span className="badge bg-dark me-2 mb-2">Kotlin</span>
                        <span className="badge bg-dark me-2 mb-2">
                            Spring Boot
                        </span>
                        <span className="badge bg-dark me-2 mb-2">MongoDB</span>
                        <span className="badge bg-dark me-2 mb-2">
                            Caffeine Cache
                        </span>
                        <span className="badge bg-dark me-2 mb-2">Swagger</span>
                        <span className="badge bg-dark me-2 mb-2">
                            Spring Security
                        </span>
                        <span className="badge bg-dark me-2 mb-2">Git</span>
                        <span className="badge bg-dark me-2 mb-2">
                            REST APIs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;