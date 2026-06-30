// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MultiForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MultiForge/i);
    expect(titleElement).toBeInTheDocument();
});
