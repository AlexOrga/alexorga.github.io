const {retrieveKeys,} = require('./apiKeys');
const {pageNavigating,} = require('./events');

const navbarMobile = () => {
  $(document).ready(function () {
    $('.sidenav').sidenav();
  });
};

const initializer = () => {
  retrieveKeys();
  pageNavigating();
  navbarMobile();
};

initializer();
