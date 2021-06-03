import { rest } from 'msw'
import { ITodo } from 'modules/todos/data-access/interfaces/ITodo'

let todos: ITodo[] = [
  { id: 1, text: 'Write a React + Mobx introduction post', isComplete: true },
  { id: 2, text: 'Publish the post', isComplete: false }
]

export const todosHandlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(
      ctx.json<ITodo[]>(todos),
      ctx.status(200),
      ctx.delay(250)
    )
  }),
  rest.post<{name: string}>('/todos', (req, res, ctx) => {
    const newTodo: ITodo = {
      id: Math.random(),
      text: req.body.name,
      isComplete: false
    }

    todos = [...todos, newTodo]

    return res(
      ctx.json(null),
      ctx.status(201),
      ctx.delay(250)
    )
  })
]
