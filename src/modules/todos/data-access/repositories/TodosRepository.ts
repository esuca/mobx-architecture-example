import { ITodo } from 'modules/todos/data-access/interfaces/ITodo'
import { singleton } from 'tsyringe'

@singleton()
export class TodosRepository {

  async getTodos(): Promise<ITodo[]> {
    const response = await fetch('/todos')
    return await response.json()
  }

  async createTodo(name: string): Promise<void> {
    await fetch('/todos', {
      method: 'post',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

}
