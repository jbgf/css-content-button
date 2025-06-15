import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CssContentButton } from './index';

describe('CssContentButton', () => {
  test('renders button with correct content via CSS', () => {
    render(<CssContentButton content="Play Video" />);

    // The button should be present
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Check if the CSS variable is set correctly
    expect(button).toHaveStyle('--button-content: "Play Video"');

    // Check default classes
    expect(button).toHaveClass('css-content-button');
    expect(button).toHaveClass('css-content-button--primary');
    expect(button).toHaveClass('css-content-button--medium');
  });

  test('applies correct variant classes', () => {
    const { rerender } = render(<CssContentButton content="Test" variant="secondary" />);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('css-content-button--secondary');

    rerender(<CssContentButton content="Test" variant="success" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('css-content-button--success');

    rerender(<CssContentButton content="Test" variant="danger" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('css-content-button--danger');
  });

  test('applies correct size classes', () => {
    const { rerender } = render(<CssContentButton content="Test" size="small" />);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('css-content-button--small');

    rerender(<CssContentButton content="Test" size="large" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('css-content-button--large');
  });

  test('handles disabled state correctly', () => {
    render(<CssContentButton content="Test" disabled />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('css-content-button--disabled');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<CssContentButton content="Click Me" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not trigger click when disabled', () => {
    const handleClick = jest.fn();
    render(<CssContentButton content="Click Me" onClick={handleClick} disabled />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies custom className and styles', () => {
    const customStyle: React.CSSProperties = { '--custom-var': 'test-value' } as React.CSSProperties;
    render(
      <CssContentButton
        content="Test"
        className="custom-class"
        style={customStyle}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveStyle('--custom-var: test-value');
  });

  test('sets aria-label correctly', () => {
    render(<CssContentButton content="Play" aria-label="Play the video" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Play the video');
  });

  test('uses content as aria-label when aria-label is not provided', () => {
    render(<CssContentButton content="Play Video" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Play Video');
  });

  test('escapes quotes in content properly', () => {
    render(<CssContentButton content='Say "Hello"' />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('--button-content: "Say \\"Hello\\""');
  });
}); 