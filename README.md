###  Docker installation
Before you get started, ensure you have docker installed in your machine
````
[Download and Install Docker] (https://docs.docker.com/engine/install/)
````
### Project Setup
Clone the Repository
````
git clone git@github.com:makobongo/usr-mgt.git
cd usr-mgt
````
### Run the project:
````
docker compose up --build
````
### power the project down
````
docker compose down
````
## NOTE
````
when running locally note frontend runs on localhost:3000 and backend on localhost:3001 respectively. Remember to make a copy of .env from .env.example in each directory i.e. both the frontend and backend and populate your details accordingly on each file
````
