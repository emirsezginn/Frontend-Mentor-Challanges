 const jsonVerisi = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
];

// Result updates
const averageScoreElement = document.getElementById('average-score');
const resultTitleElement = document.getElementById('result-title');
const resultDescriptionElement = document.getElementById('result-description');

// average score
const totalScore = jsonVerisi.reduce((sum, item) => sum + item.score, 0);
const averageScore = Math.round(totalScore / jsonVerisi.length);

// Result 
averageScoreElement.innerHTML = `${averageScore} <span>of 100</span>`;

// title and description
if (averageScore >= 90) {
    resultTitleElement.textContent = "Excellent";
    resultDescriptionElement.textContent = "You scored higher than 95% of the people who have taken these tests.";
} else if (averageScore >= 75) {
    resultTitleElement.textContent = "Great";
    resultDescriptionElement.textContent = "You scored higher than 65% of the people who have taken these tests.";
} else if (averageScore >= 50) {
    resultTitleElement.textContent = "Good";
    resultDescriptionElement.textContent = "You scored higher than 50% of the people who have taken these tests.";
} else {
    resultTitleElement.textContent = "Needs Improvement";
    resultDescriptionElement.textContent = "You scored lower than 50% of the people who have taken these tests.";
}

// Summary 
const summaryList = document.querySelector('.summary ul');

// html
jsonVerisi.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${item.icon}" alt="${item.category} icon">
        ${item.category}
        <span class="span">${item.score}<span class="span2"> / 100</span></span>
    `;

    if (index === 0) {
        li.style.backgroundColor = 'hsla(0, 100%, 67%, 0.05)';
        li.style.color = 'hsl(0, 100%, 67%)';
    } else if (index === 1) {
        li.style.backgroundColor = 'hsla(39, 100%, 56%, 0.08)';
        li.style.color = 'hsl(39, 100%, 56%)';
    } else if (index === 2) {
        li.style.backgroundColor = 'hsla(166, 100%, 37%, 0.05)';
        li.style.color = 'hsl(166, 100%, 37%)';
    } else if (index === 3) {
        li.style.backgroundColor = 'hsla(234, 85%, 45%, 0.05)';
        li.style.color = 'hsl(234, 85%, 45%)';
    }

    summaryList.appendChild(li);
});

// button
const button = document.createElement('button');
button.textContent = 'Continue';
const summaryElement = document.querySelector('.summary');
summaryElement.appendChild(button);