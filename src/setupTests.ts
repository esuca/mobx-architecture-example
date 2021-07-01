// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'reflect-metadata'
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'mobx'
import { container } from 'tsyringe'

configure({
  // disables mobx action warning
  enforceActions: 'never',
})

beforeEach(() => {
  // clear all registered tokens within tests
  container.clearInstances()
})
