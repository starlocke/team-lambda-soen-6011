import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Link } from "gatsby"
// Styles
import './authors.css'

const AuthorsContainer = ({
    group: { group }
}) => (
  <>
    <div>
      <h2>Authors</h2>
      <ul className='author__wrapper'>
        {group.map(author => (
          <li key={author.fieldValue}>
            <Link to={`/author/${kebabCase(author.fieldValue)}/`}>
              {author.fieldValue} ({author.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
)

AuthorsContainer.propTypes = {
  group: PropTypes.shape({
    group: PropTypes.arrayOf(
      PropTypes.shape({
        fieldValue: PropTypes.string.isRequired,
        totalCount: PropTypes.number.isRequired,
      }).isRequired
    ),
  })
}

export default AuthorsContainer