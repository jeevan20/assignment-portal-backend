# Assignment Submission Portal Backend

## Description

- This repository contains the backend for an assignment submission portal implemented using Node.js and Express.
- The system supports two types of users: **Users** and **Admins**. Users can upload assignments, while Admins can review, accept, or reject these assignments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Validation](#validation)

## Features

- **User Registration and Login**: Users can register and log in to the portal.
- **Assignment Upload**: Users can upload assignments in JSON format.
- **Admin Dashboard**: Admins can register, log in, view assignments tagged to them, and accept or reject assignments.
- **Input Validation**: All inputs are validated, with error messages provided for invalid inputs.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs for password hashing
- dotenv for environment variable management
- cors for enabling CORS
- express-validator for input validation
- nodemon for automatic server restarts during development

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd assignment-portal-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and configure your environment variables:
   1.MONGODB_URI
   2.PORT
   3.JWT_SECRET

## Usage

- To start the server, run:

```bash
npm run server
```

- The server will run on http://localhost:3001 by default.

## API Reference

### User Endpoints

#### Register a new user

```http
POST /api/user/register/
```

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `username` | `string` | **Required**. Username of the user |
| `email`    | `string` | **Required**. Email of the user    |
| `password` | `string` | **Required**. Password of the user |

#### User login

```http
POST /api/user/login/
```

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Required**. Email of the user    |
| `password` | `string` | **Required**. Password of the user |

#### Upload an assignment

```http
POST /api/user/upload/
```

| Body    | Type     | Description                     |
| :------ | :------- | :------------------------------ |
| `task`  | `string` | **Required**. Task description  |
| `admin` | `string` | **Required**. Name of the admin |

### Example Assignment Object

When uploading an assignment, the expected JSON format is:

```json
{
  "task": "Hello World",
  "admin": "Alok"
}
```

#### Fetch all admins

```http
GET /api/user/admins/
```

#### User Logout

```http
GET /api/user/logout/
```

### Admin Endpoints

#### Register a new admin

```http
POST /api/admin/register/
```

| Body       | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `username` | `string` | **Required**. Username of the admin |
| `email`    | `string` | **Required**. Email of the admin    |
| `password` | `string` | **Required**. Password of the admin |

#### Admin login

```http
POST /api/admin/login/
```

| Body       | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `email`    | `string` | **Required**. Email of the admin    |
| `password` | `string` | **Required**. Password of the admin |

#### View assignments tagged to the admin

```http
GET /api/admin/assignments/
```

#### Accept an assignment

```http
POST /api/admin/assignments/:id/accept/
```

| Path Parameter | Type     | Description                        |
| :------------- | :------- | :--------------------------------- |
| `id`           | `string` | **Required**. ID of the assignment |

#### Reject an assignment

```http
POST /api/admin/assignments/:id/reject/
```

| Path Parameter | Type     | Description                        |
| :------------- | :------- | :--------------------------------- |
| `id`           | `string` | **Required**. ID of the assignment |

## Validation

All inputs during login and register are validated using `express-validator`. Proper error messages are returned for invalid inputs, ensuring a user-friendly experience.
