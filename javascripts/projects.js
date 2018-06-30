const {getAllProjects,} = require('./firebaseAPI');
const {domStringProjectCardsAll, domStringProjectCardsFrontPage,} = require('./dom');

const populateProjectsAll = () => {
  getAllProjects()
    .then((projectsArray) => {
      domStringProjectCardsAll(projectsArray);
    })
    .catch((err) => {
      console.error('Error loading projects', err);
    });
};

const populateProjectsFrontPage = () => {
  getAllProjects()
    .then((projectsArray) => {
      domStringProjectCardsFrontPage(projectsArray);
    })
    .catch((err) => {
      console.error('Error loading projects', err);
    });
};

module.exports = {
  populateProjectsAll,
  populateProjectsFrontPage,
};
