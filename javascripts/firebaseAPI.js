let firebaseConfig = {};

const setConfigFireBase = (newConfig) => {
  firebaseConfig = newConfig;
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setConfigFireBase,
  getAllBlogs,
  getAllProjects,
};
