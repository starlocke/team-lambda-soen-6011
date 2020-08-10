import React from "react"
import renderer from "react-test-renderer"
import AuthorsPage from "../authors"
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

describe("AuthorsPage", () => {
  it("renders correctly", () => {
    const data ={
        "site": {
          "siteMetadata": {
            "title": "my title"
          }
        },
        "allMarkdownRemark": {
          "group": [
            {
              "fieldValue": "author 1",
              "totalCount": 2
            },
            {
              "fieldValue": "author 2",
              "totalCount": 1
            },
          ]
        }
      }
    
      
    const tree = renderer.create(<AuthorsPage data={data} />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})