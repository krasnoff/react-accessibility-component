import AccessibilityImage from '../assets/accessibility_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

interface AccessibilityLogoProps {
    width: string;
    height: string;
    fill: string;
}

const AccessibilityLogo = (props: AccessibilityLogoProps) => {
    const handleClick = () => {
        // Create and dispatch custom event that will bubble up
        const customEvent = new CustomEvent('shadow-click', {
            bubbles: true,
            composed: true, // This allows the event to cross the shadow DOM boundary
            detail: {
                message: 'Clicked inside shadow DOM'
            }
        });
        dispatchEvent(customEvent);
    }
    
    return (<>
        <style>
            {`
                .container-accessibility-wrapper {
                    display: flex;
                    align-items: flex-end;
                }
            `}
        </style>
        <div className="container-accessibility-wrapper">
            <style>
                {`
                    .container-accessibility-logo {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        padding: 5px 5px 5px 5px;
                        padding-right: 12px;
                        background-color: #1b4f72;
                        border-top-right-radius: 50%;
                        border-bottom-right-radius: 50%;
                        max-height: 50px;
                    }

                    .container-accessibility-menu {
                        width: 200px;
                        height: 300px;
                        border: 1px solid #1b4f72;
                        background-color: white;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr); /* Creates 2 equal columns */
                        gap: 10px; /* Adds spacing between grid items */
                        padding: 10px;
                        box-sizing: border-box;
                    }

                    .grid-item {
                        border: 1px solid #1b4f72;
                    }
                `}
            </style>
            <div>
                <div className="container-accessibility-menu">
                <div className="grid-item">Item 1</div>
                <div className="grid-item">Item 2</div>
                <div className="grid-item">Item 3</div>
                <div className="grid-item">Item 4</div>
                <div className="grid-item">Item 5</div>
                <div className="grid-item">Item 6</div>
                <div className="grid-item">Item 7</div>
                <div className="grid-item">Item 8</div>
                </div>
            </div>
            <div className="container-accessibility-logo" onClick={() => handleClick()} title="Accessibility Component">
                <AccessibilityImage height={props.height} width={props.width} fill="white" />
            </div>
        </div>
    </>);
} 

export default AccessibilityLogo;