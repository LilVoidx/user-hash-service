
# User Hash Service

This is a simple Node.js service for managing users, integrating with MongoDB to store user data. The service allows creating users, retrieving users by ID, and updating user names. It also generates a unique hash ID for each user using MD5.

## Features
- **Create User**: Adds a new user with a unique hash ID.
- **Get User**: Retrieves user details by ID.
- **Update User Name**: Allows updating a user's name.

## Endpoints

1. **POST `/api/users`** - Create a new user
   - **Request Body**:
     ```json
     {
       "userId": "user_id"
       "name": "Test User",
       "about": "A brief description about the user"
     }
     ```
   - **Response**:
     ```json
     {
       "hash": "generated_md5_hash"
     }
     ```

2. **GET `/api/users/:id`** - Get user details by ID
   - **Response**:
     ```json
     {
       "userId": "user_id",
       "name": "Test User",
       "about": "A brief description about John"
     }
     ```

3. **PATCH `/api/users/:id`** - Update user's name
   - **Request Body**:
     ```json
     {
       "name": "Updated Name"
     }
     ```
   - **Response**:
     ```json
     {
       "userId": "user_id",
       "name": "Updated Name",
       "about": "A brief description about John"
     }
     ```

## Running the Service Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LilVoidx/user-hash-service.git
   cd user-hash-service
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following content:
   ```bash
   PORT=<port>
   MONGO_URI=mongodb://localhost:<port>/<db>
   NODE_ENV=development
   LOG_LEVEL=info
   ```

4. **Start the server**:
   ```bash
   yarn dev
   ```

   The app will be running on `http://localhost:3000`.

## Docker Setup

### Using Docker Compose

1. **Build and run the services**:
   ```bash
   docker-compose up --build
   ```

   The app will be available at `http://localhost:3000`.

### Docker Image

1. **Build the Docker image**:
   ```bash
   docker build -t user-hash-service .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 user-hash-service
   ```

## Technologies Used
- **Node.js**: Backend framework.
- **Express**: Web framework for building the REST API.
- **MongoDB**: Database for storing user data.
- **MD5**: Used to generate a unique hash ID for users.
- **Winston**: Logger for application logs.
- **Zod**: Schema validation for API requests.
