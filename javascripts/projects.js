
const writeToDom = (id, print) => {
    const grabId = document.getElementById(id);
    grabId.innerHTML = print;
}


const createProjectCards = (data) => {
    let string = "";
    for(let i=0; i<data.length; i++){
        string += '<div id="' + data[i].id + '">';
        string += '<h2 class="header">' + data[i].title + '</h2>';
        string += '<img src="' + data[i].imageURL + '">';
        string += '<p>' + data[i].description + '</p>';
        string += '<a href="' + data[i].githubURL + '">View This Project.</a>';
        string += '</div>';
    }
    writeToDom("my-projects", string);
}

// XHR REQUEST*******************

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', fileLoaded);
    myRequest.addEventListener('error', fileError);
    myRequest.open('GET', "../db/projects.json");
    myRequest.send();
};

function fileLoaded() {
    const data = JSON.parse(this.responseText);
    createProjectCards(data.projects);
}

function fileError() {
    alert('File not loaded properly, Try Again.')
}

startApplication();