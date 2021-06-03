import { mock } from 'jest-mock-extended'
import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'
import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'
import { LoadTodosAction } from 'modules/todos/data-access/actions/LoadTodosAction'
import { ITodo } from 'modules/todos/data-access/interfaces/ITodo'

describe('LoadTodosAction', () => {
  it('should load todos', async () => {
    const { loadTodosAction, todosStore, todosRepository } = setup()

    const todos: ITodo[] = [{ id: 200, text: 'Lorem ipsum..', isComplete: false }]
    todosRepository.getTodos.mockResolvedValue(todos)

    await loadTodosAction.execute()

    expect(todosStore.todos).toEqual(todos)
  })
})

function setup() {
  const todosStore = mock<TodosStore>()
  const todosRepository = mock<TodosRepository>()

  return {
    todosStore,
    todosRepository,
    loadTodosAction: new LoadTodosAction(todosStore, todosRepository)
  }
}
