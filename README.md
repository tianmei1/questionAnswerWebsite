# Simple Q&A Platform

## Description

This project is a simple question-and-answer platform where users can log in, view, and post questions. The front end is built with React, utilizing React Router for navigation. The backend is powered by Django, providing RESTful APIs for user authentication and question management.

## Features

- User authentication (login functionality).
- List of questions viewable after authentication.
- Users can post new questions.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Django, Django REST Framework
- **Database**: Mysql

## Project Structure

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Python 3.8 or higher
- pip (Python package installer)
- Node.js and npm

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Setting up the Backend




Navigate to the backend directory:
```bash
cd backend
```
Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```
Install the required packages:
```bashpip install -r requirements.txt
```
Run migrations to set up your database:
```bash
python manage.py migrate
```
Start the Django development server:
```bash
python manage.py runserver
Setting up the Frontend
```
Navigate to the frontend directory:
```bash
cd frontend
```
Install the necessary npm packages:
```bash
npm install
```
Start the React development server:
```bash
npm start
```
Now navigate to http://localhost:3000 in your browser to see the application running.

