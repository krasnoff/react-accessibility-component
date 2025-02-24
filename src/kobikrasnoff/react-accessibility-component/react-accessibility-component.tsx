import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './react-accessibility-component.module.scss';
import AccessibilityLogo from './components/accessibility-logo';

interface AccessibilityComponentProps {
    text?: string;
}

const fontSizeArr = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2];

const AccessibilityComponent: React.FC<AccessibilityComponentProps> = () => {
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
                } else if ((event as CustomEvent).detail.message === 'grayScale') {
                    document.body.classList.remove("contrasthigh");
                    document.body.classList.remove("contrastlow");
                    if ((event as CustomEvent).detail.value) {
                        document.body.classList.add("grayscale"); 
                    }  else {
                        document.body.classList.remove("grayscale"); 
                    }                 
                } else if ((event as CustomEvent).detail.message === 'contrast') {
                    document.body.classList.remove("contrasthigh");
                    document.body.classList.remove("contrastlow");
                    if ((event as CustomEvent).detail.value === 2) {
                        document.body.classList.add("contrasthigh");
                    }
                    if ((event as CustomEvent).detail.value === 0.5) {
                        document.body.classList.add("contrastlow");
                    }
                } else if ((event as CustomEvent).detail.message === 'fontSizeIndex') {
                    let component = document.getElementById('container-accessibility-wrapper');
                    
                    if (+(event as CustomEvent).detail.value === 5) {
                        document.body.style.removeProperty('zoom');
                        component?.style.removeProperty('transform');
                        component?.style.removeProperty('transform-origin');
                        component?.style.removeProperty('bottom');
                    } else {
                        document.body.style.zoom = fontSizeArr[+(event as CustomEvent).detail.value].toString();
                        if (component) {
                            component.style.transform = `scale(${1 / fontSizeArr[+(event as CustomEvent).detail.value]})`
                            component.style.transformOrigin = 'bottom left'
                            component.style.bottom = (60 * 1 / fontSizeArr[+(event as CustomEvent).detail.value]).toString() + 'px';
                        }
                        
                    }
                } else if ((event as CustomEvent).detail.message === 'brightBackground') {
                    if ((event as CustomEvent).detail.value === true) {
                        document.body.classList.add("bright-background");
                    } else {
                        document.body.classList.remove("bright-background");
                    }
                } else if ((event as CustomEvent).detail.message === 'readableFonts') {
                    if ((event as CustomEvent).detail.value === true) {
                        document.body.classList.add("readable-fonts");
                    } else {
                        document.body.classList.remove("readable-fonts");
                    }
                } else if ((event as CustomEvent).detail.message === 'markHyperlinks') {
                    if ((event as CustomEvent).detail.value === true) {
                        styleAllLinks();
                    } else {
                        resetLinkStyles();
                    }
                }
                
            }

            const styleAllLinks = () => {
                const links = document.querySelectorAll('a');
                links.forEach(link => {
                  link.style.textDecoration = 'underline';
                  link.style.color = 'blue';
                });
            }

            const resetLinkStyles = () => {
                const links = document.querySelectorAll('a');
                links.forEach(link => {
                  link.style.textDecoration = '';
                  link.style.color = '';
                });
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
            !componentOpenClose && styles.isWrapperOpen
        ].join(' ')} id="container-accessibility-wrapper"></div>
    );
};

export default AccessibilityComponent;