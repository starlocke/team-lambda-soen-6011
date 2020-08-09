import React from "react"
import renderer from "react-test-renderer"
import AuthorsPage from "../authors"
import { StaticQuery, Link} from "gatsby"
// import Layout from "../../components/layout/layout"
beforeEach(() => {
  const originalError = console.error;
  console.error = jest.fn();
  // jest.mock("../../components/layout/layout", () => () => ('hi'));
  // jest.mock("../../components/seo", () => () => ());
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `my title`,
          },
        },
      })
    )

//     jest.mock(Layout, () => () => (<div>Hello World</div>));

// jest.mock("../../components/layout/layout");
})

describe("AuthorsPage", () => {
  it("renders correctly", () => {
    // jest.mock("../../components/layout/layout");
    // jest.mock("../../components/layout/layout", () => {
    //   return {
    //     __esModule: true,
    //     default: () => {
    //       return <div></div>;
    //     },
    //   };
    // });
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