const {setConfigFireBase,} = require('./firebaseAPI');

const getKeyFB = () => {
  return new Promise((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  return new Promise((resolve, reject) => {
    getKeyFB()
      .then((results) => {
        setConfigFireBase(results.firebase);
        firebase.initializeApp(results.firebase);
        resolve();
      })
      .catch((error) => {
        console.error('Error getting Firebase Key', error);
        reject();
      });
  });
};

module.exports = {
  retrieveKeys,
};
