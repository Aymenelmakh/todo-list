📝 Todo List (Vanilla JavaScript)

A simple Todo List web application built with HTML, CSS, and Vanilla JavaScript.
It allows users to add, edit, delete, and mark tasks as completed, with data persisted using Local Storage.

🚀 Features

➕ Add new missions (todos)

✏️ Edit existing missions

✅ Mark missions as completed / uncompleted

🗑️ Delete missions

💾 Automatic saving using Local Storage

🔄 Tasks persist after page reload

📅 Displays creation date for each mission

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

Browser Local Storage

Material Symbols (icons)

📂 Project Structure
todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md

📦 How It Works

Tasks are dynamically created using JavaScript.

Event delegation is used to handle clicks on dynamically added buttons.

All missions are stored in localStorage as JSON.

On page load, saved missions are restored automatically.

💾 Local Storage Logic

Each mission is stored with:

text (mission content)

done (completed state)

date (creation date)

Example stored data:

[
  {
    "text": "Learn JavaScript",
    "done": true,
    "date": "18/01/2026"
  }
]

▶️ How to Run

Clone the repository:

git clone https://github.com/Aymenelmakh/todo-list.git


Open index.html in your browser
(no server required).

📸 Preview

A minimal todo list UI with interactive buttons and persistent storage.

📌 Notes

This project uses no frameworks.

Built for learning DOM manipulation, event delegation, and localStorage.

Suitable as a beginner/intermediate JavaScript project.

👤 Author

Aymen Elmakh

GitHub: @Aymenelmakh