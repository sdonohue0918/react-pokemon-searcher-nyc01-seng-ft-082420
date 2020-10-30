import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCard = () => {
    return this.props.pokemon.map(x => {
      return <PokemonCard key={x.id} pokemon={x} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
