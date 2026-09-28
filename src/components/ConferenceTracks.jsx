import './ConferenceTracks.css';

const ConferenceTracks = () => {
    const tracks = [
        {
            title: "Track 1: " + "Artificial Intelligence, Data Science, Cyber-Physical Systems, and Intelligent Computing",
            description: "Topics include : ",
            topics: [
                "Artificial Intelligence and Machine Learning",
                "Data Analytics",
                "Cloud and Edge Computing",
                "Cybersecurity",
                "Internet of Things (IoT)",
                "Quantum Computing",
                "Blockchain",
                "Software Engineering",
                "Emerging Computing Paradigms (Neuromorphic, DNA, etc.) and many more..."
            ]
        },
        {
            title: "Track 2: " + "Smart Electronics, Communication Systems, and Sustainable Electrical Technologies",
            description: "Topics include :",
            topics: [
                "VLSI",
                "Embedded Systems",
                "Communication Networks",
                "Signal Processing",
                "Power Systems",
                "Renewable Energy",
                "Smart Grids",
                "Electric Vehicles",
                "And many more..."
            ]
        },
        {
            title: "Track 3: " + "Advanced and Sustainable Engineering Systems",
            description: "Topics include :  ",
            topics: [
                "Industry 4.0",
                "Robotics",
                "Additive Manufacturing",
                "Sustainable Design and simulation",
                "Advanced thermal systems",
                "Structural Engineering",
                "Green Buildings",
                "Transportation Systems",
                "Sustainable Materials and many more..."
            ]
        },
        {
            title: "Track 4: " + "Innovation, Entrepreneurship, Digital Transformation, and Sustainable Business Management",
            description: "Topics include : ",
            topics: [
                "Startup Ecosystems",
                "Digital Marketing",
                "Business Analytics",
                "Financial Technologies",
                "Human Resource Innovations",
                "Strategic Management",
                "Sustainable Business Practices",
                "And many more..."
            ]
        }
    ];

    return (
        <section className="conference-tracks section" id="tracks">
            <div className="container">
                <h2 className="section-title">Conference Tracks and Track Themes</h2>
                <p className="section-subtitle">
                </p>
                <div className="tracks-grid">
                    {tracks.map((track, idx) => (
                        <div className="track-card" key={idx}>
                            <h3 className="track-title">{track.title}</h3>
                            <p className="track-description">{track.description}</p>
                            <ul className="track-topics">
                                {track.topics.map((topic, tIdx) => (
                                    <li key={tIdx}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    );
}

export default ConferenceTracks;