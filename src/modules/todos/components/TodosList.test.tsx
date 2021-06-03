import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mock } from 'jest-mock-extended'
import { container } from 'tsyringe'
import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'
import { TodosList } from 'modules/todos/components/TodosList'
import { ITodo } from 'modules/todos/data-access/interfaces/ITodo'

describe('TodosList', () => {
  it('should render todos', async () => {
    setup([{
      id: 1,
      text: 'Learn MobX',
      isComplete: false
    }])

    expect(screen.queryByText('Loading todos...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Learn MobX')).toBeInTheDocument()
    })
  })

  it('should toggle todos completion', async () => {
    setup([
      {
        id: 1,
        text: 'Learn React',
        isComplete: false
      },
    ])

    const todoCheckbox = await screen.findByTestId('todos-checkbox-1')
    expect(todoCheckbox).not.toBeChecked()

    userEvent.click(todoCheckbox)

    expect(todoCheckbox).toBeChecked()
  })
})

function setup(todos: ITodo[]) {
  const todosRepository = mock<TodosRepository>()
  container.registerInstance(TodosRepository, todosRepository)

  todosRepository.getTodos.mockResolvedValue(todos)

  render(<TodosList />)

  return {
    todosRepository
  }
}
