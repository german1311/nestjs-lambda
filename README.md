<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment
```bash
# SAM CLI
$ yarn run build && sam build && sam deploy
```



# Goals
- [x] SAM CLI integration
- [x] SAM Local integration
- [x] Local development
- [x] Multiple endpoints for different entities
- [x] SAM deploy multiple templates
- [x] Swagger documentation
- [] Database support
- [] AWS X-Ray support
- [] AWS CloudWatch support
- [x] Powertools Logs support( @aws-lambda-powertools/logger)
- [] Custom lambda, the old best implementation sample
- [] Minification
