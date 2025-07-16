import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import AuthForm from './AuthForm';

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

// Mock Firebase auth functions
jest.mock('@/firebase/config', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
  },
}));

describe('AuthForm', () => {
  beforeEach(() => {
    // Default mock implementation
    useSelector.mockImplementation(selector => {
      // Mock the state shape that the component expects
      const state = {
        auth: {
          loading: false,
          error: null,
        },
      };
      return selector(state);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the login form by default', () => {
    render(<AuthForm />);
    
    // Check that the login form is rendered
    expect(screen.getByText('Welcome Back!')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Need an account? Sign up')).toBeInTheDocument();
  });

  it('switches to signup form when the link is clicked', () => {
    render(<AuthForm />);
    
    // Click the signup link
    fireEvent.click(screen.getByText('Need an account? Sign up'));
    
    // Check that the signup form is rendered
    expect(screen.getByText('Join AgriMart')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Already have an account? Sign in')).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    // Mock the selector to return an error
    useSelector.mockImplementation(selector => {
      const state = {
        auth: {
          loading: false,
          error: 'Invalid email or password',
        },
      };
      return selector(state);
    });
    
    render(<AuthForm />);
    
    // Check that the error message is displayed
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  it('disables the submit button when loading', () => {
    // Mock the selector to return loading state
    useSelector.mockImplementation(selector => {
      const state = {
        auth: {
          loading: true,
          error: null,
        },
      };
      return selector(state);
    });
    
    render(<AuthForm />);
    
    // Check that the submit button is disabled and shows loading text
    const submitButton = screen.getByText('Processing...');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});