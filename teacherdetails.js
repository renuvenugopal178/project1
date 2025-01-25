const teacherData = {
    "SHAHANA T": {
        specialization: "C, Data Structures, DBMS, SQL",
        email: "SHAHANA@example.com",
        contact: "+1234567890",
        room: "Room 201",
        projects: [
            "Project A: A secure DCT Image Steganography based on Public Key Cryptography",
            "Project B: An Enhanced Security Technique for Steganography using DCT and RSA"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F17355-OQvzc.jpg"
    },
    "SRUTHIMOL M P": {
        specialization: "Java, OOPs, OS, Network, DBMS",
        email: "SRUTHIMOL@example.com",
        contact: "+1234567891",
        room: "Room 202",
        projects: [
            "Project A: Java for Beginners",
            "Project B: Advanced Networking Techniques"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46441-5I0ml.jpg"
    },
    "SHAJILA MAJEED": {
        specialization: "Web Development, HTML, CSS, JS, PHP",
        email: "SHAJILA@example.com",
        contact: "+1234567892",
        room: "Room 203",
        projects: [
            "Project A: Responsive Web Design",
            "Project B: Dynamic Web Applications"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46978-jKLkU.jpg"
    },
    "DRISHYA S G": {
        specialization: "Virtual Reality, Augmented Reality, Game Development",
        email: "DRISHYA@example.com",
        contact: "+1234567893",
        room: "Room 204",
        projects: [
            "Project A: VR for Education",
            "Project B: AR Gaming Applications"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F4129-RM6rJ.jpeg"
    },
    "NAHANA C": {
        specialization: "Network and Security, Cloud Computing",
        email: "NAHANA@example.com",
        contact: "+1234567894",
        room: "Room 205",
        projects: [
            "Project A: Secure Cloud Storage",
            "Project B: Network Security Protocols"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48832-iGqRy.jpg"
    },
    "HRIDYA P R": {
        specialization: "Machine Learning, Artificial Intelligence",
        email: "HRIDYA@example.com",
        contact: "+1234567895",
        room: "Room 206",
        projects: [
            "Project A: AI for Predictive Analytics",
            "Project B: Machine Learning Models"
        ],
        photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F48834-qUHOB.jpg"
    }
};

// Function to display teacher details
function displayTeacherDetails() {
    // Retrieve the selected teacher's name from localStorage
    const teacherName = localStorage.getItem('selectedTeacher');
    
    // Get the data for the selected teacher
    const teacher = teacherData[teacherName];

    if (teacher) {
        document.getElementById("teacherName").innerText = teacherName;
        document.getElementById("teacherSpecialization").innerText = teacher.specialization;
        document.getElementById("teacherEmail").innerText = teacher.email;
        document.getElementById("teacherContact").innerText = teacher.contact;
        document.getElementById("teacherRoom").innerText = teacher.room;
        document.getElementById("teacherPhoto").src = teacher.photo;

        const projectsList = document.getElementById("teacherProjects");
        teacher.projects.forEach(project => {
            const listItem = document.createElement("li");
            listItem.innerText = project;
            projectsList.appendChild(listItem);
        });
    } else {
        console.error("Teacher not found");
    }
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Call the function to display details when the page loads
window.onload = displayTeacherDetails;