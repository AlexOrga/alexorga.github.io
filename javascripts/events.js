const {populateProjects,} = require('./projects');
const {populateBlogsAll,} = require('./blogs');

const pageNavigating = () => {
  $('#homeBtn').click(() => {
    $('#home').removeClass('hide');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
  });
  $('#blogBtn').click(() => {
    $('#blog').removeClass('hide');
    $('#home').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
    populateBlogsAll();
  });
  $('#historyBtn').click(() => {
    $('#history').removeClass('hide');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#projects').addClass('hide');
    $('#contact').addClass('hide');
  });
  $('#projectsBtn').click(() => {
    $('#projects').removeClass('hide');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#contact').addClass('hide');
    populateProjects();
  });
  $('#contactBtn').click(() => {
    $('#contact').removeClass('hide');
    $('#home').addClass('hide');
    $('#blog').addClass('hide');
    $('#history').addClass('hide');
    $('#projects').addClass('hide');
  });
};

module.exports = {
  pageNavigating,
};
