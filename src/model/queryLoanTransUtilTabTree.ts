
interface IResult {
  visible: string;
  [propName: string]: string;
}

export default () => {
  return {
    api: 'openserver/queryLoanTransUtilTabTree',
    format: (result: IResult[]) => result.filter(({ visible }) => visible !== 'N')
  }
}