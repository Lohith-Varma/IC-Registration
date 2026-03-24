import './Committees.css'

const committeesData = [
  {
    category: "Organizing Committee",
    members: [
      { role: "Conference Chair", name: "Dr. Rayudu Srinivas", description: "Professor & Head, Department of CSE" },
      { role: "Conference Co-Chair", name: "Dr. B. Siva Prasad", description: "Professor & Head, Department of ECE" },
      { role: "Conference Co-Chair", name: "Dr. R. S. R. Krishnam Naidu", description: "Professor & Head, Department of EEE" },
      { role: "Organizing Secretary", name: "Dr. K. Madhavi", description: "Professor & Head, Department of CSD" }
    ]
  },
  {
    category: "Editorial Board",
    members: [
      { role: "Chief Editor", name: "Dr. V. S. R. Murthy", description: "Professor, Department of CSE" },
      { role: "Associate Editor", name: "Dr. A. S.S.V. Ram Kumar", description: "Professor, Department of CSM" },
      { role: "Associate Editor", name: "Dr. N. V. V. S. Surya Narayana", description: "Professor, Department of Mathematics" },
      { role: "Associate Editor", name: "Dr. N. Prasanthi", description: "Associate Professor, Department of S&H" }
    ]
  },
  {
    category: "Technical Review Committee",
    members: [
      { role: "Head", name: "Dr. R. Priya Vaijayanthi", description: "Professor, CSM" },
      { role: "Member", name: "Dr. S. Sridhar", description: "Professor, ECE" },
      { role: "Member", name: "Dr. S. Rajendra Prasad", description: "Associate Professor, EEE" },
      { role: "Member", name: "Dr. G.Vijay Kumar", description: "Professor, MECH" },
      { role: "Member", name: "Dr. S. Sarojini Devi", description: "" },
      { role: "Member", name: "Mrs. Ch. Devi", description: "" },
      { role: "Member", name: "Mr. Achutvardhan", description: "" },
      { role: "Member", name: "Mr. A. Suraj Kumar", description: "" },
      { role: "Member", name: "Dr. N. Pallavi Senapati", description: "" },
      { role: "Member", name: "Mr. T. Naidu", description: "" }
    ]
  },
  {
    category: "Finance Committee",
    members: [
      { role: "Committee Head", name: "Mr. K. S. Ramanjaneyulu", description: "" },
      { role: "Member", name: "Dr. G. Varaprasad", description: "" },
      { role: "Member", name: "Mrs. S. Jayaprada", description: "" },
      { role: "Member", name: "Mrs. B. Revathi", description: "" },
      { role: "Member", name: "Mrs. S. Roopa", description: "" },
      { role: "Member", name: "Mrs. S. Yamini", description: "" },
      { role: "Member", name: "Mrs. T. Prasanthi", description: "" }
    ]
  },
  {
    category: "Registration Committee",
    members: [
      { role: "Committee Head", name: "Dr. K. S. D. L. Kalyan Prasad", description: "S&H" },
      { role: "Member", name: "Dr. E. Madhavi", description: "S&H" },
      { role: "Member", name: "Dr. P. Hema Kumar", description: "ECE" },
      { role: "Member", name: "Mrs. G. Revathi", description: "CSE / CSM / CSD" },
      { role: "Member", name: "Mrs. B. Dhana Lakshmi", description: "CSE / CSM / CSD" },
      { role: "Member", name: "Mrs. K. Anusha Nandini", description: "MECH" },
      { role: "Member", name: "Mrs. K. Priyanka", description: "EEE" }
    ]
  },
  {
    category: "Publicity and Marketing Committee",
    members: [
      { role: "Committee Head", name: "Dr. Naveen", description: "MECH" },
      { role: "Member", name: "Dr. K. Rajasekhar", description: "ECE" },
      { role: "Member", name: "Mr. K. Shankar", description: "Associate Professor, CSE" },
      { role: "Member", name: "Mr. A. Nagabhushana Rao", description: "CSE / CSM / CSD" },
      { role: "Member", name: "Mrs. P. Kavya", description: "CSE / CSM / CSD" },
      { role: "Member", name: "Mr. K. Ram Prasad", description: "MECH" },
      { role: "Member", name: "Mr. K. M. M. Tarakesh", description: "EEE" },
      { role: "Member", name: "Mr. P. Haragopal", description: "CE" }
    ]
  },
  {
    category: "Sponsorship Committee",
    members: [
      { role: "Committee Head", name: "Dr. B. Ravichandra", description: "ECE" },
      { role: "Member", name: "Dr. T. V. S. Sriram", description: "Associate Professor, CSE" },
      { role: "Member", name: "Mr. Jacob Finny", description: "CSE / CSM / CSD" }
    ]
  },
  {
    category: "Logistics Committee",
    members: [
      { role: "Committee Head", name: "Dr. Tulasi Naidu", description: "Head, TPO" },
      { role: "Member", name: "Dr. U. V. Subbarao", description: "S&H" },
      { role: "Member", name: "Dr. Sita Rama Raju", description: "S&H" },
      { role: "Member", name: "Mr. E. Siva Krushna", description: "CSE" },
      { role: "Member", name: "Mr. K. Abhinash", description: "MECH" },
      { role: "Member", name: "Mr. A. Bala Raja Ram", description: "EEE" },
      { role: "Member", name: "Mr. S. Lovaraju", description: "CE" }
    ]
  }
];

const Committees = () => {
  return (
    <section id="committees" className="committees">
      <div className="committees__container">
        <h2 className="committees__title">Organizing Committees</h2>
        <div className="committees__grid">
          {committeesData.map((committee, idx) => (
            <div key={idx} className="committee-card">
              <h3 className="committee-card__title">{committee.category}</h3>
              <ul className="committee-card__list">
                {committee.members.map((member, mIdx) => (
                  <li key={mIdx} className="committee-card__item">
                    <span className="committee-card__role">{member.role}</span>
                    <span className="committee-card__name">{member.name}</span>
                    {member.description && <span className="committee-card__desc">{member.description}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Committees
