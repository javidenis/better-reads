# Better Reads.
    A GoodReads Clone. 
    
 <p align=center><a href='https://better-reads-aa.herokuapp.com/'>Better Reads Live Link</a></p>

## Splash Page

![betterreads-login](https://user-images.githubusercontent.com/59179145/176922294-ba016cbb-40db-4559-929b-172f286d4e58.png)

## Entry Page

![betterreads-home](https://user-images.githubusercontent.com/59179145/176922356-261c9058-0f33-41fd-8701-ef02f1313149.png)

## Single Book Display

![betterreads-singlebook](https://user-images.githubusercontent.com/59179145/176922437-e6499994-0a06-4c48-8129-cc17c8069bd3.png)

## About

Better Reads is a full stack application that allows users to keep tracks on books, mark them as read, want to read, currently reading. Add books that are not on the page so you can keep track on them, add reviews on books so other readers can learn about your thoughts.

## Downloading the App
  1. Clone this repository 
  `git clone git@github.com:stili87/Better-Reads.git`
  
  2. Install all packages in both the frontend and backend folders: `npm install` for frontend and 'pipenv install' for backend.
  
  3. Create a new .env file in the backend to access the database.  Follow the example .env in the backend. 
  
  4. Setup a PSQL user to match your .env file.
  
  5. Migrate and seed the database in the backend with `flask db migrate`, 'flask db upgrade', 'flask seed all'.
  
  6. Run `pipenv shell` then `flask run` in the backend folder and `npm start` in the frontend folder. 
  
  7. Navigate your browser to `localhost:3000`

# Technologies Used

- Python
- Flask
- WTForms
- FlaskWTF
- Flask-Migrate
- FlaskSQLAlchemy
- Alembic
- React
- Boto3 AWS
- Multiselect
