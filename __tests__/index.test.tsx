import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import SearchInput from '../components/base/SearchInput'

describe('Input value', () => {
  it('updates on change', () => {
    const setSearch = jest.fn((value) => {})

    const { queryByPlaceholderText } = render(<SearchInput value="Bulbasaur" />)

    const searchInput = queryByPlaceholderText('Search')

    fireEvent.keyDown(searchInput as HTMLElement, { key: 'Enter', code: 13 })

    // expect(searchInput.value).toBe('test') // OR
    // expect(setSearch).toHaveBeenCalledWith('test')
  })
})
