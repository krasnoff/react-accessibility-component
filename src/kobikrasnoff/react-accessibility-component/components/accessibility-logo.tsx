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
    const [decreaseText, setDecreaseTextState] = useState<number>(0);
    const [grayScale, setGrayScale] = useState<boolean>(false);
    const [highContrast, setHighContrast] = useState<boolean>(false);
    const [lowContrast, setLowContrast] = useState<boolean>(false);
    const [brightBackground, setBrightBackground] = useState<boolean>(false);
    const [links, setLinks] = useState<boolean>(false);
    const [readableFonts, setReadableFonts] = useState<boolean>(false);

    const map: { [key in 'increaseText' | 'decreaseText' | 'grayScale' | 'highContrast' | 'lowContrast' | 'brightBackground' | 'links' | 'readableFonts']: (value: any) => void } = {
        increaseText: setIncreasedState,
        decreaseText: setDecreaseTextState,
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
    
    const handleClick = (message: string) => {
        dispatchExternalEvent('shadow-click', {
            message: message
        });
    }

    const handleMenuClick = (arg: 'increaseText' | 'decreaseText' | 'grayScale' | 'highContrast' | 'lowContrast' | 'brightBackground' | 'links' | 'readableFonts') => {
        map[arg]((state: any) => !state);
        handleClick(arg);
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
                    <div className={['grid-item', increaseText && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('increaseText')}><MenuItem title="Increase Text" ImageSvgComponent={IncreaseTextSvg} fill={increaseText ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', decreaseText && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('decreaseText')}><MenuItem title="Decrease Text" ImageSvgComponent={DecreaseTextSvg} fill={decreaseText ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', grayScale && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('grayScale')}><MenuItem title="Gray Scale" ImageSvgComponent={GrayScaleSvg} fill={grayScale ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', highContrast && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('highContrast')}><MenuItem title="High Contrast" ImageSvgComponent={HighContrastSvg} fill={highContrast ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', lowContrast && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('lowContrast')}><MenuItem title="Low Contrast" ImageSvgComponent={LowContrastSvg} fill={lowContrast ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', brightBackground && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('brightBackground')}><MenuItem title="Bright Bg" ImageSvgComponent={BrightBackgroundSvg} fill={brightBackground ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', links && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('links')}><MenuItem title="Links" ImageSvgComponent={LinksSvg} fill={links ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', readableFonts && 'grid-item-active'].join(' ')} onClick={() => handleMenuClick('readableFonts')}><MenuItem title="Readable Fonts" ImageSvgComponent={ReadableFontsSvg} fill={readableFonts ? '#FFFFFF' : '#1b4f72'} /></div>
                </div>
            </div>
            <div className="container-accessibility-logo" onClick={() => handleClick('OpenCloseComponent')} title="Accessibility Component">
                <AccessibilityImage height={props.height} width={props.width} fill="white" />
            </div>
        </div>
    </>);
} 

export default AccessibilityLogo;