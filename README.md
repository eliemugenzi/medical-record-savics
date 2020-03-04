### Project Name
> Savics Medical Record

### Installation

- Make sure you have Node.js and npm installed on your machine
- Clone this repository, cd into it

- Make sure postgres is installed on your machine
- Refer to `.env.example` and create a `.env` file with the following variables: `PORT`, replace it with the port of your choice, `DATABASE_URL`, replace it with the postgres database URL of your choice

- Install the project's dependencies using the following command:

```bash

$ npm install

```

- Create database tables using the following command that runs DB migrations:

```bash
$ npm run db:migrate

```

- Run the development server using

```bash

$ npm start

```