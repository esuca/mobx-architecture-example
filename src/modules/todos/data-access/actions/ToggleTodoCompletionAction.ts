import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'
import { action, makeObservable } from 'mobx'
import { singleton } from 'tsyringe'
import { IAction } from 'shared/arch/interfaces/IAction'

@singleton()
export class ToggleTodoCompletionAction implements IAction<number> {
  constructor(private todoStore: TodosStore) {
    makeObservable(this)
  }

  @action
  execute(id: number) {
    const index = this.todoStore.todos.findIndex(todo => todo.id === id)
    this.todoStore.todos[index].isComplete = !this.todoStore.todos[index].isComplete
  }
}
