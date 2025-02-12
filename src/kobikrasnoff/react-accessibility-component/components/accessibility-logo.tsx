import AccessibilityImage from '../assets/accessibility_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

interface AccessibilityLogoProps {
    width: string;
    height: string;
    fill: string;
    onOpenCloseComponent: () => void
}

const AccessibilityLogo = (props: AccessibilityLogoProps) => {
    return (<>
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
                <AccessibilityImage height={props.height} width={props.width} fill={props.fill} />
            </div>
        </div>
    </>);
} 

export default AccessibilityLogo;