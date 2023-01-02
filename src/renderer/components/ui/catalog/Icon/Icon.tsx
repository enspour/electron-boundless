import React from "react";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;

interface SvgProps {
    icon: string;
    width: string;
    height: string;
    color?: ThemeColor;
    onClick?: ClickHandler;
}

const Icon = ({
    icon,
    width,
    height,
    color = "primary",
    onClick,
}: SvgProps) => {
    const handleClick: ClickHandler = (e) => {
        onClick?.call({}, e);
    };

    const iconStyle = {
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskImage: `url(${icon})`,
        maskImage: `url(${icon})`,
        backgroundColor: `var(--icon-${color})`,
        cursor: onClick ? "pointer" : "auto",
        height,
        width,
    };

    const wrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: ".3rem",
    };

    return (
        <div style={wrapperStyle} onClick={handleClick}>
            <div style={iconStyle} />
        </div>
    );
};

export default React.memo(Icon);
