## **__project description:__**

### **Project name: Dev Stack**

Project description: Dev Stack is a developer based website where users can explore different technologies and make their own development stack by selecting the technologies they use or want to learn.

### Technology used: 
- React
- Vite
- Typescript
- JSON
- Tailwind CSS
- DaisyUI
- React toastify.

1. Explore your technologies:

Can browse different frontend, programming language, styling and devops technologies with their descriptions, categories, difficulty and ratings.

2. Build your own stack:

you can select technologies and add them to your personal stack. You can also remove individual technologies or delete the entire stack.

3. Interactive user experience:

This project uses react state management and toastify to provide instant feedback when technologies are added or removed.

# Answer to the React questions:
Q: What is JSX and why is it used in React?

- jsx is a js syntax that gives us write html like code inside javaScript/typeScript.

Q: What is the difference between props and state?

- Props are datas that passes from a parent component to a child component, where State is data managed inside a component that can change over time.

Q: What does the useState hook do, and where did you use it in this project?

- usestate gives us to store and update data inside a react component. I used it in app component to manage the selected technologies in the users stack and update the fontend when technologies are added or removed.

Q: What does the useEffect hook do, and why did you need it to load the JSON data?

- useeffect runs code when data changes. It needs to load the technology data from the json file when the application starts.

Q: Why does every item in a .map() list need a unique key prop?

- because unique key gives react to identify each item in a list uniquely. This allows react to update only the items that have changed.

Q: What is conditional rendering? Show one place you used it (example: the empty stack message).

- conditional rendering means showing different ui based on a condition. I used it in the stack section to show an empty stack message when no technology has been selected.

Q: How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- parent component can send data to a child using props. A child can send information back by calling a function that the parent passes to the child through props.
Ans: parent component can send data to a child using props. A child can send information back by calling a function that the parent passes to it through props.
