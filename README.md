# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<<<=================================================================>>>
# React-Vite-Learn
Learning React with Vite — structured notes, examples, and practice projects for mastering modern frontend development.

==================================================================

# 📘 React + Vite Learning Repository

This repository is my structured learning hub for mastering **React** with **Vite**.  
It documents my progress through hands‑on topics, projects, and experiments, serving as both a **knowledge base** and a **reference guide** for modern frontend development.

## 📚 Project Structure & Approach

This repository is organized as a **learning portfolio** for React + Vite.  
Each new concept or mini‑project lives inside its own folder under `src/topics/`.  

Key features of this approach:
- **Shared Layout** → A common `Layout` component provides a consistent navbar and footer across all pages.
- **Dynamic Imports** → Topics are lazy‑loaded using `React.lazy` and `Suspense`, so each page loads only when visited.
- **Auto‑Generated Topics Index** → The `/topics` route automatically lists all available topics by reading from a central config (or via Vite’s `import.meta.glob`), so adding a new topic requires no manual router edits.

---

## 📚 Learning Roadmap

### 1. JSX Fundamentals
- Introduction to JSX syntax and rules  
- Expressions and attributes with JSX  
- Conditional rendering  
- JSX and functions  
- Comments in JSX  
- **Project:** Building a Portfolio Website using React  

---

### 2. Components & Props
- Introduction to components & creating your first component  
- Hands‑on with components  
- Understanding props  
- Working with multiple props  
- Managing boolean values and PropTypes  
- Destructuring props  
- Dependency for PropTypes  
- Validating props with PropTypes  
- Using props with arrays  
- Setting up callbacks  
- Props and the spread syntax  

---

### 3. React Hooks – Core
- Introduction to React Hooks  
- Understanding state  
- Setting state in functional components  
- Managing multiple state variables  
- The asynchronous nature of React state  
- Passing arrays and objects to state  
- State vs. Props: key differences  
- **Project:** Managing form inputs with `useState`  
- **Project:** Building a Color Picker App  

---

### 4. React Hooks – useEffect & useRef
- Introduction to `useEffect`  
- Dependency array explained  
- **Project:** Mouse Tracker with `useEffect`  
- Cleanup functions in `useEffect`  
- **Project:** Digital Clock  
- Introduction to `useRef`  
- Using `useRef` with HTML elements  

---

### 5. Context & Custom Hooks
- What is prop drilling?  
- Introduction to `useContext`  
- Implementing a Provider  
- Updating context values  
- Understanding context scope  
- Introduction to custom hooks  
- Updating a custom hook  

---

### 6. Working with APIs
- Fetching data in React  
- Handling loading and errors  
- Making API calls with Axios  
- Multiple GET requests simultaneously  
- Sending POST requests  
- Using interceptors in Axios  
- Creating a custom Axios instance  
- Enhancing Axios instance with interceptors  

---

### 7. Forms in React
- Introduction to forms  
- Common issues in forms  
- Introduction to React Hook Form  
- Watching values in React Hook Form  
- Implementing validations  
- Performance comparison: basic forms vs React Hook Form  
- Managing form reset  
- Adding custom validation  
- Advanced custom validations  

---

### 8. Styling with Tailwind CSS
- Introduction to Tailwind CSS  
- Setting up Tailwind in a simple HTML project  
- Setting up Tailwind in a React project  
- Responsive design & custom themes  
- **Project:** Implementing Dark Mode with Tailwind CSS  

---

### 9. Routing in React
- Introduction to routing  
- Setting up routes  
- Adding navigation  
- Nested routes  
- Building a 404 page  
- `useLocation` hook  
- `useNavigate` hook  
- `useSearchParams` hook  

---

### 10. State Management with Redux
- Introduction to Redux  
- Getting started with Redux  
- Defining actions  
- Defining reducers  
- Defining a store  
- Creating a counter app  
- Sharing data across components  
- Upgrading store setup with Redux Toolkit  
- Introduction to Redux DevTools  
- Destructuring & updating state in JS  
- **Project:** Fetching data from API & managing state with Redux  
- Redux Toolkit vs traditional `createStore`  

---

## 🛠️ Tech Stack
- React  
- Vite  
- JavaScript (ES6+)  
- Tailwind CSS  
- Redux Toolkit  
- Axios  
- React Hook Form  

---

## 📂 Repository Structure

---

## ⚡ Getting Started
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev

####📝 License
This repository is for personal learning and reference.
Feel free to explore and adapt the material for your own journey.

---
