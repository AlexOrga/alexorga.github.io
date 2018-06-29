
const domStringBlogPostsAll = (blogsArray) => {
  let domString = '';
  blogsArray.forEach((blog) => {
    domString += '<div class="blog-post" id="' + blog.id + '">';
    domString +=     `<div class="blog-header row align-center">`;
    domString +=         '<h2 class="blog-title col s6">' + blog.title + '</h2>';
    domString +=         '<h4 class="blog-date col s6">' + blog.date + '</h4>';
    domString +=     `</div>`;
    domString +=     `<div class="blog-entry">`;
    domString +=         '<p>' + blog.post + '</p>';
    domString +=     `</div>`;
    domString += '</div>';
  });
  printBlogs(domString);
};

const domStringBlogPostsFrontPage = (blogsArray) => {
  let domString = '';
  for (let i = 0; i < 3; i ++) {
    if (i === 0) {
      domString += '<div class="row" id="blog-post1">';
      domString +=  `<img class="pencil-img col s12 m6" src="../img/tim-wright-506562-unsplash.jpg">`;
      domString +=  '<div class="blog-post col s12 m6" id="' + blogsArray[i].id + '">';
    } else if (i === 1) {
      domString += '<div class="row"';
      domString += '<div class="blog-post col s3" id="' + blogsArray[i].id + ' blog-post2">';
    } else if (i === 2) {
      domString += '<div class="blog-post col s3" id="' + blogsArray[i].id + ' blog-post3">';
    }
    domString +=     `<div class="blog-header row align-center">`;
    domString +=         '<h2 class="blog-title col s6">' + blogsArray[i].title + '</h2>';
    domString +=         '<h4 class="blog-date col s6">' + blogsArray[i].date + '</h4>';
    domString +=     `</div>`;
    domString +=     `<div class="blog-entry">`;
    domString +=         '<p><span class="blog-text">"' + blogsArray[i].post + '</span></p>';
    domString +=         '<a class="waves-effect waves-light btn">View More</a>';
    domString +=     `</div>`;
    domString +=   `</div>`;
    if (i === 0 || i === 2) {
      domString += '</div>';
    }
  };
  printBlogs(domString);
};

const printBlogs = (string) => {
  $('#my-blogs').html(string);
};

const domStringProjectCards = (projectsArray) => {
  let domString = '';
  // domString +=  `<div class="row">`;
  projectsArray.forEach((project) => {
    if (project.available === true) {
      // domString += `<div class="project-card" data-id="${project.id}">`;
      // domString += `<h2 class="header">${project.title}</h2>`;
      // domString += `<img src="${project.thumbnail}">`;
      // domString += `<p>${project.description}</p>`;
      // domString += `<a href="${project.url}">Try It Out Here!</a>`;
      // domString += `<a href="${project.github}">View the GitHub for this Project.</a>`;
      // domString += `</div>`;

      domString +=  `<div class="col s12 m6">`;
      domString +=    `<div class="card" data-id="${project.id}>`;
      domString +=      `<div class="card-image projects-img-holder">`;
      domString +=        `<img class="project-img" src="${project.thumbnail}">`;
      domString +=        `<span class="card-title">${project.title}</span>`;
      domString +=      `</div>`;
      domString +=      `<div class="card-content">`;
      domString +=        `<p>${project.description}</p>`;
      domString +=      `</div>`;
      domString +=      `<div class="card-action">`;
      domString +=        `<a href="${project.url}">Try It Out Here!</a>`;
      domString +=        `<a href="${project.github}">View the GitHub for this Project.</a>`;
      domString +=      `</div>`;
      domString +=    `</div>`;
      domString +=  `</div>`;
    }
  });
  // domString +=  `</div>`;
  printProjects(domString);
};

const printProjects = (string) => {
  $('#my-projects').html(string);
};

module.exports = {
  domStringBlogPostsAll,
  domStringBlogPostsFrontPage,
  domStringProjectCards,
};
