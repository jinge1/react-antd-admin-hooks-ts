
interface IOptions {
  [propName: string]: IObject[];
}

interface IObject {
  [propName: string]: string
}

export interface IState {
  menuList: Array<any>;
  options: IOptions
}


const initState: IState = {
  menuList: [],
  options: {}
}

export default initState



