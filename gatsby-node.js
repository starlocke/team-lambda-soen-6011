const path = require(`path`);
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `skill-pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve("src/templates/categories.js")
  const authorTemplate = path.resolve("src/templates/authors.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
      authorsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___author) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/skillPageTemplate.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
    // Extract category data from query
    const categories = result.data.categoriesGroup.group
    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category.fieldValue)}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
        },
      })
    })

    const authors = result.data.authorsGroup.group

    authors.forEach(author => {
      createPage({
        path: `/author/${_.kebabCase(author.fieldValue)}/`,
        component: authorTemplate,
        context: {
          author: author.fieldValue,
        }
      })
    })

  });
};
