import { setupWorker } from 'msw'
import { todosHandlers } from 'test-utils/mocks/todosHandlers'

// This configures a Service Worker with the given request handlers.
export const msw = setupWorker(...todosHandlers)
