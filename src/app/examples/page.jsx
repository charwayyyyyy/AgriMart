/**
 * @component ExamplesPage
 * @description A page that demonstrates the use of common components
 */
'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Card from '@/components/common/Card';

export default function ExamplesPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Component Examples</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button Component</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text Button</Button>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button fullWidth className="mt-4">Full Width Button</Button>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Input Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="example-name"
            name="example-name"
            label="Name"
            placeholder="Enter your name"
          />
          
          <Input
            id="example-email"
            name="example-email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            helperText="We'll never share your email with anyone else."
          />
          
          <Input
            id="example-password"
            name="example-password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          
          <Input
            id="example-error"
            name="example-error"
            label="With Error"
            placeholder="Enter something"
            value="Invalid value"
            error="This field has an error"
          />
          
          <Input
            id="example-disabled"
            name="example-disabled"
            label="Disabled Input"
            placeholder="You can't edit this"
            disabled
          />
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p>Basic card with no title or footer</p>
          </Card>
          
          <Card title="Card Title">
            <p>Card with a title but no footer</p>
          </Card>
          
          <Card 
            title="Card with Footer"
            footer={<Button variant="text" size="sm">View More</Button>}
          >
            <p>This card has both a title and a footer</p>
          </Card>
          
          <Card 
            title="Hoverable Card"
            hoverable
            footer={<div className="flex justify-end"><Button size="sm">Action</Button></div>}
          >
            <p>This card has a hover effect. Try hovering over it!</p>
          </Card>
          
          <Card bordered={false} className="bg-gray-100">
            <p>This card has no border and a custom background color</p>
          </Card>
          
          <Card 
            title={<div className="flex justify-between items-center"><span>Custom Title</span><Button variant="text" size="sm">Edit</Button></div>}
            footer="Simple text footer"
          >
            <p>This card has a custom title with a button</p>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Form Example</h2>
        <Card title="Contact Us">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-green-600 mb-2">Thank you for your message!</h3>
              <p className="mb-4">We'll get back to you as soon as possible.</p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                
                <div className="w-full">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium ${errors.message ? 'text-red-700' : 'text-gray-700'}`}
                  >
                    Message<span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-green-500 focus:ring-green-500'}`}
                      placeholder="Enter your message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}