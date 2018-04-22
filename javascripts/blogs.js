
const writeToDom = (id, print) => {
    const grabId = document.getElementById(id);
    grabId.innerHTML = print;
}

const createBlogPosts = (blogs) => {
    let blogPost = "";
    for(let i=0; i<blogs.length; i++){
        blogPost += '<div class="blog-post" id="' + blogs[i].id + '">';
        blogPost +=     `<div class="header">`;
        blogPost +=         '<h2 class="blog-title">' + blogs[i].title + '</h2>';
        blogPost +=         '<h4 class="blog-date">' + blogs[i].date + '</h4>';
        blogPost +=     `</div>`;
        blogPost +=     `<div class="blog-entry">`;
        blogPost +=         '<p>' + blogs[i].post + '</p>';
        blogPost +=     `</div>`;
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