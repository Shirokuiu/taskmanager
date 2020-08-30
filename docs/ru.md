# Webpack ts starter

Небольшая сборка для разработки TS приложений с webpack.

## Установка приложения

Для уставновки зависимостей запустить комманду:

```shell script
npm install
```
или
```shell script
yarn install
```

## Тестовый сервер

Для запуска тестового сервера, выполнить комманду:

```shell script
npm run serve
```
или
```shell script
yarn run serve
```

## Сборка приложения 

Для сборки приложения запустить комманду:

```shell script
npm run build
```
или
```shell script
yarn run build
```

Для прод сборки приложения запустить комманду:

```shell script
npm run build
```
или
```shell script
yarn run build:prod
```

В результате билда будет 3 файла:
- index.html
- bundle.js
- style.css

И папка assets, которая будет содержать все необходимые файлы


## Добавление сторонних библиотек

Для добавления вендоров и библиотек использовать комманду:

```shell script
yarn add <lib-name>
``` 
