import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    pokedex: []
  }

  getPokemon = () => {
    fetch('http://localhost:3000/pokemon').then(resp=> resp.json()).then(data => this.setState({
      pokedex: data
    }))
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokedex}/>
      </Container>
    )
  }

  componentDidMount() {
    this.getPokemon()
  }
}

export default PokemonPage
