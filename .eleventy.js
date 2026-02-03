module.exports = function(eleventyConfig) {
  // Use 11ty's internal slugifier for better reliability
  const slugify = eleventyConfig.getFilter("slugify");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });
  });

  // This ensures your slug filter doesn't just return "post"
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "untitled-post-" + Math.random().toString(36).substring(7);
    return slugify(str);
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
