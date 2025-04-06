# EasyTask - Enterprise Task Management

![EasyTask Logo](assets/task-management-logo.png)


EasyTask is a task management application designed for enterprise teams, enabling efficient task organization without friction.

## Key Features

- 👥 User-specific task management
- 📅 Clear due date formatting
- ➕ Easy task creation
- ✅ Mark tasks as complete
- 💾 LocalStorage data persistence
- 🎨 Clean, responsive interface

## Core Components

### `AppComponent`
- Root component managing user selection
- Displays selected user's tasks
- Lists all available users

### `TasksComponent`
- Shows tasks for selected user
- Allows adding new tasks
- Organizes tasks in ordered list

### `TaskComponent`
- Displays individual task details
- Provides task completion functionality

### `UserComponent`
- Shows user information
- Enables user selection

### `TasksService`
- Central service for all task operations
- Persists tasks to localStorage

## Technologies Used

- Angular 17+
- TypeScript
- CSS for styling
- LocalStorage for data persistence

## Installation & Usage

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the application with `ng serve`
4. Open your browser at `http://localhost:4200`

## Data Structure

### User
```typescript
interface User {
  id: string;
  avatar: string;
  name: string;
}
```

### Task
```typescript
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
```

## Future Improvements

- [ ] Add user authentication
- [ ] Implement task categories/tags
- [ ] Add task priorities
- [ ] Implement search and filtering
- [ ] Backend synchronization

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your suggestions or improvements.

## 📚 Other Language Versions

- [Read in Spanish](README_es.md)
- [Read in Portuguese](README_pt.md)
