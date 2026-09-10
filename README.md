Dev Stack

Dev Stack lets you browse a curated grid of development technologies, compare their category, difficulty, and rating at a glance, and build a personalized stack by adding the ones you like. Your selections live in a sidebar where you can review them and remove items individually or all at once.

Built With
React
TypeScript
Vite
Tailwind CSS
Features

Interactive Stack Builder — Browse technologies in a responsive grid and add them to your personal stack with a single click, with instant toast notifications confirming each action.



Live Selection Sidebar — See everything you've added in a dedicated sidebar, with the ability to remove individual items or clear your entire stack at once.



Responsive Navigation — A clean, fully responsive navbar with a dedicated mobile menu for smaller screens.


i. What is JSX, and why is it used in React?

JSX lets you write HTML-like syntax directly inside JavaScript/TypeScript files.


ii. What is the difference between props and state?

Props are data passed into a component from its parent, and the component can't change them — they're read-only.



iii. What does the useState hook do, and where did you use it in this project?

useState lets a component store and update values that affect what's rendered, and re-renders the UI automatically when those values change.




iv. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs side effects — code that happens outside the normal render process, like fetching data or setting timers. It's needed because fetching data is asynchronous and shouldn't happen during rendering itself. In App.tsx, one useEffect calls getTechnologies() when the component first mounts (empty dependency array []) to load the technology list once, and sets isLoading to false when it finishes. A second useEffect uses a timer to automatically hide the toast notification a few seconds after it appears.




v. Why does every item in a .map() list need a unique key prop?

React uses the key to track which specific item is which across re-renders, so it can efficiently update, reorder, or remove items without re-rendering the whole list. Without a stable, unique key, React might mix up items or re-render more than necessary. In this project, tech.id is used as the key when mapping over technologies in TechGrid, and again in YourStackSidebar and Footer's column/social lists.





vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. In YourStackSidebar.tsx, there's a check for selectedStack.length === 0 — if true, it shows "Your stack is empty" inside a dashed box; otherwise, it renders the actual list of selected technologies with a "Remove All" button.




vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child through props — for example, App passes technologies, selectedStack, and onAdd down into TechGrid. For a child to send information back up, the parent passes down a function as a prop, and the child calls that function with the relevant data. For example, TechCard calls the onAdd(tech) function (passed down from App through TechGrid) when its button is clicked, which lets App update its own selectedStack state in response.