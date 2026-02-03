module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
