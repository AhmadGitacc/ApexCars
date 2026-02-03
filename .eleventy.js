module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });
  
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "post";
    return str.toLowerCase()
              .replace(/[^\w\s-]/g, '')
              .replace(/[\s_-]+/g, '-')
              .replace(/^-+|-+$/g, '');
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
