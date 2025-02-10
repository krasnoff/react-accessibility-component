import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

interface AccessibilityComponentProps {
    text?: string;
}

const AccessibilityComponent: React.FC<AccessibilityComponentProps> = ({ text }) => {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hostRef.current && hostRef.current.shadowRoot === null) {
            const shadowDom = hostRef.current?.attachShadow({ mode: 'open' });
            if (shadowDom) {
                const root = createRoot(shadowDom);
                root.render(shadowDomJsxElement);
            }
        }
    }, []);

    const shadowDomJsxElement = <div>Hello World</div>;

    return (
        <div role="region" aria-label="Sample Accessibility Component" ref={hostRef}></div>
    );
};

export default AccessibilityComponent;