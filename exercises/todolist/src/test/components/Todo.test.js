import { render, screen } from '@testing-library/react';
import Todo from '../../components/Todo';

test('should display no todo hint if todos array is empty', () => {
  render(<Todo todos={[]}/>);
  const hint = screen.getByText(/You do not have any todo yet/i);
  expect(hint).toBeInTheDocument();
});

test('should display all todo items if todos array is not empty', () => {
    const todos =[
        {id: 1, text: 'walk the dog', isCompleted: false}
    ]
    render(<Todo todos={todos}/>);
    const hint = screen.getByText(/walk the dog/i);
    expect(hint).toBeInTheDocument();
  });