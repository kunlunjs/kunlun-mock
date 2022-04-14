# @kunlunjs/mock

基于 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)、[Mock.js](https://www.npmjs.com/package/mock.js)、 [msw](https://www.npmjs.com/package/msw) 的语义化 mock 数据能力

## Features

- 支持任何 [Mock.js](https://www.npmjs.com/package/mock.js) API， <b>优先级高于 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) 同名 API</b>
- 支持任何 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) API
- 中文 Mock 能力
- 语义化字段理解，example: name - 姓名、createdAt - 创建时间

## TODO

- [ ] msw
- [ ] 更细粒度的字段 mock 配置
- [ ] 预置更多常用字段
- [ ] 设置最大嵌套深度
- [ ] 支持分页
- [ ] 支持服务端数据推送

## Installation

```bash
pnpm i
```

## Example

```bash
pnpm examples
# or
ts-node examples/mock-nested.ts
```

#### result 🔽

```json
[
  {
    "id": 1,
    "name": "邹娜",
    "uuid": "be9f8f4e-930e-4ab0-a8d9-0fb8c2068ab8",
    "gender": "Transexual",
    "birthday": "1956-07-07",
    "address": "山东省 莆田市 -",
    "country": "法国",
    "province": "黑龙江省",
    "region": "华北",
    "city": "重庆市",
    "district": "勐腊县",
    "date": "2013-05-15",
    "createdAt": "1995-02-23 18:45:13",
    "updatedAt": "2005-09-05 12:57:03",
    "deletedAt": "2000-10-29 06:21:34",
    "children": [
      {
        "name": "邓勇",
        "gender": "Two* person",
        "birthday": "1980-03-22",
        "address": "四川省 绵阳市 沙河市",
        "country": "俄罗斯",
        "province": "澳门特别行政区",
        "region": "华北",
        "city": "天津市",
        "district": "香山区",
        "date": "1971-02-05"
      }
      //...
    ]
  }
  //...
]
```
