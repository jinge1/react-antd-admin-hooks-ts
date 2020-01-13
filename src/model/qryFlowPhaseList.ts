
interface IResult {
  taskName: string;
  taskKey: string;
}

export default () => {
  return {
    api: '/rlc-cts/server/qryFlowPhaseList',
    format: (result: IResult[]) => result.map(({ taskName, taskKey }) => ({ key: taskName, value: taskKey }))
  }
}