import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const navigateTo = (path: any) => history.push(path)

export default history
