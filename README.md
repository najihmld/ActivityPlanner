# Challenge No. 1
## ActivityPlanner

## Setup Database
```sh
create database activity_planner
import activity_planner.sql
```

## Config
```sh
cd backend/src/config/mysql.js
```

## Running
```sh
cd backend
yarn install
yarn start
```

```sh
cd frontend
yarn install
yarn start
```

## API
### 1.Auth
```
POST: http://127.0.0.1:3002/auth/login
#### Body parameter
 	- username: sadmin
 	- password: sadmin
```


### 2. User
```
GET: http://127.0.0.1:3002/user/
```
```
POST: http://127.0.0.1:3002/auth/register
# Body parameter
  - role: 1 // 2 // 3 // 4 // 5
  - name: ...
 	- username: ...
 	- password: ...
```
```
PUT: http://127.0.0.1:3002/user/:id
# Body parameter
  - role: 1 // 2 // 3 // 4 // 5
  - name: ...
 	- username: ...
 	- password: ...
```
```
DELETE: http://127.0.0.1:3002/user/:id
```

### 3. Activity
```
GET: http://127.0.0.1:3002/activity/
```
```
POST: http://127.0.0.1:3002/activity/
# Body parameter
  - role: 1 // 2 // 3 // 4 // 5
  - title: ...
 	- description: ...
```
```
PUT: http://127.0.0.1:3002/activity/:id
# Body parameter
  - role: 1 // 2 // 3 // 4 // 5
  - title: ...
 	- description: ...
```
```
DELETE: http://127.0.0.1:3002/activity/:id
```


