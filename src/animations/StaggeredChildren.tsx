import React, { ReactNode, Children, cloneElement, isValidElement } from 'react';

interface StaggeredChildrenProps {
  children: ReactNode;
  delayBetween?: number;
  baseDelay?: number;
  className?: string;
  staggerDirection?: 'forward' | 'backward';
}

const StaggeredChildren = ({
  children,
  delayBetween = 100,
  baseDelay = 0,
  className = '',
  staggerDirection = 'forward'
}: StaggeredChildrenProps) => {
  const childArray = Children.toArray(children);
  const count = childArray.length;

  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        // Calculate delay based on stagger direction
        const staggerIndex = staggerDirection === 'forward' ? index : count - 1 - index;
        const delay = baseDelay + staggerIndex * delayBetween;

        return cloneElement(child, {
          ...child.props,
          delay: child.props.delay !== undefined ? child.props.delay : delay
        });
      })}
    </div>
  );
};

export default StaggeredChildren;
