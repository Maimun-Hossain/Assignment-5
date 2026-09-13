# 🚀 Dev Stack

A modern React application that allows developers to explore, select, and manage their favorite technologies in one beautiful interface.

---

## 📝 Description

Dev Stack is a developer-focused project designed for developers who want to select and organize which technologies they use. Browse through a comprehensive technology section, select your preferred tech stack, and build your perfect developer profile. The application provides an intuitive interface to manage your technology preferences with ease.

---

## 🛠️ Technologies Used

- **React** - UI library for building interactive components
- **Vite** - Fast build tool and development server
- **TypeScript** - JavaScript with static type checking
- **JSON** - Data format for storing technology information
- **Tailwind CSS** - Utility-first CSS framework for styling
- **DaisyUI** - Component library for Tailwind CSS
- **React-Toastify** - Notification library for user feedback

---

## ✨ Key Features

### 1. **Technology Selection**
Browse and select from a wide variety of technologies. Users can easily add technologies to their personal stack with a single click, building a customized collection that represents their skills and preferences.

### 2. **Interactive UI with Notifications**
Get real-time feedback for every action with beautiful toast notifications. Whether adding or removing technologies, users receive instant visual confirmation powered by React-Toastify.

### 3. **Responsive & Beautiful Design**
Experience a polished, responsive interface built with Tailwind CSS and DaisyUI components. The application works seamlessly across all devices with smooth animations and a modern aesthetic.

---

## 📚 React Questions & Answers

### **Q: What is JSX, and why is it used in React?**

**Ans:** JSX is a syntax that looks like HTML but is actually JavaScript. It allows us to write UI elements directly in JavaScript code, making it more readable and intuitive. JSX gets converted to `React.createElement()` calls behind the scenes. It's used because it makes the code cleaner and easier to understand compared to writing pure JavaScript functions.

### **Q: What is the difference between props and state?**

**Ans:** Props are data passed from a parent component to a child component. They are read-only and cannot be changed by the child. State is data that belongs to a component itself and can change over time. When state changes, the component re-renders to reflect the new data. Props flow downward, while state is internal to each component.

### **Q: What does the useState hook do, and where did you use it in this project?**

**Ans:** `useState` allows functional components to have state. It returns an array with the current value and a function to update it. In this project, `useState` was used to manage the list of selected technologies, store the available technologies from JSON, track search filters, and manage UI state like modals or buttons. For example: `const [selectedTech, setSelectedTech] = useState([])`.

### **Q: What does the useEffect hook do, and why did you need it to load the JSON data?**

**Ans:** `useEffect` runs code after the component renders. It's used for side effects like loading data, fetching from APIs, or setting up subscriptions. We needed it to load the JSON technology data when the component first mounts. By using an empty dependency array `[]`, the effect runs only once, preventing multiple API calls and ensuring data loads at the right time.

### **Q: Why does every item in a .map() list need a unique key prop?**

**Ans:** Keys help React identify which items have changed or been added. Without unique keys, React gets confused and may render items incorrectly or mix up their state. Using a unique identifier (like an ID) as a key ensures each item is properly tracked. Never use array indexes as keys because the order of items might change, causing bugs.

### **Q: What is conditional rendering? Show one place you used it (example: the empty stack message).**

**Ans:** Conditional rendering means displaying different content based on certain conditions. You can use ternary operators or logical operators like `&&` to achieve this. In this project, conditional rendering was used to show an empty state message when no technologies are selected: `{selectedTech.length === 0 ? <p>No technologies selected</p> : <TechList />}`. This improves user experience by informing them when the list is empty.

### **Q: How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

**Ans:** To pass data from parent to child, use **props**: `<Child tech={technology} />`. The child receives it as a parameter. To send data back from child to parent, pass a **callback function** as a prop: `<Child onSelect={handleSelect} />`, then call it in the child: `onClick={() => onSelect(id)}`. This way, the child triggers the parent's function with the data, creating a two-way communication flow.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Assignment-5

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**
