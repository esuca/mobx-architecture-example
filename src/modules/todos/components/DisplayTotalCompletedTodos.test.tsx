import { render, screen } from '@testing-library/react'
import { DisplayTotalCompletedTodos } from 'modules/todos/components/DisplayTotalCompletedTodos'

describe('DisplayTotalCompletedTodos', () => {
  it('should render total completed todos', async () => {
    setup()

    expect(screen.getByText('Completed Todos: 0')).toBeInTheDocument()
  })
})

function setup() {
  render(<DisplayTotalCompletedTodos />)
}
