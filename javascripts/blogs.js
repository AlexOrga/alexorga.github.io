const {getAllBlogs,} = require('./firebaseAPI');
const {domStringBlogPostsAll, domStringBlogPostsFrontPage,} = require('./dom');

const populateBlogsFrontPage = () => {
  getAllBlogs()
    .then((blogsArray) => {
      domStringBlogPostsFrontPage(blogsArray);
      limitBlogTextFrontPage();
    })
    .catch((err) => {
      console.error('Error loading blog posts', err);
    });
};

const populateBlogsAll = () => {
  getAllBlogs()
    .then((blogsArray) => {
      domStringBlogPostsAll(blogsArray);
    })
    .catch((err) => {
      console.error('Error loading blog posts', err);
    });
};

const limitBlogTextFrontPage = () => {
  $(document).ready(function () {
    $('.blog-text').each(function (i) {
      const len = $(this).text().trim().length;
      if (len > 400) {
        $(this).text($(this).text().substr(0,400) + '...');
      }
    });
  });
};

module.exports = {
  populateBlogsFrontPage,
  populateBlogsAll,
  limitBlogTextFrontPage,
};
