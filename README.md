
## Quick Start

Clone the repo:

```bash
git clone git project
cd into cloned project directory
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Database:

```bash
# push changes to db
yarn db:push

# start prisma studio
yarn db:studio
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test

# run docker container with PostgreSQL db
yarn docker:dev-db:start

# stop docker container with PostgreSQL db
yarn docker:dev-db:stop
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix