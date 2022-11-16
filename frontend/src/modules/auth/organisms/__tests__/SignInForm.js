import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignInForm } from '../SignInForm';

describe('SignInForm', () => {
  it('calls `handleSubmit` on success', async () => {
    const handleSubmit = jest.fn();
    render(<SignInForm onSubmit={handleSubmit} />);

    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: 'john@doe.com' },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'secret123' },
    });

    fireEvent.submit(screen.getByRole('button', { text: /sign in/i }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          email: 'john@doe.com',
          password: 'secret123',
        },
        expect.anything(),
      );
    });
  });

  it('shows error on wrong email', async () => {
    const handleSubmit = jest.fn();
    render(<SignInForm onSubmit={handleSubmit} />);

    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: 'john---doe.com' },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'secret123' },
    });

    fireEvent.submit(screen.getByRole('button', { text: /sign in/i }));

    const errorMessages = await screen.findAllByText(
      /email must be a valid email/i,
      { selector: 'div#email-feedback' },
    );

    await waitFor(() => {
      expect(errorMessages).toHaveLength(1);
      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });
});
