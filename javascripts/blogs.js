
const writeToDom = (id, print) => {
    const grabId = document.getElementById(id);
    grabId.innerHTML = print;
}

const createBlogPosts = (blogs) => {
    let blogPost = "";
    for(let i=0; i<blogs.length; i++){
        blogPost += '<div id="' + blogs[i].id + '">';
        blogPost += '<h2>' + blogs[i].title + '</h2>';
        blogPost += '<h4>' + blogs[i].date + '</h4>';
        blogPost += '<p>' + blogs[i].post + '</p>';
        blogPost += '</div>';
    }
    writeToDom("my-blogs", blogPost);
}

// XHR REQUEST*******************

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', fileLoaded);
    myRequest.addEventListener('error', fileError);
    myRequest.open('GET', "../db/blogs.json");
    myRequest.send();
};

function fileLoaded() {
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}

function fileError() {
    alert('File not loaded properly, Try Again.')
}

startApplication();