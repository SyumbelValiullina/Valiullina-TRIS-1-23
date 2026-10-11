# API

| Метод и путь | Тело запроса | Успех | Ошибка |
|---|---|---|---|
| GET /api/requests | — | 200, список (или пустой []) | — |
| GET /api/requests/{id} | — | 200, объект заявки | 404 |
| POST /api/requests | title, categoryId, description | 201, id, number, status: New | 400 |
| PATCH /api/requests/{id}/assignee | assigneeUserId | 200 | 404 |
| PATCH /api/requests/{id}/status | status | 200 | 404, 409 |

Пример тела при создании заявки:

{
  "title": "Нужна консультация бухгалтера по отчётности",
  "categoryId": 1,
  "description": "Малый бизнес, ИП, нужна помощь перед сдачей отчёта за квартал"
}

Клиент не присылает id, number, status и исполнителя при создании — их определяет сервер.