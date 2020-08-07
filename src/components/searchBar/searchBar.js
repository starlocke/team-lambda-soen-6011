import React, { Component } from 'react'
import { Link } from 'gatsby'
import './searchBar.css'

const initialState = {
  query: '',
  results: [],
}

class Search extends Component {
  state = initialState

  reset() {
    this.setState(initialState);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    const body = document.querySelector("head");
    const script = document.createElement("script");
    const scriptText = document.createTextNode("document.querySelector('div.search__container').removeAttribute('style')");
    script.appendChild(scriptText);
    body.appendChild(script);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  node = React.createRef();

  handleClickOutside = e => {
    if (!this.node.current.contains(e.target)) {
      this.reset();
    }
  };

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div key={i}>
            <Link to={page.url} className="link">
              <h4>{page.title}</h4>
            </Link>
          </div>
        ))
      } else if (this.state.query.length > 0) {
        return 'No results for ' + this.state.query
      } else {
        return ''
      }
    }

    return (
      <div>
        <div className="search__container" style={{display:'none'}}>
          <label htmlFor="searchInput">Search All Skill Pages</label>
          <input
            className="search__input"
            id="searchInput" 
            autoComplete = "off"
            value={this.state.query}
            type="text"
            onChange={this.search}
            placeholder={'Query'}
          />
          <div ref={this.node} className={this.state.results.length == 0 ? '' : 'search__list'}>
            <ResultList />
          </div>
        </div>
        <noscript>
          <form method="GET" action="https://www.google.com/search">
            <input type="hidden" name="q" value="site:sestopia-gatsby.herokuapp.com" />
            <label>Search Sestopia:<br/><input type="text" name="q" value="" placeholder="Query" /></label>
          </form>
        </noscript>
      </div>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (query.length > 0) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search