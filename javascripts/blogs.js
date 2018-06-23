const {getAllBlogs,} = require('./firebaseAPI');
const {domStringBlogPosts,} = require('./dom');

const populateBlogs = () => {
  getAllBlogs()
    .then((blogsArray) => {
      domStringBlogPosts(blogsArray);
    })
    .catch((err) => {
      console.error('Error loading blog posts', err);
    });
};

module.exports = {
  populateBlogs,
};
