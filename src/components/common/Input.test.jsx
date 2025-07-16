import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input id="test" name="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('renders required indicator when required is true', () => {
    render(<Input id="test" name="test" label="Test Label" required />);
    const label = screen.getByText('Test Label');
    expect(label.parentElement).toHaveTextContent('*');
  });

  test('renders placeholder text', () => {
    render(<Input id="test" name="test" placeholder="Test Placeholder" />);
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  test('renders with correct type attribute', () => {
    const { rerender } = render(<Input id="test" name="test" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');

    rerender(<Input id="test" name="test" type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input id="test" name="test" type="password" />);
    // Password inputs don't have a role, so we need to query by type
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password');
  });

  test('renders with provided value', () => {
    render(<Input id="test" name="test" value="Test Value" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  test('calls onChange handler when input changes', () => {
    const handleChange = jest.fn();
    render(<Input id="test" name="test" onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('calls onBlur handler when input loses focus', () => {
    const handleBlur = jest.fn();
    render(<Input id="test" name="test" onBlur={handleBlur} />);
    
    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('renders error message when error is provided', () => {
    render(<Input id="test" name="test" error="Test Error" />);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  test('renders helper text when provided and no error', () => {
    render(<Input id="test" name="test" helperText="Test Helper Text" />);
    expect(screen.getByText('Test Helper Text')).toBeInTheDocument();
  });

  test('does not render helper text when error is provided', () => {
    render(
      <Input 
        id="test" 
        name="test" 
        helperText="Test Helper Text" 
        error="Test Error" 
      />
    );
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.queryByText('Test Helper Text')).not.toBeInTheDocument();
  });

  test('disables input when disabled prop is true', () => {
    render(<Input id="test" name="test" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByRole('textbox')).toHaveClass('bg-gray-100');
    expect(screen.getByRole('textbox')).toHaveClass('cursor-not-allowed');
  });

  test('applies full width class when fullWidth is true', () => {
    render(<Input id="test" name="test" fullWidth />);
    expect(screen.getByRole('textbox')).toHaveClass('w-full');
    expect(screen.getByRole('textbox').parentElement.parentElement).toHaveClass('w-full');
  });

  test('applies custom className', () => {
    render(<Input id="test" name="test" className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  test('generates unique ID when id is not provided', () => {
    render(<Input name="test" label="Test Label" />);
    const input = screen.getByLabelText('Test Label');
    expect(input.id).toMatch(/^input-test-/);
  });
});