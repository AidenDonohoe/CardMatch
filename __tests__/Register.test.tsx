import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../src/components/Register';

describe('Register', () => {
  it('registers a new user', async () => {
    render(<Register />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');

    await userEvent.click(screen.getByRole('button', { name: 'Register' }));

    await waitFor(() => {
      const successMessage = screen.getByText('Registration successful!');
      expect(successMessage).toBeTruthy();
    });
  });
});
