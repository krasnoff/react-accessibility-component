import AccessibilityImage from '../assets/accessibility_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

import IncreaseTextSvg from '../assets/zoom_in_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import DecreaseTextSvg from '../assets/zoom_out_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import GrayScaleSvg from '../assets/mist_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import HighContrastSvg from '../assets/contrast_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import LowContrastSvg from '../assets/contrast_rtl_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import BrightBackgroundSvg from '../assets/brightness_empty_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import LinksSvg from '../assets/link_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import ReadableFontsSvg from '../assets/text_format_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import HeadersSvg from '../assets/format_h1_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';
import ListSvg from '../assets/list_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?react';

import MenuItem from './menu-item';
import { useEffect, useState } from 'react';
import { FontSizeDirection } from '../enums/font-size-direction.enum';
interface AccessibilityLogoProps {
    width: string;
    height: string;
    fill: string;
}

const AccessibilityLogo = (props: AccessibilityLogoProps) => {
    const [increaseText, setIncreasedState] = useState<boolean>(false);
    const [decreaseText, setDecreaseTextState] = useState<boolean>(false);
    const [fontSizeIndex, setFontSizeIndex] = useState<number>(5);
    const [grayScale, setGrayScale] = useState<boolean>(false);
    const [contrast, setContrast] = useState<1 | 0.5 | 2>(1);
    const [brightBackground, setBrightBackground] = useState<boolean>(false);
    const [links, setLinks] = useState<boolean>(false);
    const [readableFonts, setReadableFonts] = useState<boolean>(false);
    const [listsMark, setListsMark] = useState<boolean>(false);
    const [titlesMark, setTitlesMark] = useState<boolean>(false);

    const fontSizeArr = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.4, 1.6, 1.8, 2];

    const dispatchExternalEvent = (eventName: string, details: any) => {
        // Create and dispatch custom event that will bubble up
        const customEvent = new CustomEvent(eventName, {
            bubbles: true,
            composed: true, // This allows the event to cross the shadow DOM boundary
            detail: details
        });
        dispatchEvent(customEvent);
    }
    
    const handleClick = (message: string, value?: any) => {
        dispatchExternalEvent('shadow-click', {
            message: message,
            value: value
        });
    }

    //#region grayscale
    
    const handleGrayScaleMenuClick = () => {
        setContrast(1);
        setGrayScale((grayScale) => !grayScale);
        
    }

    useEffect(() => {
        handleClick('grayScale', grayScale);
    }, [grayScale]);

    //#endregion

    //#region contrast

    const handleContrastClick = (value: 1 | 0.5 | 2) => {
        setGrayScale(false);
        if (contrast === 2 && value === 2 || contrast === 0.5 && value === 0.5) {
            setContrast(1);
        } else {
            setContrast(value);
        }
    }

    useEffect(() => {
        handleClick('contrast', contrast);
    }, [contrast]);

    //#endregion
    
    //#region fontSize

    const handleFontSizeClick = (dir: FontSizeDirection) => {
        let index = fontSizeIndex;
        if (dir === FontSizeDirection.DECREASE) {
            index = fontSizeIndex - 1 >= 0 ? fontSizeIndex - 1 : 0;
        } else if (dir === FontSizeDirection.INCREASE) {
            index = fontSizeIndex + 1 < fontSizeArr.length ? fontSizeIndex + 1 : fontSizeArr.length - 1;
        }

        setDecreaseTextState(index < 5);
        setIncreasedState(index > 5);
        setFontSizeIndex(index)
    };

    useEffect(() => {
        handleClick('fontSizeIndex', fontSizeIndex);
    }, [fontSizeIndex]);

    //#endregion 
    
    //#region white background

    const handleWhiteBackgroundClick = () => {
        setBrightBackground((brightBackground) => !brightBackground);
    }

    useEffect(() => {
        handleClick('brightBackground', brightBackground);
    }, [brightBackground]);

    //#endregion
    
    //#region readable fonts
    
    const handleReadableFontClick = () => {
        setReadableFonts((readableFonts) => !readableFonts);
    }

    useEffect(() => {
        handleClick('readableFonts', readableFonts);
    }, [readableFonts]);

    //#endregion

    //#region mark-hyperlinks

    const handleMarkHyperlinkClick = () => {
        setLinks((links) => !links);
    }

    useEffect(() => {
        handleClick('markHyperlinks', links);
    }, [links]);

    //#endregion
    
    //#region handle lists mark click

    const handleMarkListsClick = () => {
        setListsMark(listsMark => !listsMark);
    }

    useEffect(() => {
        handleClick('listsMark', listsMark);
    }, [listsMark]);    

    //#endregion

    //#region handle lists mark click

    const handleMarkTitlesClick = () => {
        setTitlesMark(titlesMark => !titlesMark);
    }

    useEffect(() => {
        handleClick('titlesMark', titlesMark);
    }, [titlesMark]);    

    //#endregion
    
    return (<>
        <style>
            {`
                .container-accessibility-wrapper {
                    display: flex;
                    align-items: flex-end;
                    font-family: Arial, Helvetica, sans-serif;
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
                    <div className={['grid-item', titlesMark && 'grid-item-active'].join(' ')} onClick={() => handleMarkTitlesClick()}><MenuItem title="Titles" ImageSvgComponent={HeadersSvg} fill={titlesMark ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', listsMark && 'grid-item-active'].join(' ')} onClick={() => handleMarkListsClick()}><MenuItem title="Lists" ImageSvgComponent={ListSvg} fill={listsMark ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', increaseText && 'grid-item-active'].join(' ')} onClick={() => handleFontSizeClick(FontSizeDirection.INCREASE)}><MenuItem title="Zoom In" ImageSvgComponent={IncreaseTextSvg} fill={increaseText ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', decreaseText && 'grid-item-active'].join(' ')} onClick={() => handleFontSizeClick(FontSizeDirection.DECREASE)}><MenuItem title="Zoom Out" ImageSvgComponent={DecreaseTextSvg} fill={decreaseText ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', grayScale && 'grid-item-active'].join(' ')} onClick={() => handleGrayScaleMenuClick()}><MenuItem title="Gray Scale" ImageSvgComponent={GrayScaleSvg} fill={grayScale ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', contrast === 2 && 'grid-item-active'].join(' ')} onClick={() => handleContrastClick(2)}><MenuItem title="High Contrast" ImageSvgComponent={HighContrastSvg} fill={contrast === 2 ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', contrast === 0.5 && 'grid-item-active'].join(' ')} onClick={() => handleContrastClick(0.5)}><MenuItem title="Low Contrast" ImageSvgComponent={LowContrastSvg} fill={contrast === 0.5 ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', brightBackground && 'grid-item-active'].join(' ')} onClick={() => handleWhiteBackgroundClick()}><MenuItem title="Bright Bg" ImageSvgComponent={BrightBackgroundSvg} fill={brightBackground ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', links && 'grid-item-active'].join(' ')} onClick={() => handleMarkHyperlinkClick()}><MenuItem title="Links" ImageSvgComponent={LinksSvg} fill={links ? '#FFFFFF' : '#1b4f72'} /></div>
                    <div className={['grid-item', readableFonts && 'grid-item-active'].join(' ')} onClick={() => handleReadableFontClick()}><MenuItem title="Readable Fonts" ImageSvgComponent={ReadableFontsSvg} fill={readableFonts ? '#FFFFFF' : '#1b4f72'} /></div>
                </div>
            </div>
            <div className="container-accessibility-logo" onClick={() => handleClick('OpenCloseComponent')} title="Accessibility Component">
                <AccessibilityImage height={props.height} width={props.width} fill="white" />
            </div>
        </div>
    </>);
} 

export default AccessibilityLogo;