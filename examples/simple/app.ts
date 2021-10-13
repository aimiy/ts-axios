import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
// #参数值为数组
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: ['bar', 'baz']
  }
})
// 最终请求的 url 是 /simple/get?foo[]=bar&foo[]=baz'。
// #参数值为对象
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})
// 最终请求的 url 是 /simple/get?foo=%7B%22bar%22:%22baz%22%7D，foo 后面拼接的是 {"bar":"baz"} encode 后的结果。
// #参数值为 Date 类型
const date = new Date()
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    date
  }
})
// 最终请求的 url 是 /simple/get?date=2019-04-01T05:55:39.030Z，date 后面拼接的是 date.toISOString() 的结果。
// #特殊字符支持
// 对于字符 @、:、$、,、、[、]，我们是允许出现在 url 中的，不希望被 encode。
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: '@:$, '
  }
})
// 最终请求的 url 是 /simple/get?foo=@:$+，注意，我们会把空格 转换成 +。
// #空值忽略
// 对于值为 null 或者 undefined 的属性，我们是不会添加到 url 参数中的。
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: 'bar',
    baz: null
  }
})
// 最终请求的 url 是 /simple/get?foo=bar。

// #丢弃 url 中的哈希标记
axios({
  method: 'get',
  url: '/simple/get#hash',
  params: {
    foo: 'bar'
  }
})
// 最终请求的 url 是 /simple/get?foo=bar

// #保留 url 中已存在的参数
axios({
  method: 'get',
  url: '/simple/get?foo=bar',
  params: {
    bar: 'baz'
  }
})
// 最终请求的 url 是 /simple/get?foo=bar&bar=baz
