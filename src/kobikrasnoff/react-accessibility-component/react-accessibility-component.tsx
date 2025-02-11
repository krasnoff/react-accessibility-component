import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './react-accessibility-component.module.scss';
import accessibilityImage from './assets/accessibility_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';

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

    const shadowDomJsxElement = 
    <div>
        <style>
            {`
                .container {
                    border: 1px solid #ccc;
                    cursor: pointer;
                    display: flex;
                }
                .container img {
                    width: 24px;
                    height: 24px;
                }
            `}
        </style>
        <div className="container">
            <img src={accessibilityImage} alt="Accessibility icon" />
        </div>
    </div>;

    return (
        <div role="region" aria-label="Sample Accessibility Component" ref={hostRef} className={styles.wrapper}></div>
    );
};

export default AccessibilityComponent;