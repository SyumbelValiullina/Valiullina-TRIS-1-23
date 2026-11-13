const FORCE_500 = false

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let nextId = 3
const db = [
  { id: 1, number: 'ЗЯВ-0001', title: 'Нужна консультация бухгалтера', categoryId: 1, status: 'New' },
  { id: 2, number: 'ЗЯВ-0002', title: 'Разработать логотип', categoryId: 3, status: 'InProgress' }
]

export async function mockGetTickets() {
  await delay(500)
  if (FORCE_500) return { ok: false, status: 500, data: null }
  return { ok: true, status: 200, data: [...db] }
}

export async function mockCreateTicket(body) {
  await delay(500)
  if (FORCE_500) return { ok: false, status: 500, data: null }

  const title = String(body.title ?? '').trim()
  if (title.length < 5) {
    return { ok: false, status: 400, data: null }
  }

  const id = nextId++
  const created = {
    id,
    number: `ЗЯВ-${String(id).padStart(4, '0')}`,
    title,
    categoryId: body.categoryId,
    description: body.description,
    status: 'New'
  }
  db.push(created)
  return { ok: true, status: 201, data: created }
}