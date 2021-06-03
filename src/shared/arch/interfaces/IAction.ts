export interface IAction<Param = unknown> {
  execute(param: Param): void
}