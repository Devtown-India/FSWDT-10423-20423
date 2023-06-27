# API's

## Auth endpoints

1. `POST` `'/api/auth/login'`

   - email
   - password

2. `POST` `'/api/auth/signup'`

   - email
   - password
   - username

3. `GET` `'/api/auth/forget-password'`

   - email (query param)

4. `POST` `'/api/auth/forget-password' !!(Protected)`
   - password

## Application API endpoints

1. `GET` `'/api/todos' !!(Protected)`

2. `POST` `'/api/todos' !!(Protected)`

   - title
   - complete
   - id

3. `DELETE` `'/api/todos/:id' !!(Protected)`

4. `PUT` `'/api/todos/:id' !!(Protected)`
   - title (optional)
   - complete (optional)

## Application endpoints

1. `GET` `'/app/login'`

   - return the login page

2. `GET` `'/app/signup'`

   - return the signup page

3. `GET` `'/app/forget-password'`

   - return the forget pass req page

4. `GET` `'/app/reset-password'`

   - return the reset pass page

5. `GET` `'/app/todos' !!(Protected)`
   - return the todos page

# Schema

1. User.json

   - email
   - password
   - username
   - id

2. Todos.json
   - title
   - complete
   - id
   - userId
