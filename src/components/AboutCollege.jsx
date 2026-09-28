import "./AboutCollege.css";
import NSRIT_Campus from "../assets/NSRIT_Campus.jpg";

function AboutCollege() {
    return (
        <section className="about-college">
        <div className="about-college__container">
            <div className="about-college__content">
                <h2 className="about-college__title">About NSRIT</h2>
                <p className="about-college__description">
                    Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT), established in 2008, is located at Sontyam, Visakhapatnam, and is affiliated with JNTU-GV, Vizianagaram. The institution is recognized by UGC, accredited by NAAC, and has been granted autonomous status since 2020. The Departments of CSE, ECE, and EEE have secured NBA Tier-1 accreditation since 2025.
                    <br/>
                    <br/>
                    NSRIT offers a broad spectrum of undergraduate programs, including Civil Engineering (CE), Electrical and Electronics Engineering (EEE), Mechanical Engineering (MECH), Electronics and Communication Engineering (ECE), Computer Science and Engineering (CSE), Computer Science and Design (CSD), and Computer Science and Machine Learning (CSM). In addition, the institute provides professional programs such as MBA, MCA, BBA, and BCA.
                    <br/>
                    <br/>
                    At the postgraduate level, NSRIT offers M.Tech programs in EEE (Power System Control and Automation), Mechanical Engineering (Thermal Engineering), ECE (VLSI Design and Embedded Systems), and CSE (Computer Science and Engineering).
                    <br/>
                    <br/>
                    The campus is equipped with industry-sponsored facilities, including an Industry 4.0 Lab, and has received a ₹90 lakh AICTE IDEA Lab grant to foster research and innovation. NSRIT is recognized for its strong placement record, green and well-equipped campus, industry connectivity, and a transparent admission process that ensures full student intake.
                </p>
            </div>
            <div className="about-college__image">
                <img src={NSRIT_Campus} alt="NSRIT campus in Visakhapatnam" loading="lazy" decoding="async" />
            </div>
        </div>
    </section>
    );
}

export default AboutCollege;
