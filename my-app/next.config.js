/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/404",
        destination: "/404.html",
      },
      {
        source: "/about",
        destination: "/about.html",
      },
      {
        source: "/archive",
        destination: "/archive.html",
      },
      {
        source: "/author",
        destination: "/author.html",
      },
      {
        source: "/category",
        destination: "/category.html",
      },
      {
        source: "/contact",
        destination: "/contact.html",
      },
      {
        source: "/date",
        destination: "/date.html",
      },
      {
        source: "/page",
        destination: "/page.html",
      },
      {
        source: "/search",
        destination: "/search.html",
      },
      {
        source: "/single",
        destination: "/single.html",
      },
      {
        source: "/tag",
        destination: "/tag.html",
      },
    ];
  },
};
