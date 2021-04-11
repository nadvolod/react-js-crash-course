import { render, screen } from '@testing-library/react';
import Button from './components/Button';

test('renders learn react link', () => {
  render(<Button />);
  const rootNode = screen.getByRole('button')
  expect(rootNode).toBeInTheDocument();
});
