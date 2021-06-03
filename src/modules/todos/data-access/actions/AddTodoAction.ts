import {action, makeObservable} from "mobx";
import { singleton } from 'tsyringe'
import { TodosRepository } from 'modules/todos/data-access/repositories/TodosRepository'
import { LoadTodosAction } from 'modules/todos/data-access/actions/LoadTodosAction'
import { IAction } from 'shared/arch/interfaces/IAction'

@singleton()
export class AddTodoAction implements IAction<string> {
	constructor(private todosRepository: TodosRepository, private loadTodosAction: LoadTodosAction) {
		makeObservable(this)
	}

	@action
	async execute(text: string) {
	  await this.todosRepository.createTodo(text)
    await this.loadTodosAction.execute()
	}
}
