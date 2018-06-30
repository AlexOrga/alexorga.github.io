
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
  printBlogsAll(domString);
};

const domStringBlogPostsFrontPage = (blogsArray) => {
  let domString = '';
  for (let i = 0; i < 3; i ++) {
    if (i === 0) {
      domString += '<div class="row blog-post-front">';
      domString +=  `<img class="pencil-img col s12 m6" src="../img/tim-wright-506562-unsplash.jpg">`;
      domString +=  '<div class="col s12 m6" id="' + blogsArray[i].id + '">';
    } else if (i === 1) {
      domString += '<div class="row blog-post-front">';
      domString +=  `<img class="pencil-img col s12 m6" src="../img/fancycrave-224908-unsplash.jpg">`;
      domString +=  '<div class="col s12 m6" id="' + blogsArray[i].id + '">';
    } else if (i === 2) {
      domString += '<div class="row blog-post-front">';
      domString +=  `<img class="pencil-img col s12 m6" src="../img/gabriel-matula-300398-unsplash.jpg">`;
      domString +=  '<div class="col s12 m6" id="' + blogsArray[i].id + '">';
    }
    domString +=     `<div class="blog-header row align-center">`;
    domString +=         '<h5 class="blog-title">' + blogsArray[i].title + '</h5>';
    domString +=         '<p class="blog-date">' + blogsArray[i].date + '</p>';
    domString +=     `</div>`;
    domString +=     `<div class="blog-entry">`;
    domString +=         '<p><span class="blog-text">"' + blogsArray[i].post + '</span></p>';
    domString +=         '<a class="waves-effect waves-light btn view-more-blog">View More</a>';
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += '</div>';
  };
  printBlogs(domString);
};

const printBlogs = (string) => {
  $('#my-blogs').html(string);
};

const printBlogsAll = (string) => {
  $('#my-blogs-all').html(string);
};

const domStringProjectCardsAll = (projectsArray) => {
  let domString = '';
  projectsArray.forEach((project) => {
    domString +=  `<div class="col s12 m6">`;
    domString +=    `<div class="card" data-id="${project.id}">`;
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
  });
  printProjectsAll(domString);
};

const domStringProjectCardsFrontPage = (projectsArray) => {
  let domString = '';
  projectsArray.forEach((project) => {
    domString +=  `<div class="row" data-id="${project.id}">`;
    domString +=      `<div class="card-image-front-page projects-img-holder col s12 m6">`;
    domString +=        `<img class="project-img" src="${project.thumbnail}">`;
    domString +=      `</div>`;
    domString +=      `<div class="card col s12 m6">`;
    domString +=        `<div class="card-content card-content-front-page">`;
    domString +=          `<span class="card-title">${project.title}</span>`;
    domString +=          `<p>${project.description}</p>`;
    domString +=        `</div>`;
    domString +=        `<div class="card-action">`;
    domString +=          `<a href="${project.url}">Try It Out Here!</a>`;
    domString +=          `<a href="${project.github}">View the GitHub for this Project.</a>`;
    domString +=        `</div>`;
    domString +=      `</div>`;
    domString +=   `</div>`;
  });
  printProjects(domString);
};

const printProjects = (string) => {
  $('#my-projects').html(string);
};

const printProjectsAll = (string) => {
  $('#my-projects-all').html(string);
};

module.exports = {
  domStringBlogPostsAll,
  domStringBlogPostsFrontPage,
  domStringProjectCardsAll,
  domStringProjectCardsFrontPage,
};
