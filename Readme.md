# Compute Backend
Node api backend built on the top of express js to compute the conditions passed.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 16.0+](http://nodejs.org)

Getting Started`
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/Compute.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Start the application
npm run dev

# Start the application for prod
npm start

# Access the application
http://localhost:4000

# Test
npm test

# Lint
npm run lint

# Format
npm run format

# test
npm test

# Coverage
npm run coverage
```

Project Structure
-----------------

| **api**/api             | Contains all of the api logic.              |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continue integration.                |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

Api Endpoints
-----------------
 **Compute**
-----------------
  Returns json response of the result.

* **URL**

  /api/v1/compute

* **Method:**

  `POST`

*  **POST Payload**

   ```
   { 
    "&&":
      [
          { "==": 
            ["a", "a"] 
          },
          { "!": 
            {"==": 
                [1, 2] 
            } 
          }]
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `true|false`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Failed to fetch data." }`
