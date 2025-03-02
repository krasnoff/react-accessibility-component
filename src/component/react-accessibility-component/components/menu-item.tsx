export interface MenuItemProps {
    title: string,
    ImageSvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    fill: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, ImageSvgComponent, fill }) => {
    return (
        <>
            <div><ImageSvgComponent width="25" height="25" fill={fill} /></div>
            <div style={{color: fill}}>{title}</div>
        </>
    );
};

export default MenuItem;