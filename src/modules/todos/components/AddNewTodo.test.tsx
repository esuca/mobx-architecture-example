import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mock } from 'jest-mock-extended'
import { container } from 'tsyringe'
import { AddNewTodo } from 'modules/todos/components/AddNewTodo'
import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'

describe('AddNewTodo', () => {
  it('should add a new todos', async () => {
    const { todosRepository } = setup()

    const inputElement = screen.getByLabelText(/write a new task/i)
    userEvent.type(inputElement, 'Learn MobX')

    const addTodoButton = screen.getByRole('button', { name: /add todo/i })
    userEvent.click(addTodoButton)

    expect(addTodoButton).toBeDisabled()
    expect(addTodoButton).toHaveTextContent('adding todos...')

    await waitFor(() => {
      expect(todosRepository.createTodo).toHaveBeenCalledWith('Learn MobX')
      expect(todosRepository.getTodos).toHaveBeenCalled()
      expect(inputElement).toHaveDisplayValue('')
    })
  })
})

function setup() {
  const todosRepository = mock<TodosRepository>()
  container.registerInstance(TodosRepository, todosRepository)

  todosRepository.createTodo.mockResolvedValue()
  todosRepository.getTodos.mockResolvedValue([])

  render(<AddNewTodo />)

  return {
    todosRepository
  }
}
