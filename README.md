## Description

Edreams Odigeo coding challenge.

## Installation

```bash
# install dependencies
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```bash
## Api Documentation
http://localhost:8000/api
```

```bash
## GraphQL Playground
http://localhost:8000/graphql
```

### How to seed the data

- delete the database (db.sqlite)
- restart the server
  - a new empty database will be created automaticaly
- (Optional) If you want to change data,
  Ex: to change the year 2021 => 2022 in itinenaries
  - got to src/seeder/data/itinerary-data.ts
  - Just find and replace 2021 => 2022
  - Save the file
- Open the swagger api
  - http://localhost:8000/api
  - Just hit the end-point under the Seeder. All data will be inserted into the database
