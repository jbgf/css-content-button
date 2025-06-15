import React from 'react';
import './css-content-button.css';

/**
 * Props for the CssContentButton component
 */
export interface CssContentButtonProps {
  /** The text content to display in the button (will be rendered via CSS content) */
  content: string;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class name */
  className?: string;
  /** Custom CSS variables for styling */
  style?: React.CSSProperties;
  /** Accessibility label (important since content is in CSS) */
  'aria-label'?: string;
}

/**
 * SEO-friendly button component that uses CSS content property
 * to display text without affecting keyword density
 * 
 * @example
 * ```tsx
 * <CssContentButton 
 *   content="Play Video" 
 *   variant="primary" 
 *   onClick={() => console.log('clicked')}
 *   aria-label="Play the video content"
 * />
 * ```
 */
export const CssContentButton: React.FC<CssContentButtonProps> = ({
  content,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  style,
  'aria-label': ariaLabel,
}) => {
  const cssVariables = {
    '--button-content': `"${content.replace(/"/g, '\\"')}"`,
    ...style,
  };

  const buttonClass = [
    'css-content-button',
    `css-content-button--${variant}`,
    `css-content-button--${size}`,
    disabled && 'css-content-button--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClass}
      style={cssVariables}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel || content}
      type="button"
    />
  );
};

export default CssContentButton;