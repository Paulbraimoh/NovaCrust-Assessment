# NovaCrust-Assessment

## Overview

**NovaCrust-Assessment** is a project built to convert a Crypto checkout Figma UI designs into a fully responsive React application for assessment purposes. The project focuses on translating visual design components into functional React components while maintaining design fidelity and responsiveness across different screen sizes.

---

## Pages and Components

The project consists of two main pages and one reusable component:

1. **Frame 1 – Crypto to Fiat Page**
2. **Frame 3 – Bank Details Page**
3. **NavBar Component** – A reusable navigation bar used across pages, featuring dynamic elements like Ethereum and Nigerian flag icons, as well as dropdown navigation indicators.

---

## Technologies Used

- **React** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **Vite** – Fast build tool for development and bundling
- **SVG Assets** – Ethereum icon (eth.svg) and Nigerian flag (ng-flag.svg)
- **Heroicons** – ChevronDownIcon from @heroicons/react/24/outline

---

## Features

- **Responsive Design:** Ensures the UI looks consistent across different screen sizes.
- **Dynamic Rendering:** Allows switching between pages using state and props without refreshing the browser.
- **Buttons for Navigation:** Users can switch between the Crypto to Fiat and Bank Details pages via interactive buttons.
- **Conditional Rendering:** Only the currently active page is displayed at a time.
- **State Handling & Props Usage:** Demonstrates React state management and component communication via props.

---

## Navigation

To navigate between pages, **click the big teal button at the end of the page**. This will dynamically switch from the current page to the other without needing to reload the browser or comment/uncomment components in App.jsx.

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm (v9 or above)

### Installation

1. **Clone the repository**

git clone <repository-url>
cd NovaCrust-Assessment

2. **Install dependencies**

npm install

3. **Start the development server**

npm run dev

4. **Open the app**
   Visit the URL displayed in the terminal (usually http://localhost:5173) in your browser.

---

## Learning Outcomes

- Tested speed and efficiency in delivering a project based on given designs.
- Strengthened attention to detail and adherence to design instructions.
- Gained practical experience in converting Figma designs to a working React application.
- Learned to implement state handling, props usage, and conditional rendering, even in a simple multi-page setup.

---

## Project Structure

NovaCrust-Assessment/
│
├─ public/
│ ├─ eth.svg
│ └─ ng-flag.svg
│
├─ src/
│ ├─ components/
│ │ └─ NavBar.jsx
│ ├─ pages/
│ │ ├─ Frame1.jsx
│ │ └─ Frame3.jsx
│ ├─ App.jsx
│ └─ main.jsx
│
├─ package.json
└─ tailwind.config.js
