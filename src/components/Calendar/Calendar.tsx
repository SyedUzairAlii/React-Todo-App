import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import type { JSX } from 'react'
import 'react-calendar/dist/Calendar.css'
import {
  CalendarContainer,
  CalendarButton,
  CalendarModal,
  CalendarOverlay,
  StyledReactCalendar,
  SelectedDateDisplay,
} from '../../styles/CalendarStyles'

interface CalendarComponentProps {
  selectedDate: string // YYYY-MM-DD format
  onDateChange: (date: string) => void
  datesWithTodos?: string[] // Array of YYYY-MM-DD dates that have todos
}

const CalendarComponent = ({
  selectedDate,
  onDateChange,
  datesWithTodos = [],
}: CalendarComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDateChange = (date: Date): void => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    onDateChange(formattedDate)
    setIsOpen(false)
  }

  const formatDateDisplay = (dateStr: string): string => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const selectedDateObj = new Date(selectedDate)

  const getDayClass = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const dateString = `${year}-${month}-${day}`
    return datesWithTodos.includes(dateString) ? 'has-todo' : ''
  }

  return (
    <CalendarContainer>
      <SelectedDateDisplay>📅 {formatDateDisplay(selectedDate)}</SelectedDateDisplay>
      <CalendarButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Calendar' : 'Change Date'}
      </CalendarButton>

      {isOpen && (
        <>
          <CalendarOverlay onClick={() => setIsOpen(false)} />
          <CalendarModal>
            <StyledReactCalendar
              onChange={handleDateChange}
              value={selectedDateObj}
              tileClassName={({ date }) => getDayClass(date)}
            />
          </CalendarModal>
        </>
      )}
    </CalendarContainer>
  )
}

export default CalendarComponent
