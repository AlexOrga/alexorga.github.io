const {getAllProjects,} = require('./firebaseAPI');
const {domStringProjectCards,} = require('./dom');

const populateProjects = () => {
  getAllProjects()
    .then((projectsArray) => {
      domStringProjectCards(projectsArray);
    })
    .catch((err) => {
      console.error('Error loading projects', err);
    });
};

module.exports = {
  populateProjects,
};
