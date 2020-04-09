# Fastify & Typescript Template Project

## Description

Fastify & TypeScript template repository. I've also included setup for running the server inside docker.

## Usage

Prerequisites: Yarn (version >=1) and Node.js (version >=12) installed.

```bash
# development: install dependencies
$ yarn

# development: hot reload and debug
$ yarn dev

# development: run tests with jest
$ yarn test

# development: format with prettier
$ yarn format

# development: lint with eslint
$ yarn lint

# development: build for production (also runs tests)
$ yarn build

# run production build
$ yarn prod
```

## (Optional) Docker usage

Prerequisites: Yarn (version >=1) and Docker installed.

```bash
# build docker image
$ yarn docker-build

# run server inside docker
$ yarn docker-run

# stop docker image
$ yarn docker-stop
```

## Example endpoints

There's 2 example http GET endpoints available (http://localhost:3042/)

- /: Root endpoint with html response.
- /sum: Sums query parameters a and b and returns result as JSON. Endpoint contains schema based parameter validation.
