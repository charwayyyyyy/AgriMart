/**
 * @component Input
 * @description A reusable input component with various styles and states
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the input
 * @param {string} props.name - Name attribute for the input
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.label] - Label text
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value
 * @param {function} [props.onChange] - Change handler function
 * @param {function} [props.onBlur] - Blur handler function
 * @param {string} [props.error] - Error message
 * @param {string} [props.helperText] - Helper text
 * @param {boolean} [props.disabled=false] - Whether the input is disabled
 * @param {boolean} [props.required=false] - Whether the input is required
 * @param {boolean} [props.fullWidth=true] - Whether the input should take full width
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * // Basic text input
 * <Input 
 *   id="email"
 *   name="email"
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   onChange={handleChange}
 * />
 *
 * @example
 * // Password input with error
 * <Input 
 *   id="password"
 *   name="password"
 *   type="password"
 *   label="Password"
 *   value={password}
 *   onChange={handleChange}
 *   error="Password must be at least 8 characters"
 *   required
 * />
 */
export default function Input({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
  className = '',
}) {
  // Generate a unique ID if not provided
  const inputId = id || `input-${name}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Base classes
  const baseInputClasses = 'block rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm';
  
  // Error classes
  const errorClasses = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const inputClasses = [
    baseInputClasses,
    errorClasses,
    disabledClasses,
    widthClasses,
    className,
  ].join(' ');
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label 
          htmlFor={inputId} 
          className={`block text-sm font-medium ${error ? 'text-red-700' : 'text-gray-700'}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="mt-1">
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-description` : undefined}
          className={inputClasses}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500" id={`${inputId}-description`}>
          {helperText}
        </p>
      )}
    </div>
  );
}