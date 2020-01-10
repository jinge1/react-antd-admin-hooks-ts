
interface IResult {
  productName: string;
  productCode: string;
}

export default () => {
  return {
    api: '/rlc-cts/server/qryProdList',
    format: (result: IResult[]) => result.map(({ productName, productCode }) => ({ productName, productCode }))
  }
}