import { action, makeObservable, runInAction } from 'mobx'
import { singleton } from 'tsyringe'
import { IAction } from 'shared/arch/interfaces/IAction'
import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'
import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'

@singleton()
export class LoadTodosAction implements IAction {
  constructor(private todoStore: TodosStore, private todosRepo: TodosRepository) {
    makeObservable(this)
  }

  @action
  async execute() {
    const todos = await this.todosRepo.getTodos()

    runInAction(() => {
        this.todoStore.todos = todos
      }
    )
  }
}
