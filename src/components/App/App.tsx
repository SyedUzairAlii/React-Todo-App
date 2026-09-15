import { JSX, useEffect, useState } from 'react'
import type { Todo, FilterType } from '../../types'
import CalendarComponent from '../Calendar/Calendar'
import { storageUtils } from '../../utils/storage'
import {
  AppContainer,
  TodoApp,
  AppHeader,
  Subtitle,
  InputContainer,
  TodoInput,
  AddButton,
  FilterButtons,
  FilterBtn,
  TodosList,
  TodoItem,
  TodoCheckbox,
  TodoText,
  DeleteButton,
  EmptyState,
  AppFooter,
} from '../../styles/AppStyles'

const App = (): JSX.Element => {
  const today = new Date().toISOString().split('T')[0]
  
  const [todos, setTodos] = useState<Todo[]>(() => storageUtils.getTodos())
  const [inputValue, setInputValue] = useState<string>('')
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedDate, setSelectedDate] = useState<string>(today)

  // Save todos to localStorage whenever they change
  useEffect(() => {
    storageUtils.saveTodos(todos)
  }, [todos])

  const addTodo = (): void => {
    if (inputValue.trim() === '') return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      date: selectedDate,
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const filteredTodos: Todo[] = todos
    .filter((todo) => todo.date === selectedDate)
    .filter((todo) => {
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      return true
    })

  const completedCount: number = todos
    .filter((todo) => todo.date === selectedDate)
    .filter((todo) => todo.completed).length
  const activeCount: number = todos
    .filter((todo) => todo.date === selectedDate)
    .filter((todo) => !todo.completed).length
  const totalTasksForDate: number = todos.filter(
    (todo) => todo.date === selectedDate
  ).length

  // Get unique dates that have todos
  const datesWithTodos: string[] = Array.from(
    new Set(todos.map((todo) => todo.date))
  )

  return (
    <AppContainer>
      <TodoApp>
        <AppHeader>
          <h1>📝 My Todo App</h1>
          <Subtitle>Stay organized and productive</Subtitle>
        </AppHeader>

        <CalendarComponent
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          datesWithTodos={datesWithTodos}
        />

        <InputContainer>
          <TodoInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
          />
          <AddButton onClick={addTodo}>Add</AddButton>
        </InputContainer>

        <FilterButtons>
          <FilterBtn
            $isActive={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterBtn>
          <FilterBtn
            $isActive={filter === 'active'}
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </FilterBtn>
          <FilterBtn
            $isActive={filter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </FilterBtn>
        </FilterButtons>

        <TodosList>
          {filteredTodos.length === 0 ? (
            <EmptyState>
              {totalTasksForDate === 0
                ? '🎉 No tasks for this date. Add one to get started!'
                : '✨ No tasks in this category'}
            </EmptyState>
          ) : (
            <ul>
              {filteredTodos.map((todo) => (
                <TodoItem key={todo.id}>
                  <TodoCheckbox
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <TodoText $completed={todo.completed}>{todo.text}</TodoText>
                  <DeleteButton
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete task"
                  >
                    ×
                  </DeleteButton>
                </TodoItem>
              ))}
            </ul>
          )}
        </TodosList>

        <AppFooter>
          <p>Tasks for this date: {totalTasksForDate}</p>
        </AppFooter>
      </TodoApp>
    </AppContainer>
  )
}

export default App
