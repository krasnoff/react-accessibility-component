import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './react-accessibility-component.module.scss';
import AccessibilityLogo from './components/accessibility-logo';

interface AccessibilityComponentProps {
    text?: string;
}

const AccessibilityComponent: React.FC<AccessibilityComponentProps> = ({ text }) => {
    const hostRef = useRef<HTMLDivElement>(null);
    const [componentOpenClose, setcomponentOpenClose] = useState<boolean>(true);

    useEffect(() => {
        let openCloseComponentHandler: EventListenerOrEventListenerObject;

        if (hostRef.current && hostRef.current.shadowRoot === null) {
            const shadowDom = hostRef.current?.attachShadow({ mode: 'open' });
            if (shadowDom) {
                const root = createRoot(shadowDom);
                root.render(shadowDomJsxElement);
            }

            openCloseComponentHandler = (event: Event) => {
                // TODO - Add your logic here
                if ((event as CustomEvent).detail.message === 'OpenCloseComponent') {
                    setcomponentOpenClose(componentOpenClose => !componentOpenClose);
                }
                
            }

            window.addEventListener('shadow-click', openCloseComponentHandler);
        }
    }, []);

    

    const shadowDomJsxElement = 
    <div>
        <AccessibilityLogo width='40px' height='40px' fill='blue' />
    </div>;

    return (
        <div role="region" aria-label="Sample Accessibility Component" ref={hostRef} className={[
            styles.wrapper, 
            componentOpenClose && styles.isWrapperClose,
            !componentOpenClose && styles.isWrapperOpen,
        ].join(' ')}></div>
    );
};

export default AccessibilityComponent;