// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {listOfDestinations: props.destinationsList, searchInput: ''}
  }

  onChangeSearchinput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {listOfDestinations, searchInput} = this.state
    const filteredList = listOfDestinations.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-field">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchinput}
              value={searchInput}
              className="input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div className="list-container-parent">
            <ul className="list-container">
              {filteredList.map(each => (
                <DestinationItem item={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
