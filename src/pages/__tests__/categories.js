import React from "react"
import renderer from "react-test-renderer"
import CategoriesPage from "../categories"
import { StaticQuery } from "gatsby"
beforeEach(() => {
  console.error = jest.fn();
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `my title`,
          },
        },
      })
    )
})

describe("CategoriesPage", () => {
  it("renders correctly", () => {
    const data = {
        "site": {
          "siteMetadata": {
            "title": "my title"
          }
        },
        "allMarkdownRemark": {
          "group": [
            {
              "fieldValue": "tag 1",
              "totalCount": 1
            },
            {
              "fieldValue": "tag 2",
              "totalCount": 10
            }
          ]
        }
      }
    
      
    const tree = renderer.create(<CategoriesPage data={data} />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})