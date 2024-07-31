**Description**

Note Taker is a simple web application that allows users to write, save, and manage notes. This application uses an Express.js back end and stores note data in a JSON file.

***Table of Contents***

- Installation
- Usage
- API Endpoints
- Screenshots
- License

**Installation**

Clone the repository to your local machine:
```bash 
    git clone https://github.com/markjas0n/note-taker.git
```

**Navigate to Directory** 
```bash 
    cd note-taker
```
**Install the necessary dependencies** 
```bash
    npm install
 ```
**Start the application:**
```bash
npm start
```
```bash 
Open your web browser and go to http://localhost:3001 to use the application.**
```
**Usage**
-   When you open the Note Taker application, you are presented with a landing page with a link to the notes page.
-   Click on the link to the notes page to view existing notes and create new ones.
-   Enter a new note title and the note's text in the provided fields. The "Save Note" and "Clear Form" buttons will appear.
-   Click the "Save Note" button to save your note. The new note will appear in the left-hand column with the other existing notes.
-   Click on an existing note in the left-hand column to view it in the right-hand column. A "New Note" button will appear in the navigation.
-   Click the "New Note" button to clear the fields and enter a new note.

**API Endpoints**

-   GET /api/notes
-   Reads the db.json file and returns all saved notes as JSON.
-   POST /api/notes
-   Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client. Each note is given a unique ID using the uuid package.
-   DELETE /api/notes/
-   Deletes the note with the specified ID from the db.json file and returns a message indicating the note was deleted.

**Screenshots**

**Landing Page**
**Notes Page**
**License**

This project is licensed under the MIT License. See the LICENSE file for details.

