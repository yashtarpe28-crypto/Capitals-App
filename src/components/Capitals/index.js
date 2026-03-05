import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCaptilsId: countryAndCapitalsList[0].id}

  onChangeCapitals = event => {
    this.setState({activeCaptilsId: event.target.value})
  }

  getCountryFind = () => {
    const {activeCaptilsId} = this.state
    const findCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id.toUpperCase() === activeCaptilsId,
    )
    return findCountry.country
  }

  render() {
    const activeCaptilsId = this.state
    const country = this.getCountryFind(activeCaptilsId)
    return (
      <div className="capitals-app">
        <div className="countries-and-capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select className="select-list" onChange={this.onChangeCapitals}>
              {countryAndCapitalsList.map(eachList => (
                <option value={eachList.id} key={eachList.id}>
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description"> is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
