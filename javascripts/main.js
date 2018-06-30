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
  retrieveKeys();
  pageNavigating();
  navbarMobile();
  projectsAndBlogsLoad();
  viewBlogPosts();
};

initializer();

module.exports = {
  initializer,
};
