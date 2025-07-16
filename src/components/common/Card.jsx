/**
 * @component Card
 * @description A versatile card component for displaying content in a contained box
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The content to display inside the card
 * @param {string} [props.title] - Optional card title
 * @param {ReactNode} [props.footer] - Optional card footer content
 * @param {boolean} [props.hoverable=false] - Whether to add hover effects
 * @param {boolean} [props.bordered=true] - Whether to show a border
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.headerProps] - Props for the header element
 * @param {Object} [props.bodyProps] - Props for the body element
 * @param {Object} [props.footerProps] - Props for the footer element
 *
 * @example
 * // Basic card
 * <Card>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * @example
 * // Card with title and footer
 * <Card 
 *   title="Card Title"
 *   footer={<Button>Action</Button>}
 *   hoverable
 * >
 *   <p>Card content with hover effect</p>
 * </Card>
 */
export default function Card({
  children,
  title,
  footer,
  hoverable = false,
  bordered = true,
  className = '',
  headerProps = {},
  bodyProps = {},
  footerProps = {},
}) {
  // Base classes
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  // Border classes
  const borderClasses = bordered ? 'border border-gray-200' : '';
  
  // Hover classes
  const hoverClasses = hoverable ? 'transition-shadow duration-300 hover:shadow-lg' : '';
  
  // Shadow classes
  const shadowClasses = 'shadow-sm';
  
  // Combine all classes
  const cardClasses = [
    baseClasses,
    borderClasses,
    hoverClasses,
    shadowClasses,
    className,
  ].join(' ');
  
  // Header classes
  const headerClasses = 'px-4 py-3 border-b border-gray-200 bg-gray-50';
  
  // Body classes
  const bodyClasses = 'p-4';
  
  // Footer classes
  const footerClasses = 'px-4 py-3 border-t border-gray-200 bg-gray-50';
  
  return (
    <div className={cardClasses}>
      {title && (
        <div className={headerClasses} {...headerProps}>
          {typeof title === 'string' ? (
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      
      <div className={bodyClasses} {...bodyProps}>
        {children}
      </div>
      
      {footer && (
        <div className={footerClasses} {...footerProps}>
          {footer}
        </div>
      )}
    </div>
  );
}