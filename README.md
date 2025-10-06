# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# todo-list-app
# todo-list-app

# 📝 To-Do List App (React)

A simple and interactive To-Do List web application built with **React.js**.  
Users can add, view, and delete tasks dynamically. Duplicate tasks are automatically prevented.

---

## 🚀 Features

- Add new tasks to your list  
- Prevents duplicate task entries  
- Delete tasks with a single click  
- Real-time updates using React state  
- Clean and minimal UI  

---

## 🧩 Tech Stack

- **React.js** (useState hook for state management)
- **HTML5**
- **CSS3**

---

## 📂 Project Structure

ToDo-List/
├── src/
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

yaml
Copy code

---

## 🧠 Code Explanation

### `App.js`
- Maintains the main task list using React’s `useState`.
- Handles adding new tasks via `saveToDoList()`.
- Prevents duplicate entries.
- Renders each task using the `ToDoListItems` component.

### `ToDoListItems`
- Displays individual tasks.
- Includes a delete button (`×`) to remove tasks.
- Updates the list by filtering out the deleted item.

---

## ⚙️ How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/todo-list-react.git
Navigate into the project

bash
Copy code
cd todo-list-react
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm start
Open your browser at:

arduino
Copy code
http://localhost:3000
🧹 Future Improvements
Add task completion toggle (✔️)

Persist data using localStorage or backend API

Edit existing tasks

Add filtering (All / Completed / Pending)

📸 Example UI
mathematica
Copy code
ToDo List
[Input Field] [Save Button]

1. Learn React ×  
2. Practice Hooks ×  
🧑‍💻 Author
Harsh Sahu
Built with ❤️ using React.


