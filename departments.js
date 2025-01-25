const teachersData = {
    "Computer Science": [
        { name: "SHAHANA T", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F17355-OQvzc.jpg", specialization: "C , data structures , DBMS , Sql " },
        { name: "SRUTHIMOL M P", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46441-5I0ml.jpg", specialization: "java , Oops , os , network , dbms" },
        { name: "SHAJILA MAJEED", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46978-jKLkU.jpg", specialization: "web development , html , css , js , php , design " },
        { name: "DRISHYA S G", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F4129-RM6rJ.jpeg", specialization: "virtual reality , augmented reality , vr , Ar ,  3d modeling , unity , game development , blender , python , c#" },

        { name: "NAHANA C", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48832-iGqRy.jpg", specialization: "OOMD ,Network and security ,network  ,security  , cloud computing , cyber security" },

        { name: "HRIDYA P R", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48834-qUHOB.jpg", specialization: "machine learning , artificial intelligence , deep learning , computer vision , natural language processing" }
        // { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },

    ],
    "Mechanical": [
        { name: "DR. JESSEELA S", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F11023-gtm7y.jpg", specialization: "Heat Transfer Mechanisms in Micro- and Nano-Scale Systems ,Thermal Analysis and Management of Electronic Devices , Numerical Simulation of Convective Heat Transfer , Advances in Thermoelectric Materials and Applications , Modeling of Phase Change Phenomena in Heat Exchangers and Power Plant" },
        { name: "DR. SAJITH P.P..", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F10989-TrkBC.jpg", specialization: "thermal engineering , theraml science , heat transfer mechanisms , heat transfer analysis , numerical simulation of convective heat transfer and power plant" },
        { name: "DR.PRADEEP M KAMATH", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F18740-okRSI.jpg", specialization: "Microtubes , Microchannel , Friction , Cooling , Enhancement , Porous , Resistance , Convection , Mixed , Fluid Flow , ConvectionAspect" },
        { name: "DR. SAIJAL K.K.", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F9201-ZKxbo.jpg", specialization: "Bio-Lubricant , Heat Exchanger , Solar Dryer , Helicopter Rotor , Genetic Algorithm , Gas Simulation , Vibration Reduction , Trailing-Edge Flaps , Helicopter Vibration , Advance Ratios , Wind Turbine , Thrust Coefficients ,  Helicopter Optimization , Neural Network Optimization" },
        { name: "DR. FRANCIS J. EMMATTY", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F333-q1Mau.jpg", specialization: "Ergonomic Assessment , Waste Task Study , Occupational Health , Handedness Ergonomics , Mental Workload ,  Waste Intervention , Academic Kaizen , Work Table Ergonomics,  Posture Analysis , Mental Workload Factors" }

    ],
    "Chemical": [
        { name: "DR. GIGI SEBASTIAN", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F8383-2wC9d.jpg", specialization: "Titanium Dioxide Simulation , Hydrogen Production , Sustainable Ammonia , Methanol Heat Integration , Multiloop Control Analysis , Multivariate Process Analysis , Time-Series Modelling" },
        { name: "DR. BINU T V.", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F7997-KElbC.jpg", specialization: "Fluid Drop Mass Transfer , CO2 & SO2 Raindrop Absorption , Heat Transfer in Fluid Drops" }
    ],
    "Electronics and Communication": [
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },
        { name: "Prof. Anjali R.", photo: "images/anjali.jpg", specialization: "Fluid Mechanics" }
    ],
    "Applied Electronics": [
        { name: "DR. BINDIMA T", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F33876-rbKPx.jpg", specialization: "Thermodynamics" },
        { name: "Prof. Anjali R.", photo: "images/anjali.jpg", specialization: "Fluid Mechanics" }
    ],
    // Add more departments and teachers here
};

function showTeachers(department) {
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = `<h2>Teachers in ${department}</h2>`;
    teachersData[department].forEach(teacher => {
        teacherList.innerHTML += `
            <div class="teacher-card">
                <img src="${teacher.photo}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                <p>Specialization: ${teacher.specialization}</p>
                <button onclick="viewTeacherDetails('${teacher.name}')">View Details</button>
            </div>
        `;
    });
}

function searchTeachers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = "<h2>Search Results</h2>";

    let found = false;
    for (const department in teachersData) {
        teachersData[department].forEach(teacher => {
            const nameMatch = teacher.name.toLowerCase().includes(query);
            const specializationMatch = teacher.specialization.toLowerCase().includes(query);
            if (nameMatch || specializationMatch) {
                found = true;
                teacherList.innerHTML += `
                    <div class="teacher-card">
                        <img src="${teacher.photo}" alt="${teacher.name}">
                        <h3>${teacher.name}</h3>
                        <p>Specialization: ${teacher.specialization}</p>
                        <button onclick="viewTeacherDetails('${teacher.name}')">View Details</button>
                    </div>
                `;
            }
        });
    }
    
    if (!found) {
        teacherList.innerHTML += "<p>No teachers found matching the search criteria.</p>";
    }
}

function viewTeacherDetails(teacherName) {
    localStorage.setItem('selectedTeacher', teacherName);
    window.location.href = 'teacher-details.html';
}
// Function to search for matching teachers based on project description
function findMatchingTeachers() {
    const description = document.getElementById("projectDescription").value.toLowerCase();
    const keywords = description.split(/\s+/); // Split the description into words
    const teacherList = [
        // Example teachers data
        { name: "SHAHANA T", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F17355-OQvzc.jpg", specialization: "C , data structures , DBMS , Sql " },
        { name: "SRUTHIMOL M P", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46441-5I0ml.jpg", specialization: "java , Oops , os , network , dbms" },
        { name: "SHAJILA MAJEED", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46978-jKLkU.jpg", specialization: "web development , html , css , js , php , design " },
        { name: "DRISHYA S G", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F4129-RM6rJ.jpeg", specialization: "virtual reality , augmented reality , vr , Ar ,  3d modeling , unity , game development , blender , python , c#" },

        { name: "NAHANA C", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48832-iGqRy.jpg", specialization: "OOMD ,Network and security ,network  ,security  , cloud computing , cyber security" },

        { name: "HRIDYA P R", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48834-qUHOB.jpg", specialization: "machine learning , artificial intelligence , deep learning , computer vision , natural language processing" },
 { name: "DR. JESSEELA S", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F11023-gtm7y.jpg", specialization: "Heat Transfer Mechanisms in Micro- and Nano-Scale Systems ,Thermal Analysis and Management of Electronic Devices , Numerical Simulation of Convective Heat Transfer , Advances in Thermoelectric Materials and Applications , Modeling of Phase Change Phenomena in Heat Exchangers and Power Plant" },
        { name: "DR. SAJITH P.P..", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F10989-TrkBC.jpg", specialization: "thermal engineering , theraml science , heat transfer mechanisms , heat transfer analysis , numerical simulation of convective heat transfer and power plant" },
        { name: "DR.PRADEEP M KAMATH", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F18740-okRSI.jpg", specialization: "Microtubes , Microchannel , Friction , Cooling , Enhancement , Porous , Resistance , Convection , Mixed , Fluid Flow , ConvectionAspect" },
        { name: "DR. SAIJAL K.K.", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F9201-ZKxbo.jpg", specialization: "Bio-Lubricant , Heat Exchanger , Solar Dryer , Helicopter Rotor , Genetic Algorithm , Gas Simulation , Vibration Reduction , Trailing-Edge Flaps , Helicopter Vibration , Advance Ratios , Wind Turbine , Thrust Coefficients ,  Helicopter Optimization , Neural Network Optimization" },
        { name: "DR. FRANCIS J. EMMATTY", photo: "https://geckkd.etlab.in/uploads/images/staff/U-KTU-F333-q1Mau.jpg", specialization: "Ergonomic Assessment , Waste Task Study , Occupational Health , Handedness Ergonomics , Mental Workload ,  Waste Intervention , Academic Kaizen , Work Table Ergonomics,  Posture Analysis , Mental Workload Factors" },


    ];

    let results = teacherList.filter(teacher => {
        // Convert specialization to lowercase for case-insensitive comparison
        return keywords.some(keyword => 
            teacher.specialization.toLowerCase().includes(keyword)
        );
    });

    displayTeachers(results);
}

// Function to display the matched teachers
function displayTeachers(teachers) {
    const teacherListDiv = document.getElementById("teacherList");
    teacherListDiv.innerHTML = ""; // Clear any previous results

    if (teachers.length === 0) {
        teacherListDiv.innerHTML = "<p>No matching teachers found.</p>";
        return;
    }

    teachers.forEach(teacher => {
        const teacherCard = document.createElement("div");
        teacherCard.className = "teacher-card";

        teacherCard.innerHTML = `
            <img src="${teacher.photo}" alt="${teacher.name}">
            <div>
                <h3>${teacher.name}</h3>
                <p>Specialization: ${teacher.specialization}</p>
            </div>
        `;

        teacherListDiv.appendChild(teacherCard);
    });
}