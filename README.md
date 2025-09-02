# Blog API

A RESTful API for a personal blogging platform built with Node.js, Express, PostgreSQL, and Sequelize.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** bcryptjs (JWT coming soon)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL database
4. Create `.env` file with database credentials
5. Run: `node server.js`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration

## Database Schema

- **Users:** id, username, email, password (hashed), first_name, last_name, timestamps

## Current Status

✅ User registration with password hashing
🔄 User login (in progress)
⏳ JWT authentication
⏳ Posts CRUD operations