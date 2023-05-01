# Exercise: Express Middleware

## Introduction

You have joined as an engineer at a company that has an existing Express application. Your task is to implement some middleware functionality that has been outlined by the senior engineer. The team practices Test-Driven Development (TDD), and another team member has already written the unit tests for the functionality that you will be implementing. Your job is to ensure that the tests are passing and that the application is functioning correctly.

## Middleware Overview
Before we get started, let's go over what middleware is and why it's important. 

```text
         Request
            |
            V
   [Middleware 1] => [Middleware 2] => ... => [Route Handler] => [Middleware 3] => [Middleware 4] => Response
            |                                      |
            V                                      V
         Modify                                Generate
         Request                               Response
```

Middleware is a fundamental concept that provides a way to add reusable functionality to your application. It sits between the client and the server, intercepting incoming requests and outgoing responses, and performing various actions based on specific criteria.

There are various reasons to use middleware, but the primary motivation is to achieve separation of concerns. It allows developers to compartmentalize different features of their application and make it easier to manage and maintain the codebase. For example, you can use middleware to implement authentication, handle errors, parse request bodies, compress response bodies, and so on. To summarise, middleware is important for several reasons, including:

+ Separation of concerns: Middleware allows developers to separate the core functionality of their application from the specific tasks that middleware handles.
+ Reusability: Middleware can be reused across multiple applications.
+ Flexibility: Middleware can be added or removed from an application as needed.


Middleware is generally designed to handle specific tasks, such as authentication, logging, error handling or rate limiting, that are not directly related to the application's core functionality.

+ Logging: Logs all incoming requests to the console for debugging purposes.
+ Authentication: Checks to see if a user is logged in before allowing them to access certain routes.
+ Rate limiting: Limits the number of requests that a client can make within a certain time period, preventing abuse of the server.
+ Error handling: Catches errors thrown by other middleware functions and returns an appropriate error response to the client.


In the context of Express, middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application's request-response cycle. Middleware functions can perform the following tasks:

+ Execute any code.
+ Make changes to the request and the response objects.
+ End the request-response cycle.
+ Call the `next` middleware function in the stack.


There are two types of middleware in Express: application-level middleware and route-level middleware. Application-level middleware executes on every request to the application, while route-level middleware executes on specific routes. 

The middleware API in Express consists of a series of functions that can be chained together to create a pipeline of middleware functions. There are several ways to add middleware in Express. The `app.use()` method adds middleware functions to the application's middleware stack, and middleware functions can be specified with a path prefix, which applies them only to requests that match the specified path.

Express also provides other methods for adding middleware to specific routes or groups of routes, such as `app.get()`, `app.post()`, `router.get()`, and `router.use()`. These methods allow you to specify middleware functions that apply to only specific HTTP methods, specific routes, or groups of routes.  In addition, you can also compose multiple middleware functions for a single route using the `app.get(path, middleware1, middleware2, ..., middlewareN, routeHandler)` syntax. This allows you to create a pipeline of middleware functions that will be executed in order, with each middleware function passing control to the next one using the `next()` function. This is a powerful way to add reusable functionality to your application and achieve separation of concerns.


Here's an example of using middleware in Express:

```javascript
const express = require('express');
const app = express();

// Logging middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// Authentication middleware
function auth(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied. No token provided.');
  try {
    // Decode and verify authentication token
    const decoded = jwt.verify(token, 'secretKey');
    // Set user key on request object
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

// Application-level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Route-level middleware
app.get('/protected', auth, (req, res) => {
  res.send('This is top secret!');
});
```

In this example, we use `express.json()` and `express.urlencoded()` to parse incoming request bodies. We also define a custom `logger` function that logs incoming requests to the console. Lastly, we define an `auth` middleware function that checks for a JWT token in the Authorization header and verifies it with a secret key.

We then apply the auth middleware function to the root route using the `app.get()` method, which will only apply the middleware function to requests that match the root route.

It's important to note that order matters when using middleware in Express. Middleware functions will execute in the order that they are defined, so make sure to define them in the correct order for your application to work as expected.


## Tasks
Your goal is to implement two middleware functions: CORS and custom authentication. You will also need to modify the provided Express application to apply these middleware functions.

- [ ] Task: Implement CORS middleware
    You will need to implement the CORS middleware function to allow cross-origin requests from specific origins and disallow requests from unapproved origins. The following are the requirements:

    + Implement the CORS middleware function to allow requests from "http://localhost:8080" and disallow requests from other origins.
    + Apply the CORS middleware function to the app.
- [ ] Task: Implement custom authentication middleware
    You will need to implement the HTTP basic authentication middleware function to require valid credentials to access protected routes. The following are the requirements:

    + Implement the HTTP basic authentication middleware function to require a valid username and password for access.
    + Apply the HTTP basic authentication middleware function to the `/protected` route.
    + The credentials to be checked for are `user:password`.
    + NOTE: Try this task by writing your own middleware function from scratch, and then also try it using the `passport` library. This will help you appreciate how common libraries are built on top of the fundamentals.

You will need to run the provided unit tests to validate that the middleware functions have been implemented correctly. To run the tests, run npm run test in your terminal.

## Running the tests
To run the tests, you can use the following command:

```shell
npm run test
```

This will execute the test cases found in the test directory. The tests are linked to the implementation in `index.js`, and will validate that the middleware functions have been implemented correctly.

## Conclusion

By completing this exercise, you should now have a good understanding of how middleware functions work in an Express application. You have implemented two middleware functions: CORS and authentication, and validated your implementation using unit tests.

