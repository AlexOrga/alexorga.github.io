console.log('hi');

var projects = [
    {
        id: "project1",
        title: "Superhero Day",
        imageURL: "img/batman.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    },
    {
        id: "project2",
        title: "I'd Rather Buy A Fish",
        imageURL: "img/moses.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    },
    {
        id: "project3",
        title: "Today was ....",
        imageURL: "img/port-a-potty.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    },
    {
        id: "project4",
        title: "Would You?",
        imageURL: "img/brain-app.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    },
    {
        id: "project5",
        title: "In The Upsidedown",
        imageURL: "img/farside.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    },
    {
        id: "project6",
        title: "When My Dog Had Kids",
        imageURL: "img/stickpan.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        githubURL: "https://alexorga.github.io"
    }
];

function writeToDom(id, print){
    var grabId = document.getElementById(id);
    grabId.innerHTML = print;
}


function createProjectCards(array){
    var string = "";
    for(var i=0; i<array.length; i++){
        string += '<div id="' + array[i].id + '">';
        string += '<h2>' + array[i].title + '</h2>';
        string += '<img src="' + array[i].imageURL + '">';
        string += '<p>' + array[i].description + '</p>';
        string += '<a href="' + array[i].githubURL + '">View This Project.</a>';
        string += '</div>';
    }
    writeToDom("my-projects", string);
}

createProjectCards(projects);