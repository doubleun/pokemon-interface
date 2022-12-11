import { handleSearchPokemon } from '../utils/search'

describe('Render app', () => {
  it('Get Bulbasaur', async () => {
    const response = await handleSearchPokemon('Bulbasaur')
    expect(response?.length).toEqual(1)
    expect(response?.[0].types.includes('Grass')).toBeTruthy()
  })

  it('Get Charmander', async () => {
    const response = await handleSearchPokemon('Charmander')
    expect(response?.length).toEqual(1)
    expect(response?.[0].types.includes('Fire')).toBeTruthy()
  })

  it('Get Squirtle', async () => {
    const response = await handleSearchPokemon('Squirtle')
    expect(response?.length).toEqual(1)
    expect(response?.[0].types.includes('Water')).toBeTruthy()
  })
})
