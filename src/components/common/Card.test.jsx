import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders children content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders title when provided as string', () => {
    render(
      <Card title="Test Title">
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Title').tagName).toBe('H3');
  });

  test('renders title when provided as element', () => {
    render(
      <Card title={<span data-testid="custom-title">Custom Title</span>}>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  test('renders footer when provided', () => {
    render(
      <Card footer={<button>Test Button</button>}>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  test('applies border class when bordered is true', () => {
    render(<Card bordered>Test content</Card>);
    expect(screen.getByText('Test content').parentElement.parentElement).toHaveClass('border');
    expect(screen.getByText('Test content').parentElement.parentElement).toHaveClass('border-gray-200');
  });

  test('does not apply border class when bordered is false', () => {
    render(<Card bordered={false}>Test content</Card>);
    expect(screen.getByText('Test content').parentElement.parentElement).not.toHaveClass('border');
    expect(screen.getByText('Test content').parentElement.parentElement).not.toHaveClass('border-gray-200');
  });

  test('applies hover class when hoverable is true', () => {
    render(<Card hoverable>Test content</Card>);
    expect(screen.getByText('Test content').parentElement.parentElement).toHaveClass('hover:shadow-lg');
  });

  test('does not apply hover class when hoverable is false', () => {
    render(<Card hoverable={false}>Test content</Card>);
    expect(screen.getByText('Test content').parentElement.parentElement).not.toHaveClass('hover:shadow-lg');
  });

  test('applies custom className', () => {
    render(<Card className="custom-class">Test content</Card>);
    expect(screen.getByText('Test content').parentElement.parentElement).toHaveClass('custom-class');
  });

  test('passes headerProps to header element', () => {
    render(
      <Card 
        title="Test Title" 
        headerProps={{ 'data-testid': 'header-element' }}
      >
        Test content
      </Card>
    );
    expect(screen.getByTestId('header-element')).toBeInTheDocument();
  });

  test('passes bodyProps to body element', () => {
    render(
      <Card bodyProps={{ 'data-testid': 'body-element' }}>
        Test content
      </Card>
    );
    expect(screen.getByTestId('body-element')).toBeInTheDocument();
  });

  test('passes footerProps to footer element', () => {
    render(
      <Card 
        footer={<span>Footer content</span>}
        footerProps={{ 'data-testid': 'footer-element' }}
      >
        Test content
      </Card>
    );
    expect(screen.getByTestId('footer-element')).toBeInTheDocument();
  });
});