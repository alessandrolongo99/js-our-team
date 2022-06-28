// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const team = [
    {
        name: 'Wayne Barnett',
        rule: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        rule: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        rule: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        rule: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        rule: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        rule: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < team.length; i++) {
    console.log(`membro ${i + 1}: ${team[i].name}, ${team[i].rule}, ${team[i].pic}`);
}

const row = document.querySelector('div.row');

for (let i = 0; i < team.length; i++) {
    const element = document.createElement('div');
    element.classList.add('col-12');
    element.innerHTML = `membro ${i + 1}: ${team[i].name}, ${team[i].rule}, ${team[i].pic}`;

    row.append(element);
}