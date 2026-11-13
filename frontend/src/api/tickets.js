import { mockGetTickets, mockCreateTicket } from './mockTickets.js'

const USE_MOCK = true
const baseUrl = import.meta.env.VITE_API_BASE_URL

class ApiError extends Error {
  constructor(status) {
    super(`HTTP ${status}`)
    this.status = status
  }
}

function unwrapMock(res) {
  if (!res.ok) throw new ApiError(res.status)
  return res.data
}

export async function getTickets() {
  if (USE_MOCK) return unwrapMock(await mockGetTickets())

  const response = await fetch(`${baseUrl}/api/requests`)
  if (!response.ok) throw new ApiError(response.status)
  return response.json()
}

export async function createTicket(body) {
  if (USE_MOCK) return unwrapMock(await mockCreateTicket(body))

  const response = await fetch(`${baseUrl}/api/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!response.ok) throw new ApiError(response.status)
  return response.json()
}

export function errorMessage(err) {
  if (err.status === 400) return 'Проверьте поля'
  if (err.status === 500) return 'Сервер не смог обработать запрос'
  if (err.status) return `Ошибка сервера (${err.status})`
  return 'Нет связи с сервером'
}