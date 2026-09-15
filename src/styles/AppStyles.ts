import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const TodoApp = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`

export const AppHeader = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 20px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
`

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  opacity: 0.9;
  font-weight: 300;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid #eee;
`

export const TodoInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #999;
  }
`

export const AddButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

export const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  justify-content: center;
  flex-wrap: wrap;
`

interface FilterBtnProps {
  $isActive?: boolean
}

export const FilterBtn = styled.button<FilterBtnProps>`
  padding: 8px 16px;
  background: ${props => props.$isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f5f5f5'};
  color: ${props => props.$isActive ? 'white' : 'inherit'};
  border: 2px solid transparent;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background: ${props => props.$isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#efefef'};
  }
`

export const TodosList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fafafa;
  }
`

export const TodoCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #667eea;
  flex-shrink: 0;
`

interface TodoTextProps {
  $completed?: boolean
}

export const TodoText = styled.span<TodoTextProps>`
  flex: 1;
  font-size: 16px;
  color: #333;
  word-break: break-word;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? '#999' : '#333'};
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #d32f2f;
  font-size: 24px;
  cursor: pointer;
  padding: 0 8px;
  opacity: 0.6;
  transition: opacity 0.2s;
  flex-shrink: 0;
  line-height: 1;

  &:hover {
    opacity: 1;
  }
`

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #999;
  font-size: 16px;
  min-height: 150px;
`

export const AppFooter = styled.footer`
  padding: 16px 20px;
  text-align: center;
  border-top: 1px solid #eee;
  background: #fafafa;
  font-size: 14px;
  color: #666;
  font-weight: 500;

  p {
    margin: 0;
  }
`
