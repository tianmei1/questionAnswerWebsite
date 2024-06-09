# Simple Q&A Platform

## Description

This project is a simple question and answer platform where users can log in, view, and post questions. The frontend is built with React, utilizing React Router for navigation. The backend is powered by Django, providing RESTful APIs for user authentication and question management.

## Features

- User authentication (login functionality).
- List of questions viewable after authentication.
- Users can post new questions (assuming this feature might be part of your project).

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Django, Django REST Framework
- **Database**: SQLite (default for Django)

## Project Structure

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Python 3.8 or higher
- pip (Python package installer)
- Node.js and npm

### Installing

A step by step series of examples that tell you how to get a development environment running.

#### Setting up the Backend



```bash
Navigate to the backend directory:
cd backend

Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

Install the required packages:
pip install -r requirements.txt
Run migrations to set up your database:

python manage.py migrate
Start the Django development server:

python manage.py runserver
Setting up the Frontend

Navigate to the frontend directory:
cd frontend

Install the necessary npm packages:
npm install

Start the React development server:
npm start
Now navigate to http://localhost:3000 in your browser to see the application running.

```
