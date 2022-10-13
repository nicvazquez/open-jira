# Next.js OpenJira App

The database is needed to run the project locally

```
docker-compose up -d
```

- -d means **detached**

MongoDB Local URL:

```
mongodb://localhost:27017/entriesdb
```

## Configurate enviroment variables

Rename the file **.env.template** to **.env**

## Fill database with test information

Fetch:

```
http://localhost:3000/api/seed
```
