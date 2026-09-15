export interface Todo {
  id: number
  text: string
  completed: boolean
  date: string // YYYY-MM-DD format
}

export type FilterType = 'all' | 'active' | 'completed'
