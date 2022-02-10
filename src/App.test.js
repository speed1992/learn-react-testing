import { render, screen } from '@testing-library/react';
import App from './App';

test('inital color blue', () => {

  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });

  expect(button).toHaveStyle({ backgroundColor: 'red' })

})