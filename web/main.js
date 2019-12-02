let currentPage = 0
let navbarList = document.getElementsByTagName("navbar-item")
let page = {
    0: document.getElementsByTagName("home-page")[0],
    1: document.getElementsByTagName("artwork-page")[0],
    2: document.getElementsByTagName("project-page")[0],
}

let projects = [
    {
        type: `code`,
        title: `Title Here1`,
        content:
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi, dolore esse
            voluptatibus quidem ut excepturi. Obcaecati ipsum, sed quas dolorem incidunt nihil corrupti consectetur,
            cumque fugit officia, quaerat ut.`,
        githubLink: `https://github.com/wgsantos97/Project`,
    },
    {
        type: `art`,
        title: `Title Here2`,
        imageName: `this.jpg`,
    },
    {
        type: `code`,
        title: `Title Here3`,
        content:
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi, dolore esse
            voluptatibus quidem ut excepturi. Obcaecati ipsum, sed quas dolorem incidunt nihil corrupti consectetur,
            cumque fugit officia, quaerat ut.`,
        githubLink: `https://github.com/wgsantos97/Project`,
    }
]

let projectTemplates = {
    code:
        `<h2></h2>
        <p></p>
        <a href="">CAT!!!</a>`,
    art: `some art image here`,
}

projects.forEach((project) => {
    if (currentPage != 0) {

    }
    let template = projectTemplates[project.type];
    let project_element = document.createElement(`project-item`);
    project_element.classList.add(project.type);
    project_element.innerHTML = template;

    if (project.type === `code`) {
        project_element.querySelector(`h2`).innerText = project.title;
        project_element.querySelector(`p`).innerText = project.content;
        project_element.querySelector(`a`).setAttribute(`href`, project.githubLink);
    }

    // TODO: do something about the art

    let project_list = page[0].querySelector(`project-list`);
    project_list.appendChild(project_element);
});

function updateDisplay() {
    for (i = 0; i < 3; i++) {
        if (i == currentPage) {
            page[i].style.display = "grid"
        } else {
            page[i].style.display = "none"
        }
    }
}

function setNav(i) {
    navbarList[currentPage + 1].classList.remove("selected")
    navbarList[i + 1].classList.add("selected")
    currentPage = i
    updateDisplay()
}

updateDisplay()