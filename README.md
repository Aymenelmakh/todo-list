# 📝 Todo List (Vanilla JavaScript)

A simple **Todo List web application** built using **HTML, CSS, and Vanilla JavaScript**.  
It allows users to **add, edit, delete, and complete missions**, with persistent storage using **Local Storage**.

---

## 🚀 Features

- ➕ Add new missions (todos)
- ✏️ Edit existing missions
- ✅ Mark missions as completed / uncompleted
- 🗑️ Delete missions
- 💾 Automatic saving using Local Storage
- 🔄 Tasks persist after page reload
- 📅 Displays creation date for each mission

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser Local Storage
- Material Symbols (icons)

---

## 📂 Project Structure

```text
final_project/
└── todo-list/
    ├── scripts/
    │   └── script.js
    ├── style/
    │   └── style.css
    ├── templates/
    │   └── index.html
    └── README.md
```
## 📄 How It Works

- Missions are dynamically created using JavaScript.

- Event delegation is used to handle clicks on dynamically added buttons.

- Missions can be edited, checked/unchecked, or deleted.

- All missions are stored in localStorage as JSON.

- On page load, saved missions are restored automatically.

## 💾 Local Storage Logic

Each mission is stored with the following properties:

- text — mission content

- done — completion state (true / false)

- date — creation date

Example stored data:
```text
[
  {
    "text": "Read a book",
    "done": true,
    "date": "15/10/2026"
  }
]
```
## ▶️ How to Run

1. Clone the repository:
 ```text
    git clone https://github.com/Aymenelmakh/todo-list.git
  ```
2. Open the file:
```text
    templates/index.html
```
in your browser.

(No server required)

## 📌 Notes

- No frameworks or libraries are used.

- Built to practice DOM manipulation, event delegation, and Local Storage.

- Suitable for beginner to intermediate JavaScript learning.

## 👤 Author

Aymen Elmakh

GitHub: https://github.com/Aymenelmakh
