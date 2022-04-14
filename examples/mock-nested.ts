import { mock } from '../src/faker'

type Item = {
  uuid: string
  name: string
  gender: string
  country: string
  city: string
  province: string
  date: string
}
const begin = Date.now()
const data = mock<Item>(
  [
    'id',
    'name',
    'uuid',
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
    'children'
  ],
  // optional default 11
  2
)
const end = Date.now()

console.log(JSON.stringify(data, null, 2), `${end - begin}ms`)
