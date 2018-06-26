
const domStringBlogPosts = (blogsArray) => {
  let domString = '';
  blogsArray.forEach((blog) => {
    domString += '<div class="blog-post" id="' + blog.id + '">';
    domString +=     `<div class="header">`;
    domString +=         '<h2 class="blog-title">' + blog.title + '</h2>';
    domString +=         '<h4 class="blog-date">' + blog.date + '</h4>';
    domString +=     `</div>`;
    domString +=     `<div class="blog-entry">`;
    domString +=         '<p>' + blog.post + '</p>';
    domString +=     `</div>`;
    domString += '</div>';
  });
  printBlogs(domString);
};

const printBlogs = (string) => {
  $('#my-blogs').html(string);
};

const domStringProjectCards = (projectsArray) => {
  let domString = '';
  projectsArray.forEach((project) => {
    if (project.available === true) {
      // domString += `<div class="project-card" data-id="${project.id}">`;
      // domString += `<h2 class="header">${project.title}</h2>`;
      // domString += `<img src="${project.thumbnail}">`;
      // domString += `<p>${project.description}</p>`;
      // domString += `<a href="${project.url}">Try It Out Here!</a>`;
      // domString += `<a href="${project.github}">View the GitHub for this Project.</a>`;
      // domString += `</div>`;

      domString +=  `<div class="row">`;
      domString +=  `<div class="col s12 m7">`;
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
      domString +=  `</div>`;
    }
  });
  printProjects(domString);
};

const printProjects = (string) => {
  $('#my-projects').html(string);
};

module.exports = {
  domStringBlogPosts,
  domStringProjectCards,
};
