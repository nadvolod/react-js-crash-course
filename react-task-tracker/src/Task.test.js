import { render, screen } from '@testing-library/react';
import Task from './components/Task'

// Failing test with error 'TypeError: Cannot read property 'reminder' of undefined'
// could it be because Task is not a function component?
// test('renders learn react link', () => {
//   render(<Task />);
//   const rootNode = screen.getByRole('div')
//   expect(rootNode).toBeInTheDocument();
// });
