import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../index"
import { StaticQuery, useStaticQuery } from "gatsby"
beforeEach(() => {
  console.error = jest.fn();
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Default Starter`,
          },
        },
      })
    )
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: 'Florian',
          description: 'My description',
          title: 'My Title',
        },
      },
    }));
})

describe("IndexPage", () => {
  it("renders correctly", () => {
    const data = {
          "main": {
            "edges": [
              {
                "node": {
                  "id": "a347f53e-43d8-5e21-8e35-3175bb099ff0",
                  "excerpt": "Classification of Skill Hard skill Definition 1 – “Because, it is technical knowledge or training that you have gained through any life experience, including in your career or education.” Definition 2 - “Hard skills are learned abilities acquired and…",
                  "frontmatter": {
                    "slug": "/skills/software-construction/tdd-testing",
                    "title": "Test Driven Development Testing",
                    "author": "Hardik Vora"
                  }
                }
              },
              {
                "node": {
                  "id": "96d58885-9dd3-57ca-8697-920bacc3a1cc",
                  "excerpt": "Classification of Skill Technical Skills: 6 Human Relation Skills: 2 Conceptual Skills: 2 RESTful API Programming & Design requires a blend of different types of skills Prerequisites for Skill Ability to query a database using SQL and an overall in…",
                  "frontmatter": {
                    "slug": "/skills/computing-foundations/restful-api-programming",
                    "title": "RESTful API Programming",
                    "author": "Warren White"
                  }
                }
            }
            ]
          },
          "category": {
            "group": [
              {
                "fieldValue": "computing-foundations",
                "totalCount": 1
              },
              {
                "fieldValue": "software-configuration-management",
                "totalCount": 1
              },
            ]
          },
          "author": {
            "group": [
              {
                "fieldValue": "Chirag Vora",
                "totalCount": 1
              },
              {
                "fieldValue": "Hao Zhang",
                "totalCount": 1
              },
              
            ]
          }
        }
    
      
    const tree = renderer.create(<IndexPage data={data} />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})