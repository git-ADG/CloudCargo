// JavaScript to handle profile picture upload
const profilePic = document.getElementById('profile-pic');
const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profilePic.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

// JavaScript to handle name edit
const nameSpan = document.querySelector('.name');
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('blur', () => {
    nameSpan.style.display = 'inline-block';
    nameInput.style.display = 'none';
    nameSpan.textContent = nameInput.value;
});

// JavaScript to handle modal for edit options
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('open-modal');
const editProfilePicButton = document.getElementById('edit-profile-pic');
const editNameButton = document.getElementById('edit-name');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

editProfilePicButton.addEventListener('click', () => {
    fileInput.click();
    modal.style.display = 'none';
});

editNameButton.addEventListener('click', () => {
    nameSpan.style.display = 'none';
    nameInput.style.display = 'inline-block';
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// JavaScript to handle project section
document.addEventListener("DOMContentLoaded", function () {
    // Simulate fetching user's projects from an API or database
    const userProjects = [
        {
            title: "Project 1",
            description: "This is project 1 description.",
            imageUrl: "project1.jpg",
        },
        {
            title: "Project 2",
            description: "This is project 2 description.",
            imageUrl: "project2.jpg",
        },
        {
            title: "Project 3",
            description: "This is project 2 description.",
            imageUrl: "project2.jpg",
        },
        {
            title: "Project 4",
            description: "This is project 2 description.",
            imageUrl: "project2.jpg",
        },
        // Add more projects here
    ];

    const projectList = document.getElementById("project-list");

    // Display each project
    userProjects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        const image = document.createElement("img");
        image.src = project.imageUrl;
        image.alt = project.title;

        const title = document.createElement("h2");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        projectCard.appendChild(image);
        projectCard.appendChild(title);
        projectCard.appendChild(description);

        projectList.appendChild(projectCard);
    });
});