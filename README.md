# 📝 React Todo App with Calendar

A modern, feature-rich todo application built with React, TypeScript, and styled-components. Manage your tasks with date-based organization using an interactive calendar widget.

## 🚀 Live Demo

**Try the app right now:** [React Todo App on Vercel](https://react-todo-app-zeta-six.vercel.app/)

No installation needed! Just click the link above to start using the app in your browser.

---

## ✨ Features

- 📅 **Calendar-Based Todo Management** - Organize tasks by specific dates
- 🗓️ **Interactive Calendar Widget** - Click any date to switch between different days
- 📍 **Visual Indicators** - Small dots appear on calendar dates that have todos
- ✅ **Task Management** - Add, complete, and delete todos
- 🎯 **Smart Filtering** - Filter by All, Active, or Completed tasks
- 💾 **Browser Persistence** - Your todos are automatically saved to localStorage
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🔒 **Fully Typed** - Written in TypeScript for type safety
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with Hooks
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: styled-components (CSS-in-JS)
- **Calendar**: react-calendar
- **State Management**: React Hooks
- **Code Quality**: ESLint
- **Deployment**: Vercel

---

## 📦 Project Structure

```
src/
├── components/
│   ├── App/
│   │   └── App.tsx          # Main application component
│   └── Calendar/
│       └── Calendar.tsx      # Calendar widget component
├── styles/
│   ├── AppStyles.ts         # Main app styled components
│   └── CalendarStyles.ts    # Calendar styled components
├── types/
│   └── index.ts             # TypeScript type definitions
├── utils/
│   └── storage.ts           # localStorage utility functions
├── main.tsx                 # React entry point
└── vite-env.d.ts           # Vite environment types
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyedUzairAlii/React-Todo-App.git
   cd React-Todo-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will be available at `http://localhost:3000`

---

## 📋 Available Scripts

- **`npm run dev`** - Start development server (port 3000)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

---

## 💡 How to Use

1. **Select a Date**
   - Click "Change Date" to open the calendar
   - Click on any date to select it
   - Small blue dots indicate dates with existing todos

2. **Add a Todo**
   - Type your task in the input field
   - Click "Add" or press Enter
   - The task is automatically saved to your selected date

3. **Manage Todos**
   - Check the checkbox to mark a task as complete
   - Click the "×" button to delete a task
   - Use filter buttons to view All, Active, or Completed tasks

4. **Your Data is Safe**
   - All todos are automatically saved to browser localStorage
   - Your data persists even after closing the browser

---

## 🎯 Key Features Explained

### Calendar Integration
- Interactive calendar to navigate between dates
- Visual indicators (dots) show which dates have todos
- Seamlessly switch between different days

### Date-Based Organization
- Each todo is associated with a specific date
- View todos for a particular day
- Perfect for planning and scheduling

### Data Persistence
- Uses browser localStorage for automatic data saving
- No backend required
- Your todos are available every time you visit

### Responsive Design
- Mobile-friendly interface
- Gradient UI with modern styling
- Smooth animations and transitions

---

## 📱 Deployment

This app is deployed on **Vercel** for easy access and hosting.

### Deploying Your Own Version

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on each push
4. Your live app will be available at a unique Vercel URL

---

## 🔧 Configuration

### Vite Config (`vite.config.ts`)
- Development server runs on port 3000
- Configured for React with TypeScript

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- React JSX support
- ES2020 target

### Vercel Config (`vercel.json`)
- Output directory: `dist` (Vite default)
- Build command: `npm run build`
- Framework: Vite

---

## 📝 Future Enhancements

Potential features for future versions:
- [ ] Recurring todos
- [ ] Todo categories/tags
- [ ] Export todos as PDF/CSV
- [ ] Dark mode
- [ ] Multi-user sync with backend
- [ ] Drag-and-drop reordering
- [ ] Todo reminders/notifications

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Syed Uzair Ali**
- GitHub: [@SyedUzairAlii](https://github.com/SyedUzairAlii)

---

## 🙌 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [styled-components](https://styled-components.com)
- Calendar by [react-calendar](https://github.com/wojtekmaj/react-calendar)
- Deployed on [Vercel](https://vercel.com)

---

**Made with ❤️ by Syed Uzair Ali**
