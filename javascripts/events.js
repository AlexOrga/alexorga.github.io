const {populateProjects,} = require('./projects');
const {populateBlogs,} = require('./blogs');

const pageNavigating = () => {
  $('#homeBtn').click(() => {
    $('#home').removeClass('hide');
    $('#home').addClass('active');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
  });
  $('#blogBtn').click(() => {
    $('#blog').removeClass('hide');
    $('#blog').addClass('active');
    $('#home').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
    populateBlogs();
  });
  $('#historyBtn').click(() => {
    $('#history').removeClass('hide');
    $('#history').addClass('active');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
  });
  $('#projectsBtn').click(() => {
    $('#projects').removeClass('hide');
    $('#projects').addClass('active');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#contact').addClass('hide');
    populateProjects();
  });
  $('#contactBtn').click(() => {
    $('#contact').removeClass('hide');
    $('#contact').addClass('active');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
  });
};

module.exports = {
  pageNavigating,
};
