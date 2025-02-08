import React from 'react';

interface AccessibilityComponentProps {
    text?: string;
}

const AccessibilityComponent: React.FC<AccessibilityComponentProps> = ({ text }) => {
    return (
        <div role="region" aria-label="Sample Accessibility Component">
            <p>React accessibility component</p>
        </div>
    );
};

export default AccessibilityComponent;