import React from "react";

import { IconColors, ThemeColor } from "@services/Theme.service";

type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;

interface IconProps {
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
}: IconProps) => {
    const handleClick: ClickHandler = (e) => {
        onClick?.call({}, e);
    };

    const iconStyle = {
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskImage: `url(${icon})`,
        maskImage: `url(${icon})`,
        backgroundColor: IconColors[color],
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
