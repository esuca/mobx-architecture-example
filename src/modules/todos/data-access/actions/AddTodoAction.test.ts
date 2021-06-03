import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'
import { mock } from 'jest-mock-extended'
import { LoadTodosAction } from 'modules/todos/data-access/actions/LoadTodosAction'
import { AddTodoAction } from 'modules/todos/data-access/actions/AddTodoAction'

describe('AddTodoAction', () => {
  it('should add todos', async () => {
    const { addTodoAction, todosRepository, loadTodosAction } = setup()

    todosRepository.createTodo.mockResolvedValue()
    loadTodosAction.execute.mockResolvedValue()

    await addTodoAction.execute('Todo text...')

    expect(todosRepository.createTodo).toHaveBeenCalledWith('Todo text...')
    expect(loadTodosAction.execute).toHaveBeenCalled()
  })
})

function setup() {
  const todosRepository = mock<TodosRepository>()
  const loadTodosAction = mock<LoadTodosAction>()

  return {
    todosRepository,
    loadTodosAction,
    addTodoAction: new AddTodoAction(todosRepository, loadTodosAction)
  }
}
