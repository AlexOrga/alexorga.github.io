const {retrieveKeys,} = require('./apiKeys');
const {pageNavigating,} = require('./events');
const projects = require('./projects');
const {populateBlogsFrontPage,} = require('./blogs');

const navbarMobile = () => {
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });
};

const projectsAndBlogsLoad = () => {
  $(document).ready(function () {
    projects.populateProjects();
    populateBlogsFrontPage();
  });
};

const initializer = () => {
  retrieveKeys();
  pageNavigating();
  navbarMobile();
  projectsAndBlogsLoad();
  // projects.populateProjects();
  // populateBlogs();
};

initializer();
