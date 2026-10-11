# Матрица требований

| Критерий из ЛР1 | Поле или сущность | Запрос |
|---|---|---|
| 1. Создать объект | ServiceRequest: title, categoryId, description | POST /api/requests |
| 2. Назначить исполнителя | assigneeUserId | PATCH /api/requests/{id}/assignee |
| 3. Перевести в работу | status | PATCH /api/requests/{id}/status |