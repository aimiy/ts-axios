import { AxiosRequestConfig } from './types'
import { buildUrl } from './helpers/url'
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', params } = config
  const request = new XMLHttpRequest()
  let r = buildUrl(url, params)
  console.log(r)
  request.open(method.toUpperCase(), r)
  request.send(data)
}
