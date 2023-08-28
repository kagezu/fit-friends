# FitFriends

FitFriends — это онлайн площадка для поиска тренировок и их заведения. Веб-приложение (сайт) функционирует как смесь соцсети и биржи объявлений. Тренеры создают тренировки, а пользователи могут покупать их и заниматься, а в личном кабинете отслеживать свой прогресс.

## Подготовка

### Необходимые программы

**docker** https://www.docker.com/  
**nodejs** https://nodejs.org  
Для установки **NX** :   
```bash
npm instal -g nx
```  

### Переменные окружения
 
Для запуска приложения в режиме разработки предварительно нужно создать файлы:  
**./fit-friends-1/apps/app/.app.env**  
**./fit-friends-2/.env**  

Для сборки и запуска из контейнера необходимо в каталоге *./deploy* создать файлы:  
**.app.env**  
**.mongo.env**  
**.mongo.ui.env**  

Файлы с примерами расположены в тех же каталогах с расширением .example  

### Описание переменных окружения

Формат описания: PARAM=value — описание.  

Файл **.app.env**

**NODE_ENV**=development - режим приложения "development" , "production" или "test"  
**PORT**=3333 - Порт по которому доступен сервис  

**MONGO_DB**=fitfriends-app - Имя базы данных  
**MONGO_HOST**=fitfriends.mongo - Хост базы данных  
**MONGO_PORT**=27017 - Порт базы данных  
**MONGO_USER**=admin - Логин для базы данных  
**MONGO_PASSWORD**=test - Пароль для базы данных  
**MONGO_AUTH_BASE**=admin - база данных, используемая при аутентификации  

**JWT_AT_SECRET**=test_secret - Соль для генерации токенов  
**JWT_AT_EXPIRES**_IN=7m - Время действия токена  
**JW_RT_SECRET**=test_rt_secret - Соль для генерации рефреш токенов  
**JW_RT_EXPIRES_IN**=7d - Время действия рефреш токена  

**UPLOAD_DIRECTORY_PATH**=~/fit-friends-1/apps/app/uploads - Путь к папке для закачки файлов  
**SERVE_ROOT**=/static - Путь к закаченым файлам  

**MAIL_SMTP_HOST**=fitfriends.app.fakesmtp - Хост почтового сервера   
**MAIL_SMTP_PORT**=8025 - Порт для отправки сообщений  
**MAIL_USER_NAME**=admin - Логин для почтового сервера  
**MAIL_USER_PASSWORD**=test - Пароль для почтового сервера  
**MAIL_FROM**=mail@mail.local - Почтовый адрес  


Файл **.mongo.env**

**MONGO_INITDB_ROOT_USERNAME**=admin - Логин для базы данных  
**MONGO_INITDB_ROOT_PASSWORD**=test - Пароль для базы данных  
**MONGO_INITDB_DATABASE**=fitfriends-app - Имя базы данных  

Файл **.mongo.ui.env**

**ME_CONFIG_MONGODB_ADMINUSERNAME**=admin - Логин доступа к ui  
**ME_CONFIG_MONGODB_ADMINPASSWORD**=test - Пароль доступа к ui  
**ME_CONFIG_MONGODB_URL**=mongodb://admin:test@fitfriends.mongo:27017/ - строка запроса к базе  


## Сценарии

Сценарии запускаются из того же каталога, где лежит данная инструкция.  

### Запуск приложения в режиме разработки

```bash
npm run install
```  
Устанавливает необходимые зависимости для всех приложений.  


```bash
npm run docker
```  
Скачивает и запускает образы необходимые для работы приложения.  


```bash
npm run start
```  
Запускает клиентскую и сервисную часть приложения в режиме разработки.  


```bash
npm run all
```  
Последовательно выполняет предыдущие 3 команды, можно использовать при 1м запуске.  

### Запуск приложения из контейнера

```bash
npm run build
```  
Собирает приложения и создаёт образ для каждого из них.  


```bash
npm run image
```  
Запускает приложение из контейнера на основе созданных ранее образов. 

## Прочее

Заполнить сервис тестовыми данными можно, выполнив get запрос:
```http
http://localhost:3333/api/seed
``` 

Дополнительная информация о работе с каждым из проектов находиться в файлах:  
**fit-friends-1/description.md**  
**fit-friends-1/README.md**  
**fit-friends-2/README.md**  
