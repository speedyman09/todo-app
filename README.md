# Todo app
Simple todo application backend written in Nest that aims to widen my understanding of Docker and Postgres. Very unfinished

## Prerequisites
* Docker
## How to run
* Create a .env file containing 3 environment variables (you can check the .env.example file to see how the DATABASE_URL variable is formatted): 
    * POSTGRES_USER
    * POSTGRES_PASSWORD
    * DATABASE_URL
* Run "docker compose up -d", this will create a postgres database container using the environment variables you supplied, and another container for the API. The API has the port "3000" exposed.

## Functionality
* The only endpoint that this API has is /todo, and you can only make a POST request to it currently.
This is what the body for that request looks like
```json
{
    "instruction": "This is the instruction",
    "description": "This is the description"
}
```
## Technologies used
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)