// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < team.length; i++) {
    console.log(`membro ${i + 1}: ${team[i].name}, ${team[i].role}, ${team[i].pic}`);
}

const row = document.querySelector('div.row');

// for (let i = 0; i < team.length; i++) {
//     const element = document.createElement('div');
//     element.classList.add('col-12');
//     element.innerHTML = `membro ${i + 1}: ${team[i].name}, ${team[i].role}, ${team[i].pic}`;

//     row.append(element);
// }

for (let i = 0; i < team.length; i++) {
    row.append(addCard(team, i));
}

function addCard(element, i){
    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `./img/${team[i].pic}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardName = document.createElement('h5');
    cardName.classList.add('card-title');
    cardName.innerHTML = `${team[i].name}`;

    const cardRole = document.createElement('p');
    cardRole.classList.add('card-text');
    cardRole.innerHTML = `${team[i].role}`;

    cardBody.append(cardName, cardRole);
    card.append(img, cardBody);
    col.append(card);

    return col;
}