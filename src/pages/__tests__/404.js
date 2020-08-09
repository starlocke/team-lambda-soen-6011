import React from "react"
import renderer from "react-test-renderer"
import NotFoundPage from "../404"
import { StaticQuery, useStaticQuery } from "gatsby"
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
//     jest.mock(Layout, () => () => (<div>Hello World</div>));

// jest.mock("../../components/layout/layout");
})

describe("NotFoundPage", () => {
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

    
      
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})