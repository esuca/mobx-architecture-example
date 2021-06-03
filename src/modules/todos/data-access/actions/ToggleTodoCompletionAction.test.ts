import { mock } from 'jest-mock-extended'
import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'
import { ToggleTodoCompletionAction } from 'modules/todos/data-access/actions/ToggleTodoCompletionAction'

describe('ToggleTodoCompletionAction', () => {
  it('should toggle todos completion', async () => {
    const { toggleTodoCompletionAction, todosStore } = setup()
    todosStore.todos = [{ id: 1, text: 'Foo', isComplete: false }]

    await toggleTodoCompletionAction.execute(1)

    expect(todosStore.todos).toEqual([{
      id: 1,
      text: 'Foo',
      isComplete: true
    }])
  })
})

function setup() {
  const todosStore = mock<TodosStore>()

  return {
    todosStore,
    toggleTodoCompletionAction: new ToggleTodoCompletionAction(todosStore)
  }
}
