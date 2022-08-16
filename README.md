# Better Reads.
    A GoodReads Clone. 
    
 <p align=center><a href='https://better-reads-aa.herokuapp.com/'>Better Reads Live Link</a></p>

## Splash Page

![BetterReads HomePage](https://user-images.githubusercontent.com/59978288/184771763-49df30f6-cf2f-438d-a60f-212b3c99d410.png)



## Entry Page


![Home Page](https://user-images.githubusercontent.com/59978288/184771059-a22ed255-7f26-499a-969e-eedad04d2324.png)


## Single Book Display

![betterreads-singlebook](https://user-images.githubusercontent.com/59179145/176922437-e6499994-0a06-4c48-8129-cc17c8069bd3.png)

## About

Better Reads is a full stack application that allows users to keep tracks on books, mark them as read, want to read, currently reading. Add books that are not on the page so you can keep track on them, add reviews on books so other readers can learn about your thoughts.

## Downloading the App
  1. Clone this repository 
  `git clone git@github.com:stili87/Better-Reads.git`
  
  2. Install all packages in both the frontend and backend folders: `npm install` for frontend and `pipenv install` for backend.
  
  3. Create a new .env file in the backend to access the database.  Follow the example .env in the backend. 
  
  4. Setup a PSQL user to match your .env file.
  
  5. Migrate and seed the database in the backend with `flask db migrate`, `flask db upgrade`, `flask seed all`.
  
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
