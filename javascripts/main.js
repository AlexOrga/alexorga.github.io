const {retrieveKeys,} = require('./apiKeys');
const {pageNavigating,} = require('./events');

const initializer = () => {
  retrieveKeys();
  pageNavigating();
};

initializer();
