# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application
For first running
```
npm start
```
if it is'n first running use npm run dev to avoid migrations errors.

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## Run in docker

```
cd {repository name}
```

```
docker-compose up --build
```
## Postgres command

Connects to a database under a specific user	-d: used to state the database name 
-U:used to state the database user
```
psql -d database -U user -W	
```

List available databases
```
\l
```

Switch connection to a new database
```
\c dbname
```

List available tables
```
\dt
```

Describe a table such as a column, type, modifiers of columns, etc.
```
\d table_name
```
Select all users
```
SELECT * FROM users;
```
Delete all content in table user
```
TRUNCATE users;
```
