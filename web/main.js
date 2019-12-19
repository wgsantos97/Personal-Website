let currentPage = 1
let navbarList = document.getElementsByTagName("navbar-item")
let page = {
    0: document.getElementsByTagName("home-page")[0],
    1: document.getElementsByTagName("artwork-page")[0],
    2: document.getElementsByTagName("code-page")[0],
}

let projects = [
    {
        type: `code`,
        title: `Senior Design: Frozen Embers`,
        content:
            `For my Senior Design project, I decided to recreate one of my favorite game series, Fire Emblem. Cheekily called Frozen Embers. A lot of work went into the process of developing it...`,
        pageLink: 'https://sharemygame.com/@wsan/frozen-embers',
        githubLink: `#`,
    },
    {
        type: `art`,
        title: `My Hero Academia Fan Contest`,
        imageUrl: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f456f082-a688-4530-92f9-4841e2bec479/dd8tizo-09e9b0cc-d7b7-4981-b1f6-0aeac90c7b41.png/v1/fill/w_1024,h_1536,q_80,strp/my_hero_academia_fan_cover_by_wsan1_dd8tizo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcL2Y0NTZmMDgyLWE2ODgtNDUzMC05MmY5LTQ4NDFlMmJlYzQ3OVwvZGQ4dGl6by0wOWU5YjBjYy1kN2I3LTQ5ODEtYjFmNi0wYWVhYzkwYzdiNDEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WfpTk06Cw1VRH2gWexL5CAac8RDO_lfM_9wwxEk-xL8`,
        card_position: {
            background_size: 100,
            background_position: [50, 66]
        },
        pageLink: 'https://www.deviantart.com/wsan1/art/My-Hero-Academia-Fan-Cover-800874852',
    },
    {
        type: `art`,
        title: `Hofstra in Japan`,
        imageUrl: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f456f082-a688-4530-92f9-4841e2bec479/ddk419n-6d5cce1c-733d-4dd1-9e0b-e326b990451d.png/v1/fill/w_1024,h_1687,q_80,strp/a_special_thanks_to_japan_by_wsan1_ddk419n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4NyIsInBhdGgiOiJcL2ZcL2Y0NTZmMDgyLWE2ODgtNDUzMC05MmY5LTQ4NDFlMmJlYzQ3OVwvZGRrNDE5bi02ZDVjY2UxYy03MzNkLTRkZDEtOWUwYi1lMzI2Yjk5MDQ1MWQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BhQVAHogF9ODrpDwMgWp-FPaDoHEwbrtKVCMo-0m-js`,
        card_position: {
            background_size: 100,
            background_position: [50, 54]
        },
        pageLink: 'https://www.deviantart.com/wsan1/art/A-Special-Thanks-to-Japan-819840875',
    },
    {
        type: `code`,
        title: `Information Retrieval Project I`,
        content:
            `Welcome to the first Information Retrieval Project. Please use the Contents below to navigate to the relevant Part of this 3-Part Project. For details as to what each Part does, there are two accompanying Markdown Files, Description and Results, in each Part folder...`,
        pageLink: 'https://github.com/wgsantos97/Information-Retrieval-Project-1',
        githubLink: `#`,
    }
]

let projectTemplates = {
    code:
        `
        <project-item>
            <h2></h2>
            <p></p>
        </project-item>
        `,
    art:
        `
        <artwork-item>
        </artwork-item>
        `,
}

projects.forEach((project) => {
    let template = projectTemplates[project.type]
    let a_element = document.createElement('a')
    a_element.setAttribute(`href`, project.pageLink)
    a_element.innerHTML = template

    // Format code cards for display
    if (project.type === `code`) {
        a_element.classList.add('sitelink')
        a_element.querySelector(`h2`).innerText = project.title
        a_element.querySelector(`p`).innerText = project.content
    }

    // Format art cards for display
    else if (project.type === `art`) {
        a_element.classList.add('brighten')
        let artwork_element = a_element.querySelector(`artwork-item`)
        let style =
            "background-image: url('" + project.imageUrl + "');" +
            "background-size: " + project.card_position.background_size + "%;" +
            "background-position: " +
            project.card_position.background_position[0] + "% " +
            project.card_position.background_position[1] + "%;"
        artwork_element.setAttribute(`style`, style)
    }

    let project_list = page[0].querySelector(`project-list`)
    project_list.appendChild(a_element)
})

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