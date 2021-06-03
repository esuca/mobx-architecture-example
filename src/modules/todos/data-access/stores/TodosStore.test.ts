import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'

describe('TodosStore', () => {
  it('should get completed todos num', function() {
    const { todosStore } = setup()
    todosStore.todos = [
      {
        id: 1,
        text: "First todos",
        isComplete: true
      },
      {
        id: 2,
        text: "Second todos",
        isComplete: false
      }
    ]

    expect(todosStore.totalCompletedNum).toBe(1)
  })
})

function setup() {
  return {
    todosStore: new TodosStore()
  }
}
