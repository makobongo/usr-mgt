````markdown
# Project Setup Guide

Welcome to the project! Below are the steps to get both the frontend and backend running on your local machine.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- **MySQL**: You need MySQL installed and running.
  - [Download and Install MySQL](https://dev.mysql.com/downloads/installer/)
- **Node.js**: Preferably version **v22.19.0** or higher. You can check the version with `node -v`.
  - [Download Node.js](https://nodejs.org/)
- **npm**: npm comes with Node.js. Verify it's installed by running `npm -v`.

## Project Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone git@github.com:makobongo/usr-mgt.git
cd usr-mgt
````

### 2. Frontend Setup (Vue.js)

#### Navigate to the `frontend` directory:

```bash
cd frontend
```

#### Install frontend dependencies:

```bash
npm install
```

#### Run the frontend development server:

```bash
npm run dev
```

Your Vue.js frontend should now be running on a local development server, typically at `http://localhost:3000`.

### 3. Backend Setup (Express.js)

#### Navigate to the `backend` directory:

```bash
cd backend
```

#### Install backend dependencies:

```bash
npm install
```

#### Set up the MySQL Database:

1. **Navigate to the `sql` directory**:

   ```bash
   cd sql
   ```

2. **Run the SQL commands to create the necessary tables**:

   Copy the already created SQL commands from this directory and run them in your MySQL database to set up the required tables.

   ```bash
   mysql -u <your_mysql_user> -p <your_database_name> < create_tables.sql
   ```

   * Replace `<your_mysql_user>` with your MySQL username.
   * Replace `<your_database_name>` with the name of the database you're using.

#### Configure environment variables:

1. **Copy the `.env.example` file to `.env`**:

   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** to configure the database connection settings:

   * Open `.env` in a text editor and update the following variables:

     * `DB_HOST`: The host of your MySQL server (usually `localhost`).
     * `DB_USER`: Your MySQL username.
     * `DB_PASSWORD`: Your MySQL password.
     * `DB_NAME`: The name of the database you're using.

   Example `.env` file:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password123
   DB_NAME=mydatabase
   ```

#### Run the backend development server:

```bash
npm run dev
```

Your Express.js backend should now be running, typically at `http://localhost:3001`.

### 4. Verify Everything is Running

* **Frontend**: Open your browser and navigate to the frontend URL (usually `http://localhost:3000`).
* **Backend**: Ensure the backend API is running and can successfully connect to the database.

### Troubleshooting

If you run into issues:

* **Database Connection Issues**: Double-check that the `.env` file is correctly configured with the right database credentials (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
* **Port Conflicts**: Ensure the ports used by the frontend (3000) and backend (5000) are not already occupied by other services. You can change the port numbers in the respective configuration files if needed.

### Happy Coding!

If you encounter any problems or have further questions, feel free to reach out via the [issue tracker](#).

---

**Note**: This README contains the basic setup steps for both the frontend (Vue.js) and backend (Express.js) applications. You might need to modify this file for specific needs of your project.

```

### Key Sections in the `README.md`:

1. **Prerequisites**: Lists the software that needs to be installed (MySQL, Node.js, npm).
2. **Project Setup**: Includes the steps to clone the repository and set up both the frontend (Vue.js) and backend (Express.js).
3. **Frontend Setup**: Describes the process to install dependencies and run the Vue.js development server.
4. **Backend Setup**: Details the steps for setting up MySQL, copying environment variables, and running the backend server.
5. **Troubleshooting**: Common problems like database connection issues and port conflicts are addressed.
6. **Happy Coding**: A closing note offering further support.

This `README.md` should help your users get started with the project easily. Let me know if you need any further modifications!
```
