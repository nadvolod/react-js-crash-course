import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const rootNode = screen.getByText(/Task Tracker/i)
  expect(rootNode).toBeInTheDocument();
});
