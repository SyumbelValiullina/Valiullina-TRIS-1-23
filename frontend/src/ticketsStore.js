import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'ЗЯВ-0001', title: 'Нужна консультация бухгалтера', categoryId: 1, status: 'New' },
  { id: 2, number: 'ЗЯВ-0002', title: 'Разработать логотип', categoryId: 3, status: 'InProgress' }
])

let nextId = 3

export function addItem(title, categoryId, description) {
  const id = nextId++
  items.value.push({
    id,
    number: `TMP-${id}`,
    title,
    categoryId,
    description,
    status: 'New'
  })
}