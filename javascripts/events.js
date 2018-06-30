const {populateProjectsAll,} = require('./projects');
const {populateBlogsAll,} = require('./blogs');
// const {initializer,} = require('./initPasser');

const pageNavigating = () => {
  $('#homeBtn').click(() => {
    $('#home').removeClass('hide');
    $('#about-me-container').removeClass('hide');
    $('#blog').removeClass('hide');
    $('#blog-container').removeClass('hide');
    $('#projects').removeClass('hide');
    $('#project-container').removeClass('hide');
    $('#projects-all').addClass('hide');
    $('#project-container-all').addClass('hide');
    $('#blog-container-all').addClass('hide');
    $('#history').addClass('hide');
    $('#contact').removeClass('hide');
    // initializer();
  });
  $('#blogBtn').click(() => {
    $('#blog-container-all').removeClass('hide');
    $('#blog-all').removeClass('hide');
    $('#blog').addClass('hide');
    $('#blog-container').addClass('hide');
    $('#about-me-container').addClass('hide');
    $('#home').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#project-container').addClass('hide');
    $('#projects-all').addClass('hide');
    $('#project-container-all').addClass('hide');
    $('#contact').addClass('hide');
    populateBlogsAll();
  });
  $('#historyBtn').click(() => {
    $('#history').removeClass('hide');
    $('#home').addClass('hide');
    $('#about-me-container').addClass('hide');
    $('#blog').addClass('hide');
    $('#blog-container').addClass('hide');
    $('#blog-container-all').addClass('hide');
    $('#blog-all').addClass('hide');
    $('#projects').addClass('hide');
    $('#project-container').addClass('hide');
    $('#projects-all').addClass('hide');
    $('#project-container-all').addClass('hide');
    $('#contact').addClass('hide');
  });
  $('#projectsBtn').click(() => {
    $('#projects-all').removeClass('hide');
    $('#project-container-all').removeClass('hide');
    $('#projects').addClass('hide');
    $('#project-container').addClass('hide');
    $('#about-me-container').addClass('hide');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#blog-container').addClass('hide');
    $('#blog-container-all').addClass('hide');
    $('#blog-all').addClass('hide');
    $('#history').addClass('hide');
    $('#contact').addClass('hide');
    populateProjectsAll();
  });
  $('#contactBtn').click(() => {
    $('#contact').removeClass('hide');
    $('#home').addClass('hide');
    $('#about-me-container').addClass('hide');
    $('#blog').addClass('hide');
    $('#blog-container').addClass('hide');
    $('#blog-container-all').addClass('hide');
    $('#blog-all').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#project-container').addClass('hide');
    $('#projects-all').addClass('hide');
    $('#project-container-all').addClass('hide');
  });
};

const viewBlogPosts = () => {
  $(document).on('click', '.view-more-blog', () => {
    $('#blog-container-all').removeClass('hide');
    $('#blog-all').removeClass('hide');
    $('#blog').addClass('hide');
    $('#blog-container').addClass('hide');
    $('#about-me-container').addClass('hide');
    $('#home').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#project-container').addClass('hide');
    $('#projects-all').addClass('hide');
    $('#project-container-all').addClass('hide');
    $('#contact').addClass('hide');
    populateBlogsAll();
  });
};

module.exports = {
  pageNavigating,
  viewBlogPosts,
};
