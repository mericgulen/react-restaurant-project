# Restaurant Project

This is a restaurant management web application built using modern web development technologies. The project provides a platform where users can browse restaurant menus, place orders, and manage restaurant-related data.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **React Router DOM**: A routing library for React applications.
- **Redux**: A state management library for JavaScript apps.
- **React-Redux**: Official React bindings for Redux.
- **Redux-Thunk**: Middleware that allows you to write action creators that return a function instead of an action.
- **JSON-Server**: A full fake REST API that runs on `http://localhost:3000` to serve mock data.
- **Axios**: A promise-based HTTP client for making requests.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **UUID**: A library for generating unique identifiers.
- **React-Icons**: A popular library for including icons in React applications.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mericgulen/react-restaurant-project.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd react-restaurant-project
   ```

3. **Install dependencies**:

   If you're using npm:

   ```bash
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

4. **Start the JSON-Server**:

   JSON-Server will serve the mock data on `http://localhost:3000`.

   ```bash
   npm run server
   ```

5. **Run the application**:

   Start the development server with Vite.

   ```bash
   npm run dev
   ```

   The app should be running on `http://localhost:5173`.

## Project Structure

```bash
├── public
├── src
│   ├── components    # Reusable components
│   ├── pages         # Application pages
│   ├── redux         # Redux store, actions, and reducers
│   ├── utils         # Axios service calls
│   ├── App.js        # Main application component
│   └── main.js       # Entry point
├── README.md
└── package.json
```

### Features

- Menu Browsing: Users can browse the restaurant menu with detailed item descriptions.
- Responsive Design: The application is responsive and works well on all device sizes.
- State Management: Redux is used to manage the application state efficiently.
  Mock API: JSON-Server provides a mock API for testing and development purposes.

## Screenshot

![](restaurant.gif)
