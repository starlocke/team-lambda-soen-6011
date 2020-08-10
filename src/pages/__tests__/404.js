import React from "react"
import renderer from "react-test-renderer"
import NotFoundPage from "../404"
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

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})