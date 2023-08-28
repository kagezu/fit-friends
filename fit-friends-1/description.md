
## Запуск проекта

Необходимы установленные приложения: npm node nx docker.  
Разместите переменные окружения  
в файле **./apps/app/.app.env**  
Пример находиться в файле  **./apps/app/.app/env.example**  
В корне проекта выполните:  
**npm install**  
**npm compose**  
**nx run app:serve** либо **npm start**

### Сценарии

**npm compose** - Запуск сервисов необходимых для работы приложения  
**npm start** либо **npm run start** - Запуск сервиса app  
**npm run lint** - Проверка кода программы с помощью линтера  
**nx run app:build** - Сборка программы  
**nx run app:buildImage** - Сборка программы и создание образа для docker

### Тестовое наполнение базы

Запустить наполнение базы тестовыми данными можно с помощью запроса:  
GET  http://localhost:3333/api/seed HTTP/1.1

### API

Описание API генерируется динамически по адресу:  
http://localhost:3333/spec

### Переменные окружения

Формат описания: **PARAM**=value — описание.  

#### Файл .app.env

**NODE_ENV**=development - режим приложения "development" , "production" или "test"  
**PORT**=3333 - Порт по которому доступен сервис  

**MONGO_DB**=fitfriends-app - Имя базы данных  
**MONGO_HOST**=localhost - Хост базы данных  
**MONGO_PORT**=27017 - Порт базы данных  
**MONGO_USER**=admin - Логин для базы данных  
**MONGO_PASSWORD**=test - Пароль для базы данных  
**MONGO_AUTH_BASE**=admin - база данных, используемая при аутентификации  

**JWT_AT_SECRET**=test_secret - Соль для генерации токенов  
**JWT_AT_EXPIRES_IN**=7m - Время действия токена  
**JW_RT_SECRET**=test_rt_secret - Соль для генерации рефреш токенов  
**JW_RT_EXPIRES_IN**=7d - Время действия рефреш токена  

**UPLOAD_DIRECTORY_PATH**=~/fit-friends-1/apps/app/uploads - Путь к папке для закачки файлов  
**SERVE_ROOT**=/static - Путь к закаченым файлам  

**MAIL_SMTP_HOST**=localhost - Хост почтового сервера  
**MAIL_SMTP_PORT**=8025 -  Порт для отправки сообщений  
**MAIL_USER_NAME**=admin - Логин для почтового сервера  
**MAIL_USER_PASSWORD**=test - Пароль для почтового сервера  
**MAIL_FROM**=<mail@mail.local> - Почтовый адресс

#### Файл .fit.mongo.env

**MONGO_INITDB_ROOT_USERNAME**=admin - Логин для базы данных  
**MONGO_INITDB_ROOT_PASSWORD**=test - Пароль для базы данных  
**MONGO_INITDB_DATABASE**=fitfriends-app - Имя базы данных  
