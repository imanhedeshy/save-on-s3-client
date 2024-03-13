// FileUpload.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from './FileUpload';

describe('FileUpload component', () => {
  test('renders a file input', () => {
    render(<FileUpload />);
    expect(screen.getByLabelText(/Choose File:/i)).toBeInTheDocument();
  });
});
