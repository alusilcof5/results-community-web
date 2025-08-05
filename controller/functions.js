
const communities = [
    {
        name: "LIDERA",
        description: "Entorno de crecimiento y networking para mujeres profesionales y emprendedoras.",
        link: "https://emprenedoria.barcelonactiva.cat/es/lidera-mujeres-emprendedoras",
        categories: ["networking", "emprendimiento"],
        scope: "local",
        tags: ["local", "networking", "emprendimiento"]
    },
    {
        name: "TechBcn4Women",
        description: "Proyecto de Tech Barcelona que promueve la igualdad en el sector tecnológico.",
        link: "https://www.techbarcelona.com/techbcn4women/",
        categories: ["igualdad", "tecnologia"],
        scope: "local",
        tags: ["local", "igualdad"]
    },
    {
        name: "TechnoLatinas",
        description: "Red que apoya a mujeres en áreas STEAM para cerrar brechas de género.",
        link: "https://technolatinas.org/",
        categories: ["steam", "diversidad"],
        scope: "global",
        tags: ["global", "steam"]
    },
   
    {
        name: "Women Who Code",
        description: "Comunidad global que ofrece recursos y networking para mujeres en tech.",
        link: "https://womenwhocode.com/",
        categories: ["programacion", "networking"],
        scope: "global",
        tags: ["global", "networking"]
    },
    {
        name: "Girls Who Code",
        description: "Programa de clases de programación para niñas, fomentando interés en tecnología.",
        link: "https://girlswhocode.com/",
        categories: ["educacion", "programacion"],
        scope: "global",
        tags: ["global", "formacion"]
    },
    
    {
        name: "SheTech Spain",
        description: "Red nacional con eventos y talleres para mujeres en tecnología.",
        link: "https://www.eventbrite.com/o/shetech-6376818437",
        categories: ["eventos", "formacion"],
        scope: "global",
        tags: ["global", "formacion"]
    },

    {
        name: "Women Techmakers Barcelona",
        description: "Iniciativa de Google para visibilizar y empoderar a mujeres en tecnología.",
        link: "https://women-in-tech.org/barcelona/",
        categories: ["google", "empoderamiento"],
        scope: "local",
        tags: ["local", "networking"]
    },
    {
        name: "Barcelona Tech Spirit (Women Track)",
        description: "Evento anual con enfoque en mujeres en tecnología y emprendimiento.",
        link: "https://techspirit.barcelona/",
        categories: ["eventos", "emprendimiento"],
        scope: "local",
        tags: ["local", "eventos"]
    },
    
    {
        name: "Talent Garden Barcelona (Women in Tech)",
        description: "Comunidad dentro del coworking Talent Garden para diversidad de género.",
        link: "https://talentgarden.com/en/coworking/barcelona",
        categories: ["coworking", "diversidad"],
        scope: "local",
        tags: ["local", "networking"]
    },
   
    {
        name: "Women in Blockchain Barcelona",
        description: "Comunidad que impulsa la participación femenina en blockchain.",
        link: "https://www.meetup.com/es-ES/topics/women-in-blockchain/es/",
        categories: ["blockchain", "tecnologia"],
        scope: "local",
        tags: ["local", "tecnologia"]
    },
    {
        name: "Tech Women Barcelona",
        description: "Grupo local de networking y formación para mujeres profesionales en tecnología.",
        link: "#",
        categories: ["networking", "formacion"],
        scope: "local",
        tags: ["local", "networking"]
    },

    {
        name: "Women Who Code Barcelona",
        description: "Rama local de Women Who Code con eventos y recursos en Barcelona.",
        link: "https://womenwhocode.com/",
        categories: ["programacion", "recursos"],
        scope: "local",
        tags: ["local", "formacion"]
    },
    {
        name: "Aticco Women",
        description: "Comunidad dentro del coworking Aticco para impulsar proyectos y networking femenino.",
        link: "https://aticco.com/",
        categories: ["coworking", "proyectos"],
        scope: "local",
        tags: ["local", "networking"]
    },
    {
        name: "Impact Hub Barcelona - Women Entrepreneurs Network",
        description: "Red para mujeres emprendedoras con foco en proyectos tecnológicos.",
        link: "https://barcelona.impacthub.net/en/",
        categories: ["emprendimiento", "impacto"],
        scope: "local",
        tags: ["local", "emprendimiento"]
    },
    {
        name: "FemCoders Club",
        description: "Comunidad de mujeres programadoras que ofrece bootcamps, talleres y eventos de networking en tecnología.",
        link: "https://www.femcodersclub.com/",
        categories: ["programacion", "formacion"],
        scope: "global",
        tags: ["global", "formacion"]
    },
    {
        name: "TechFems",
        description: "Red de mujeres en tecnología enfocada en crear conexiones profesionales y oportunidades de crecimiento.",
        link: "https://techfems.org/",
        categories: ["networking", "tecnologia"],
        scope: "local",
        tags: ["local", "networking"]
    },
    
    {
        name: "Donestech",
        description: "Cooperativa feminista que investiga la relación entre mujeres, tecnología y género desde una perspectiva crítica.",
        link: "https://donestech.net/",
        categories: ["investigacion", "feminismo"],
        scope: "local",
        tags: ["local", "investigacion"]
    },
    {
        name: "Code Women",
        description: "Comunidad dedicada a empoderar mujeres en programación y desarrollo de software.",
        link: "https://codewomen.plus/en/",
        categories: ["programacion", "empoderamiento"],
        scope: "global",
        tags: ["global", "formacion"]
    },
    {
        name: "Lean In Network - Barcelona",
        description: "Red global de círculos profesionales para mujeres, con presencia en el sector tecnológico.",
        link: "https://www.leaninbarcelona.com/",
        categories: ["liderazgo", "networking"],
        scope: "global",
        tags: ["global", "networking"]
    },
    {
        name: "Dona TIC",
        description: "Asociación catalana que promueve la participación de mujeres en las tecnologías de la información.",
        link: "https://politiquesdigitals.gencat.cat/ca/ciutadania/donatic/",
        categories: ["promocion", "tic"],
        scope: "local",
        tags: ["local", "igualdad"]
    },
    {
        name: "PyLadies Barcelona",
        description: "Capítulo local de PyLadies, comunidad internacional que promueve Python entre mujeres programadoras.",
        link: "https://www.meetup.com/es-ES/pyladies-bcn/",
        categories: ["python", "programacion"],
        scope: "local",
        tags: ["local", "formacion"]
    },

    {
        name: "PyLadies Barcelona",
        description: "Capítulo local de PyLadies, comunidad internacional que promueve Python entre mujeres programadoras.",
        link: "https://canodrom.barcelona/es/comunidad/pyladies",
        categories: ["python", "programacion"],
        scope: "local",
        tags: ["local", "formacion"]
    },

    {

        name: "Alumni Le Wagon",
        description: "Red de graduadas del bootcamp Le Wagon, conectando mujeres desarrolladoras y emprendedoras tech.",
        link: "https://www.lewagon.com/es-ES/graduates",
        categories: ["bootcamp", "networking"],
        scope: "local",
        tags: ["local", "networking"]
    },
    {
        name: "Women Techmakers Barcelona (Meetup)",
        description: "Grupo oficial de Meetup de Google que da visibilidad a mujeres en tecnología con eventos regulares.",
        link: "https://www.meetup.com/es-ES/wtmbcn/",
        categories: ["meetup", "google"],
        scope: "local",
        tags: ["local", "eventos"]
    },
    {
        name: "Barcelona Women in Technology (Meetup)",
        description: "Meetup que organiza eventos para mujeres apasionadas por la tecnología con charlas y networking.",
        link: "https://www.meetup.com/es-ES/barcelona-women-in-technology-new-relic/",
        categories: ["meetup", "networking"],
        scope: "local",
        tags: ["local", "eventos"]
    },
    {
        name: "TechFems (Meetup)",
        description: "Comunidad inclusiva de más de 700 mujeres+ en tech con actividades presenciales en Barcelona desde 2023.",
        link: "https://www.meetup.com/techfems/",
        categories: ["meetup", "inclusivo"],
        scope: "local",
        tags: ["local", "networking"]
    },
    {
        name: "FemDevs",
        description: "FemDevs es una asociación sin ánimo de lucro que tiene como objetivo promover el interés, la participación y la presencia de las mujeres en la cultura del desarrollo de videojuegos.",
        link: "https://femdevs.es/",
        categories: ["FemDevs", "videojuegos"],
        scope: "local",
        tags: ["local", "formacion"]
    },
    
    {
        name: "OutGeekWomen Barcelona",
        description: "Eventos especializados en Eventbrite para profesionales mid/senior en tech, enfocados en networking y búsqueda de empleo.",
        link: "https://www.eventbrite.com/e/women-in-tech-barcelona-outgeekwomen-tickets-748721254427",
        categories: ["eventbrite", "profesional"],
        scope: "local",
        tags: ["local", "eventos"]
    },
    
];

let filteredCommunities = [...communities];

function renderCommunities(communitiesToRender = communities) {
    const container = document.getElementById('communitiesGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    container.innerHTML = '';

    if (communitiesToRender.length === 0) {
        noResults.style.display = 'block';
        resultsCount.textContent = 'No se encontraron resultados';
        return;
    }

    noResults.style.display = 'none';
    resultsCount.textContent = `Mostrando ${communitiesToRender.length} de ${communities.length} comunidades`;

    communitiesToRender.forEach(community => {
        const card = document.createElement('div');
        card.className = 'community-card';

        const tags = community.tags.map(tag =>
            `<span class="tag ${tag}">${getTagLabel(tag)}</span>`
        ).join('');

        card.innerHTML = `
                    <div class="community-name">${community.name}</div>
                    <div class="community-description">${community.description}</div>
                    <div class="community-tags">${tags}</div>
                    <a href="${community.link}" class="community-link" target="_blank">
                        📄 Más información →
                    </a>
                `;
        container.appendChild(card);
    });
}

function getTagLabel(tag) {
    const labels = {
        'local': 'Local BCN',
        'global': 'Global',
        'networking': 'Networking',
        'formacion': 'Formación',
        'emprendimiento': 'Emprendimiento',
        'tecnologia': 'Tecnología',
        'eventos': 'Eventos',
        'mentoring': 'Mentoring',
        'igualdad': 'Igualdad',
        'steam': 'STEAM',
        'seguridad': 'Seguridad',
        'bootcamp': 'Bootcamp',
        'python': 'Python',
        'feminismo': 'Feminismo',
        'tic': 'TIC',
        'promocion': 'Promoción',
        'meetup': 'Meetup',
        'eventbrite': 'Eventbrite',
        'inclusivo': 'Inclusivo',
        'profesional': 'Profesional'
    };
    return labels[tag] || tag;
}

function applySearch() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    filteredCommunities = communities.filter(community => {
        return community.name.toLowerCase().includes(searchTerm) ||
            community.description.toLowerCase().includes(searchTerm);
    });
    renderCommunities(filteredCommunities);
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchBox').addEventListener('input', applySearch);
    renderCommunities();
});

