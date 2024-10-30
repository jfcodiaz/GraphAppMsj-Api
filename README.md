
# GraphApp Messenger [API]
<pre>
   _____                     _                                      
  / ____|                   | |        /\  
 | |  __  _ __  __ _  _ __  | |__     /  \    _ __   _ __            
 | | |_ || '__|/ _` || '_ \ | '_ \   / /\ \  | '_ \ | '_ \           
 | |__| || |  | (_| || |_) || | | | / ____ \ | |_) || |_) |          
  \_____||_|   \__,_|| .__/ |_| |_|/_/    \_\| .__/ | .__/           
             __  __  | |                     | |    | |              
            |  \/  | |_|                     |_|    |_|              
            | \  / |  ___  ___  ___   ___  _ __    __ _   ___  _ __  
            | |\/| | / _ \/ __|/ __| / _ \| '_ \  / _` | / _ \| '__| 
            | |  | ||  __/\__ \\__ \|  __/| | | || (_| ||  __/| |    
            |_|  |_| \___||___/|___/ \___||_| |_| \__, | \___||_|    
                                                   __/ |             
                                                  |___/_  
                      |  _|   /\     |  __ \  |_   _||_  |           
                      | |    /  \    | |__) |   | |    | |           
                      | |   / /\ \   |  ___/    | |    | |           
                      | |  / ____ \  | |       _| |_   | |           
                      | |_/_/    \_\ |_|      |_____| _| |           
                      |___|                          |___|           
                                                                     
</pre>
## About It

This project is a challenge for the recruitment process at Sellia. It's a small chat room, and this repo is the **backend** of the application. This is a **GraphQL API** built with **NodeJS**, **Express**, **WebSockets**, **Apollo Server** connecting a **MongoDB Server**.

> [Frontend is here!](https://github.com/jfcodiaz/GraphAppMsj_vue)

---
### Backend Features
- GraphQL API
- Mutation for sending new messages
- Mutation for registering ("login")
- Query for old messages
- GraphQL subscription for receiving new messages
- Connect to MongoDB using Mongoose
----
## Run on Docker

You can run it (including the frontend) using the docker image `jfcodiaz/graphappmsj:latest`:

Run in a terminal
```sh
docker run --name graphappmsj -d -p 8085:80 -p 4000:4000 -p 27017:27017 jfcodiaz/graphappmsj:latest
```
When the download and startup process finishes, you will be able to access it at:

- Frontend: [http://localhost:8085/](http://localhost:8085/)
- Backend:  [http://localhost:4000/graphql](http://localhost:4000/graphql)
- MongoDB at port `27017` which you can access with Compass or any Mongo client

> Make sure ports `8085, 4000, and 27017` are available.


Stop the container:
```sh
docker stop graphappmsj
```
Start it again:
```sh
docker start graphappmsj
```
Remove the container:
```sh
docker rm graphappmsj
```

## Setup for development with Docker

If you want to check it and set it up locally for development:

Clone this repository:
```sh
git clone git@github.com:jfcodiaz/GraphAppMsj-Api.git
```
Enter the repository folder:
```sh
cd GraphAppMsj-Api
```
> Make sure ports `8035, 8036, and 27017` are available.

### If you use Linux or Mac

Run the initialization script, it configures everything automatically:
```sh
sh setup
```
and that's it!

You have available:
- GraphQL API at [http://localhost:8035/graphql](http://localhost:8035/graphql)
- Mongo Express at [http://localhost:8036](http://localhost:8036/)
  > **User** admin
  >
  > **Pass** password
- MongoDB at port `27017` which you can access with Compass or any Mongo client
  
  > **User**: root
  >
  > **Pass**: toor


### Otherwise...
1. Copy the `.env.example` file as `.env`:
```sh
cp .env.example .env
```
2. Start the containers:
```sh
docker compose up 
```
3. Open another terminal and enter the `chat-backend` container:
```sh
docker exec -it chat-backend sh
```
4. Install node dependencies:
```sh
yarn install
```
5. Run the development server:
```sh
yarn run dev
```

### If you prefer to set up without Docker:
Enter the `GraphAppMsj-Api/code` folder:
```sh
cd GraphAppMsj-Api
cd code
```
Copy the `.env.example` to `.env`:
```sh
cp .env.example .env
```
Install node dependencies:
```sh
yarn install
```

Run the development server:
```sh
yarn run dev
```

<pre>
                                                                     .
ooooooooo.             oooo                       oooooooooo.     o8o                       
`888   `Y88.           `888                       `888'   `Y8b  `"'                       
 888   .d88'  .oooo.    888  oooo   .ooooo.        888      888 oooo   .oooo.     oooooooo 
 888ooo88P'  `P  )88b   888 .8P'   d88' `88b       888      888 `888  `P  )88b   d'""7d8P  
 888          .oP"888   888888.    888   888       888      888  888   .oP"888     .d8P'   
 888         d8(  888   888 `88b.  888   888       888     d88'  888  d8(  888   .d8P'  .P 
o888o        `Y888""8o o888o o888o `Y8bod8P'      o888bood8P'   o888o `Y888""8o d8888888P  
                                                                                        
</pre>