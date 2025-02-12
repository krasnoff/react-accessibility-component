import AccessibilityImage from '../assets/accessibility_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

import IncreaseTextSvg from '../assets/zoom_in_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import DecreaseTextSvg from '../assets/zoom_out_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import GrayScaleSvg from '../assets/mist_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import HighContrastSvg from '../assets/contrast_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import LowContrastSvg from '../assets/contrast_rtl_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import BrightBackgroundSvg from '../assets/brightness_empty_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import LinksSvg from '../assets/link_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import ReadableFontsSvg from '../assets/text_format_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

import MenuItem from './menu-item';
import { useState } from 'react';

interface AccessibilityLogoProps {
    width: string;
    height: string;
    fill: string;
}

const AccessibilityLogo = (props: AccessibilityLogoProps) => {
    const [increaseText, setIncreasedState] = useState<boolean>(false);
    const [fontSize, setFontSize] = useState<number>(0);
    const [grayScale, setGrayScale] = useState<boolean>(false);
    const [highContrast, setHighContrast] = useState<boolean>(false);
    const [lowContrast, setLowContrast] = useState<boolean>(false);
    const [brightBackground, setBrightBackground] = useState<boolean>(false);
    const [links, setLinks] = useState<boolean>(false);
    const [readableFonts, setReadableFonts] = useState<boolean>(false);

    const map = {
        increaseText: setIncreasedState,
        fontSize: setFontSize,
        grayScale: setGrayScale,
        highContrast: setHighContrast,
        lowContrast: setLowContrast,
        brightBackground: setBrightBackground,
        links: setLinks,
        readableFonts: setReadableFonts
    }

    const dispatchExternalEvent = (eventName: string, details: any) => {
        // Create and dispatch custom event that will bubble up
        const customEvent = new CustomEvent(eventName, {
            bubbles: true,
            composed: true, // This allows the event to cross the shadow DOM boundary
            detail: details
        });
        dispatchEvent(customEvent);
    }
    
    const handleClick = () => {
        dispatchExternalEvent('shadow-click', {
            message: 'Clicked inside shadow DOM'
        });
    }

    const handleMenuClick = () => {
        setIncreasedState(increaseText => !increaseText);
    }
    
    return (<>
        <style>
            {`
                .container-accessibility-wrapper {
                    display: flex;
                    align-items: flex-end;
                    font-family: Arial, Helvetica, sans-serif
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
                        font-size: 10px;
                        box-sizing: border-box;
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                    }

                    .grid-item-active {
                        background-color: #1b4f72;
                    }
                `}
            </style>
            <div>
                <div className="container-accessibility-menu">
                    <div className={['grid-item', increaseText && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick()}><MenuItem title="Increase Text" ImageSvgComponent={IncreaseTextSvg} fill={increaseText ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Decrease Text" ImageSvgComponent={DecreaseTextSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Gray Scale" ImageSvgComponent={GrayScaleSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="High Contrast" ImageSvgComponent={HighContrastSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Low Contrast" ImageSvgComponent={LowContrastSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Bright Bg" ImageSvgComponent={BrightBackgroundSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Links" ImageSvgComponent={LinksSvg} fill={'#1b4f72'} /></div>
                    <div className="grid-item"><MenuItem title="Readable Fonts" ImageSvgComponent={ReadableFontsSvg} fill={'#1b4f72'} /></div>
                </div>
            </div>
            <div className="container-accessibility-logo" onClick={() => handleClick()} title="Accessibility Component">
                <AccessibilityImage height={props.height} width={props.width} fill="white" />
            </div>
        </div>
    </>);
} 

export default AccessibilityLogo;