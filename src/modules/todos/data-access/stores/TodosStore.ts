import { computed, makeObservable, observable } from 'mobx'
import { singleton } from 'tsyringe'
import { ITodo } from 'modules/todos/data-access/interfaces/ITodo'

@singleton()
export class TodosStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  todos: ITodo[] = []

  @computed
  get totalCompletedNum() {
    return this.todos.filter(todo => todo.isComplete).length
  }
}
