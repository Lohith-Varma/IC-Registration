import React from "react";
import "./AboutCollege.css";

function AboutCollege() {
    return (
        <section className="about-college">
        <div className="about-college__container">
            <div className="about-college__content">
                <h2 className="about-college__title">About NSRIT</h2>
                <p className="about-college__description">
                    Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT), established in 2008 at Sontyam, Visakhapatnam, is affiliated to Jawaharlal Nehru Technological University-GV, Vizianagaram. The institute is UGC-recognized, NAAC-accredited, autonomous since 2020, and achieved NBA Tier-1 accreditation for CSE, ECE, EEE departments in 2025. NSRIT offers B.Tech programmes in core and emerging disciplines along with MBA, MCA, BBA, and BCA, and M.Tech programmes in EEE, Mechanical, ECE, and CSE specializations. With a green, industry-connected campus, an Industry 4.0 Lab, and a ₹90 lakh AICTE IDEA Lab, the institute promotes innovation, ensures strong placements, and follows a transparent admission process with full student intake.
                </p>
            </div>
            <div className="about-college__image">
                <img src="./assets/nsrit.jpeg" alt="NSRIT Campus" />
            </div>
        </div>
    </section>
    );
}

export default AboutCollege;