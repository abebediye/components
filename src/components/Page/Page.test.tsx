import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Page } from '@/components/Page';

describe('Page', () => {
  it('renders the logged-out view by default', () => {
    render(<Page />);
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });

  it('logs in when the login button is clicked', async () => {
    render(<Page />);
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });

  it('logs in when the sign up button is clicked', async () => {
    render(<Page />);
    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('logs out when the logout button is clicked', async () => {
    render(<Page />);
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    await userEvent.click(screen.getByRole('button', { name: 'Log out' }));
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });
});
