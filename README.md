## Transform Sentence API

A simple Node.js + Express API that takes a sentence and returns:

- Total word count
- List of unique words
- Reversed sentence

This project uses ES Modules, and a clean MVC folder structure.

### Folder Structure
```
project/
│── package.json
│── nodemon.json
│── server.js
│
└── src/
    ├── app.js
    │
    ├── routes/
    │   └── transform.route.js
    │
    ├── controllers/
    │   └── transform.controller.js
    │
    └── utils/
        └── stringUtils.js
```
### Technologies Used

- Node.js
- Express.js
- ES Modules (import/export)

### Installation

Clone the project and install dependencies:
```
npm install
```
### Running the Project
```
node server.js
```
### API Endpoint

POST /api/transform

Request Body
```
{
  "sentence": "I love working with JavaScript and Node.js"
}
```
Response
```
{
  "word_count": 7,
  "unique_words": [
    "i",
    "love",
    "working",
    "with",
    "javascript",
    "and",
    "node.js"
  ],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}
```
### ❗ Error Handling

If no sentence is provided
```
{
  "error": "Sentence is required and must be a string"
}
```
If body is missing completely
```
{
  "error": "Invalid or missing JSON body"
}
```
