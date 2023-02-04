import { FC, ReactNode, useState } from "react";

import FilledButton from "../FilledButton/FilledButton";

import { LoadingStatus } from "@global/types";

import { ThemeColor } from "@services/Theme.service";

interface AsyncFilledButtonProps {
    children: ReactNode;
    onClick: () => Promise<void>;
    color?: ThemeColor;
}

const AsyncFilledButton: FC<AsyncFilledButtonProps> = ({
    children,
    onClick,
    color,
}) => {
    const [state, setState] = useState<LoadingStatus>("idle");

    const click = async () => {
        setState("pending");

        await onClick();

        setState("done");
    };

    return (
        <FilledButton
            onClick={click}
            disabled={state === "pending"}
            color={color}
        >
            {state === "pending" ? (
                <div className="lds-hourglass"></div>
            ) : (
                children
            )}
        </FilledButton>
    );
};

export default AsyncFilledButton;
