/**
 * @component Button
 * @description A reusable button component with various styles and states
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The content to display inside the button
 * @param {string} [props.variant='primary'] - Button style variant ('primary', 'secondary', 'outline', 'text')
 * @param {string} [props.size='md'] - Button size ('sm', 'md', 'lg')
 * @param {boolean} [props.fullWidth=false] - Whether the button should take full width
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {boolean} [props.loading=false] - Whether to show a loading state
 * @param {string} [props.type='button'] - HTML button type attribute
 * @param {function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * // Basic primary button
 * <Button onClick={() => console.log('Clicked!')}>Click Me</Button>
 *
 * @example
 * // Secondary button with custom class
 * <Button 
 *   variant="secondary" 
 *   size="lg"
 *   className="my-custom-class"
 *   onClick={handleClick}
 * >
 *   Secondary Button
 * </Button>
 *
 * @example
 * // Disabled loading button
 * <Button disabled loading>Processing...</Button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className = '',
}) {
  // Base classes that apply to all buttons
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-500',
    text: 'text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-500',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    variantClasses[variant] || variantClasses.primary,
    widthClasses,
    disabledClasses,
    className,
  ].join(' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}