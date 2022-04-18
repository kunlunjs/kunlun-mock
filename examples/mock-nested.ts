import { mock } from '../src/faker'

type Item = {
  id: number
  name: string
  uuid: string
  email: string
  mobile: string
  gender: string
  birthday: string
  address: string
  country: string
  province: string
  region: string
  city: string
  district: string
  date: string
  createdAt: string
  updatedAt: string
  deletedAt: string
  children: Item[]
}
const begin = Date.now()
const data = mock<Item>(
  [
    'id',
    'name',
    'uuid',
    'email',
    'mobile',
    'gender',
    'birthday',
    'address',
    'country',
    'province',
    'region',
    'city',
    'district',
    'date',
    'createdAt',
    'updatedAt',
    'deletedAt',
    {
      name: 'x',
      api: 'datatype.float'
    },
    'children'
  ],
  // optional default 11
  2
)
const end = Date.now()

console.log(JSON.stringify(data, null, 2), `${end - begin}ms`)
