# Link: https://drive.google.com/file/d/1UWpPkjL9q3sqiRAN7FZ37cCDGgX2MpB4/view

# Understanding REST APIs

## 1. Introduction to REST APIs

**REST (Representational State Transfer)** is an architectural style for designing networked applications.

It uses stateless client-server communication over HTTP with standard HTTP methods and status codes.

RESTful APIs are designed around resources, which can be anything from users and products to documents.

### Key Concepts

1. **Resources:** Everything that can be accessed through a RESTful API is considered a resource. Each resource has a unique identifier called a URI (Uniform Resource Identifier).

2. **Representations:** Resources are transferred in a specific format, such as JSON or XML.

3. **Stateless Communication:** Every request from the client to the server contains all the information needed to process it. The server does not store client session state between requests.

4. **HTTP Methods:** REST APIs use standard HTTP methods to perform actions on resources.

5. **HTTP Status Codes:** Servers use HTTP status codes to indicate the outcome of a client's request.

---

## 2. HTTP Methods

HTTP methods define the action you want to perform on a resource.

| Method | Description | Idempotent? |
|---|---|---|
| `GET` | Retrieves a resource or a list of resources. It should not modify server data. | Yes |
| `POST` | Creates a new resource. The request body contains the data for the new resource. | No (generally) |
| `PUT` | Updates a resource by replacing it with a new representation. | Yes |
| `PATCH` | Partially updates a resource using only the fields that need modification. | Not always |
| `DELETE` | Deletes a resource. | Yes (in terms of intended effect) |

### Important Notes on HTTP Methods

**1. Idempotence**

An idempotent method produces the same intended effect on the server whether the same request is made once or multiple times.

- `GET` — Idempotent
- `PUT` — Idempotent
- `DELETE` — Idempotent
- `POST` — Generally not idempotent
- `PATCH` — Depends on how the operation is implemented

**Example:** Sending the same `DELETE` request multiple times should leave the resource deleted, even if later requests return `404 Not Found`.

**2. Safe Methods**

Safe methods should not modify server data.

Common safe methods include:

- `GET`
- `HEAD`
- `OPTIONS`

---

## 3. HTTP Status Codes

HTTP status codes are three-digit numbers used by the server to indicate the outcome of a client's request.

### Status Code Categories

| Status Code Range | Category | Meaning |
|---|---|---|
| `1xx` | Informational | The request was received, and processing is continuing. |
| `2xx` | Success | The request was successfully received, understood, and accepted. |
| `3xx` | Redirection | Further action is needed to complete the request. |
| `4xx` | Client Error | The request contains an error or cannot be fulfilled. |
| `5xx` | Server Error | The server failed to fulfill a valid request. |

### Common HTTP Status Codes

| Code | Category | Description | Use Case |
|---|---|---|---|
| `200` | Success | **OK:** The request was successful. | A successful `GET` request. |
| `201` | Success | **Created:** A new resource was created. | A successful resource-creation request. |
| `204` | Success | **No Content:** The request succeeded, and there is no response body. | A successful `DELETE` request. |
| `301` | Redirection | **Moved Permanently:** The resource has moved permanently to a new URL. | Redirecting an old URL to a new one. |
| `302` | Redirection | **Found:** The resource is temporarily available at another URL. | Temporary redirection. |
| `304` | Redirection | **Not Modified:** The resource has not changed since the last request. | Avoiding unnecessary data transfer with conditional requests. |
| `400` | Client Error | **Bad Request:** The request is malformed or invalid. | Invalid request body or missing parameters. |
| `401` | Client Error | **Unauthorized:** Authentication is required or has failed. | Missing or invalid authentication credentials. |
| `403` | Client Error | **Forbidden:** The server refuses access to the resource. | The user does not have the required permission. |
| `404` | Client Error | **Not Found:** The requested resource could not be found. | An invalid URL or a nonexistent resource. |
| `405` | Client Error | **Method Not Allowed:** The HTTP method is not supported for that resource. | Using `POST` on a read-only endpoint. |
| `409` | Client Error | **Conflict:** The request conflicts with the current state of the resource. | A conflicting update or deletion. |
| `422` | Client Error | **Unprocessable Content:** The server understands the request but cannot process its instructions. | Data validation failure, such as invalid field values. |
| `500` | Server Error | **Internal Server Error:** Something unexpected went wrong on the server. | An unhandled backend error. |

---

## 4. Practical Example of a REST API

Imagine an e-commerce application that manages products.

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/products` | Get all products. |
| `GET` | `/api/products/1` | Get a product with ID `1`. |
| `POST` | `/api/products` | Create a new product. |
| `PUT` | `/api/products/1` | Replace the product with ID `1`. |
| `PATCH` | `/api/products/1` | Partially update the product with ID `1`. |
| `DELETE` | `/api/products/1` | Delete the product with ID `1`. |

### Example Request

```http
GET /api/products
```

### Example JSON Response

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  },
  {
    "id": 2,
    "name": "Mobile",
    "price": 20000
  }
]
```

In this example, the client requests the list of products, and the server returns the product data in JSON format.

---

## 5. Quick Revision

- **REST:** An architectural style for designing APIs.
- **API:** A way for different software applications to communicate.
- **Resource:** The data or entity accessed through an API.
- **URI:** An identifier used to identify a resource.
- **JSON:** A common format for exchanging data.
- **HTTP Methods:** Define the action performed on a resource.
- **Idempotence:** Repeating the same request has the same intended effect.
- **HTTP Status Codes:** Indicate the result of an HTTP request.
- **`GET`:** Retrieve data.
- **`POST`:** Create a resource.
- **`PUT`:** Replace a resource.
- **`PATCH`:** Partially update a resource.
- **`DELETE`:** Delete a resource.

### Remember

**REST API = Resources + HTTP Methods + Representations + Stateless Communication**


---

## 6. RESTful API Design Best Practices

Follow these best practices when designing RESTful APIs:

1. **Use nouns for resources:** Use nouns instead of verbs in endpoint URLs.
   - Good: `/users`, `/products`
   - Avoid: `/getUsers`, `/createProduct`

2. **Use plural nouns for collections:**
   - Example: `/users`, `/products`

3. **Use HTTP methods correctly:**
   - `GET` — Read data
   - `POST` — Create data
   - `PUT` — Replace a resource
   - `PATCH` — Partially update a resource
   - `DELETE` — Delete data

4. **Use appropriate HTTP status codes:** Return meaningful status codes to indicate success or failure.

5. **Maintain consistency:** Keep API naming conventions and response formats consistent and predictable.

6. **Design stateless APIs:** Every request should contain the information required to process it. Avoid depending on server-side session state.

---

## 7. REST API Interview Questions and Answers

### Q1. What is a REST API?

**Answer:**

REST stands for Representational State Transfer. It is an architectural style for designing networked applications.

REST APIs use stateless client-server communication over HTTP. They organize data around resources that can be accessed using HTTP methods such as `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

**Example:** An API that allows users to retrieve, create, update, and delete products.

### Q2. What are the common HTTP methods used in REST APIs?

**Answer:**

The common HTTP methods are:

- **GET:** Retrieves a resource or a list of resources.
- **POST:** Creates a new resource.
- **PUT:** Replaces an existing resource with new data.
- **PATCH:** Partially updates an existing resource.
- **DELETE:** Deletes a resource.

### Q3. Explain the difference between PUT and PATCH.

**Answer:**

**PUT:** Replaces the complete representation of a resource. The request typically contains the complete updated resource.

**PATCH:** Partially updates a resource. The request contains only the fields that need to be changed.

**Example:**

Suppose a user has the following data:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 21
}
```

Using `PUT`, you might send the complete updated user representation:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 22
}
```

Using `PATCH`, you might send only the field that needs updating:

```json
{
  "age": 22
}
```

### Q4. What are HTTP status codes, and why are they important in REST APIs?

**Answer:**

HTTP status codes are three-digit numbers sent by the server to indicate the outcome of a client's request.

They are important because they help clients understand whether a request succeeded, failed, or requires further action. They also help developers identify and troubleshoot API issues.

### Q5. Give examples of common HTTP status codes and explain when they are used.

**Answer:**

| Status Code | Meaning | When to Use |
|---|---|---|
| `200 OK` | Request successful | Retrieving data successfully |
| `201 Created` | Resource created | Creating a new resource |
| `400 Bad Request` | Invalid request | Invalid request data |
| `401 Unauthorized` | Authentication required or failed | Missing or invalid credentials |
| `403 Forbidden` | Access denied | User lacks permission |
| `404 Not Found` | Resource not found | Requested resource does not exist |
| `500 Internal Server Error` | Server-side error | Unexpected server failure |

### Q6. What does it mean for an HTTP method to be idempotent? Which methods are idempotent?

**Answer:**

An HTTP method is **idempotent** when making the same request multiple times has the same intended effect on the server as making it once.

Common idempotent methods are:

- `GET`
- `PUT`
- `DELETE`

`HEAD` and `OPTIONS` are also idempotent. `PATCH` can be idempotent depending on how the operation is designed. `POST` is generally not idempotent.

**Example:** Deleting the same resource repeatedly should leave that resource deleted, even if subsequent requests return `404 Not Found`.

### Q7. What is a safe HTTP method? Which methods are safe?

**Answer:**

A safe HTTP method is one that is not intended to change the server's resource state.

The main safe methods are:

- `GET`
- `HEAD`
- `OPTIONS`

These methods are intended for retrieving information or checking API capabilities rather than modifying resources.

### Q8. If an API operation fails, should the API return an error status code?

**Answer:**

Yes. An API should return an appropriate HTTP error status code and, when useful, a descriptive error message.

Examples:

- `400 Bad Request` — The request contains invalid data.
- `401 Unauthorized` — Authentication is missing or invalid.
- `403 Forbidden` — The client is not permitted to access the resource.
- `404 Not Found` — The requested resource does not exist.
- `500 Internal Server Error` — An unexpected server error occurred.

**Example JSON error response:**

```json
{
  "success": false,
  "message": "User not found"
}
```

The actual HTTP status code should also match the error.

### Q9. What are some best practices for designing RESTful APIs?

**Answer:**

The main RESTful API design best practices are:

1. Use nouns to represent resources.
2. Use plural nouns for resource collections.
3. Use HTTP methods according to their intended purpose.
4. Return appropriate HTTP status codes.
5. Keep endpoint naming and response formats consistent.
6. Design stateless APIs.
7. Validate incoming request data.
8. Handle errors clearly and consistently.
9. Protect sensitive data and secure API endpoints.
10. Document API endpoints and their expected request and response formats.

### Q10. How do you handle errors in RESTful APIs?

**Answer:**

Errors in RESTful APIs can be handled using the following practices:

1. **Use appropriate HTTP status codes** to indicate the type of error.
2. **Return descriptive error messages** in the response body, commonly using JSON.
3. **Validate request data** before processing it.
4. **Log errors on the server** to help developers debug problems.
5. **Avoid exposing sensitive information** such as passwords, database credentials, or internal stack traces to clients.

**Example:**

```json
{
  "success": false,
  "message": "Invalid email address"
}
```

For invalid request data, the API might return `400 Bad Request` or `422 Unprocessable Content`, depending on its validation conventions.

---

## 8. Quick Interview Revision

| Question | Short Answer |
|---|---|
| What is REST? | An architectural style for networked applications. |
| What does GET do? | Retrieves data. |
| What does POST do? | Creates a resource. |
| What is PUT? | Replaces a resource. |
| What is PATCH? | Partially updates a resource. |
| What does DELETE do? | Deletes a resource. |
| What is idempotence? | Repeated identical requests have the same intended effect. |
| What is a safe method? | A method not intended to modify resource state. |
| What is `200`? | OK — request successful. |
| What is `201`? | Created — resource created successfully. |
| What is `400`? | Bad Request — invalid request. |
| What is `401`? | Authentication required or failed. |
| What is `403`? | Forbidden — access denied. |
| What is `404`? | Not Found — resource does not exist. |
| What is `500`? | Internal Server Error. |
| What is stateless communication? | Each request carries the information needed to process it without relying on stored client session state. |

---

## 9. Final Summary

**Remember these five important points:**

1. REST APIs organize application data into resources.
2. HTTP methods define the operations performed on those resources.
3. HTTP status codes communicate the outcome of requests.
4. Good API design should be consistent, predictable, and secure.
5. Proper error handling makes APIs easier to debug and maintain.

These concepts are useful for backend development with Node.js, Express.js, Python FastAPI, and other backend frameworks.

These concepts are essential for understanding backend development and building APIs using Node.js, Express.js, Python FastAPI, or other backend frameworks.



