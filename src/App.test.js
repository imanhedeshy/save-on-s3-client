import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the App', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();

  let submitButton = screen.getByText(/Submit/i);
  await waitFor(() => expect(submitButton).toBeDisabled());
});
