const {retrieveKeys,} = require('./apiKeys');
const {pageNavigating, viewBlogPosts,} = require('./events');
const {populateProjectsFrontPage,} = require('./projects');
const {populateBlogsFrontPage,} = require('./blogs');

const navbarMobile = () => {
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });
};

const projectsAndBlogsLoad = () => {
  $(document).ready(function () {
    populateProjectsFrontPage();
    populateBlogsFrontPage();
  });
};

const initializer = () => {
  retrieveKeys()
    .then(() => {
      pageNavigating();
      navbarMobile();
      projectsAndBlogsLoad();
      viewBlogPosts();
    })
    .catch();
};

$(document).ready(() => {
  initializer();
});

module.exports = {
  initializer,
};
