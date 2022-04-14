import faker from '@faker-js/faker/locale/zh_CN'
import Mock, { Random } from 'mockjs'

export { faker }

const apis: Record<string, string> = {}
/* address */
/* animal */
/* commerce */
/* company */
/* database */
/* datatype */
/* date */
/* fake */
/* finance */
/* git */
/* hacker */
/* helpers */
/* image */
/* internet */
/* localization */
/* lorem */
/* mersenne */
/* music */
/* name */
/* phone */
/* random */
/* system */
/* time */
/* unqiue */
/* vehicel */
/* word */
Object.entries(faker).forEach(([category, api]) => {
  const keys = Object.keys(api)
  if (!category.startsWith('locale') && keys.length) {
    keys.forEach(i => {
      if (i !== 'faker' && category !== 'definitions') {
        apis[i] = category
      }
    })
  }
})

/* 自定义 */
const customs = [
  'id',
  'name',
  'age',
  'email',
  'mobile',
  'visits',
  'gender',
  'birthday',
  'progress',
  'year',
  'status',
  'date',
  'time',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'animal',
  'badge',
  'color',
  'hsl',
  'hex',
  'rgb',
  'rgba',
  'country',
  'region',
  'province',
  'city',
  'county',
  'district',
  'zip',
  'zipCode',
  'address',
  'children'
] as const
type CustomNames = typeof customs[number]
function getCustomFaker(key: CustomNames) {
  const customs: Partial<Record<CustomNames, any>> = {
    id: Random.integer(1, 100),
    name: Random.cname(),
    mobile: Mock.mock(/^1[3456789]\d{9}$/),
    visits: Random.integer(),
    age: Random.integer(1, 100),
    email: Random.email(),
    gender: Mock.mock(/男|女/),
    birthday: faker.date
      .between('1902-01-01T00:00:00.000Z', new Date().toISOString())
      .toISOString()
      .slice(0, 10),
    progress: Math.floor(Math.random() * 100),
    year: Random.date().slice(0, 5),
    date: Random.date(),
    time: Random.time(),
    createdAt: Random.datetime(),
    updatedAt: Random.datetime(),
    deletedAt: Random.datetime(),
    animal: faker.animal.bear(),
    status: faker.word.adjective(),
    badge: Random.province(),
    color: Random.color(),
    rgb: Random.rgb(),
    rgba: Random.rgba(),
    hex: Random.hex(),
    hsl: Random.hsl(),
    region: Random.region(),
    address: `${Random.province()} ${Random.city()} ${Random.county()}`,
    country: Mock.mock(/中国|法国|美国|俄罗斯|英国|德国|加拿大|澳大利亚/),
    province: Random.province(),
    city: Random.city(),
    county: Random.county(),
    district: Random.county(),
    zip: Random.city()
  }
  return customs[key]
}
const Fields = Object.keys(apis).concat(customs)

type FieldItem = typeof Fields[number]

// TODO: 嵌套数据，嵌套深度...
export const mock = <T extends Record<string, any>>(
  fields: Array<FieldItem> = [],
  len = 11
): T[] => {
  const directFields = fields.filter(
    i =>
      ![
        'id',
        'uuid',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'children'
      ].includes(i)
  )
  const data = [...Array(len)].map((i, ix) => {
    const obj: Partial<Record<FieldItem, any>> = {}
    for (let index = 0; index < fields.length; index++) {
      const field = fields[index]
      if (field === 'children') {
        obj[field] = mock(directFields, Random.integer(1, 20))
        continue
      }
      if (customs.includes(field as CustomNames)) {
        obj[field] = getCustomFaker(field as CustomNames)
        if (field === 'id') {
          obj[field] = ix + 1
        }
        continue
      }
      if (apis[field]) {
        const category = apis[field] as keyof typeof faker
        // @ts-ignore
        obj[field] = faker[category][field]()
        continue
      } else {
        obj[field] = null
      }
    }
    return obj
  })
  return data as T[]
}
