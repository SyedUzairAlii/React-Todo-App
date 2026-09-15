import styled from 'styled-components'
import ReactCalendar from 'react-calendar'

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  background: #fafafa;
`

export const SelectedDateDisplay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #667eea;
  text-align: center;
`

export const CalendarButton = styled.button`
  padding: 10px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

export const CalendarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const CalendarModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 20px;

  @media (max-width: 600px) {
    width: 90%;
    padding: 16px;
  }
`

export const StyledReactCalendar = styled(ReactCalendar)`
  border: none;
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Calendar header */
  .react-calendar__viewContainer {
    padding: 0;
  }

  .react-calendar__month-view,
  .react-calendar__year-view,
  .react-calendar__decade-view,
  .react-calendar__century-view {
    width: 100%;
    border-collapse: collapse;
  }

  /* Navigation buttons */
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 12px;
    gap: 8px;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      background: #667eea;
      color: white;
      border-color: #667eea;
    }

    &:disabled {
      background: #e0e0e0;
      color: #999;
      cursor: not-allowed;
    }
  }

  .react-calendar__navigation__label {
    font-weight: 700;
    font-size: 16px;
    color: #333;
    flex-grow: 1;
    text-align: center;
  }

  /* Month and year labels */
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #667eea;
    padding-bottom: 8px;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 8px 0;
    abbr {
      border: none;
      text-decoration: none;
    }
  }

  /* Day tiles */
  .react-calendar__month-view__days {
    padding-top: 8px;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 8px 0;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    color: #333;

    &:hover {
      background: #f0f0f0;
    }

    &:active {
      background: #e0e0e0;
    }
  }

  .react-calendar__tile--now {
    background: #e8f0ff;
    color: #667eea;
    font-weight: 700;

    &:hover {
      background: #d9e6ff;
    }
  }

  .react-calendar__tile--active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 700;

    &:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 0 0 2px white, 0 0 0 4px #667eea;
    }
  }

  .react-calendar__tile--disabled {
    color: #999;
    background: #f5f5f5;
    cursor: not-allowed;
  }

  /* Date with todos indicator */
  .react-calendar__tile.has-todo {
    position: relative;
  }

  .react-calendar__tile.has-todo::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #667eea;
    border-radius: 50%;
    z-index: 10;
  }

  .react-calendar__tile.has-todo.react-calendar__tile--active::after {
    background: white;
  }

  .react-calendar__tile.has-todo.react-calendar__tile--now::after {
    background: #667eea;
  }

  /* Abbreviation styling */
  abbr {
    text-decoration: none;
    border: none;
  }
`
