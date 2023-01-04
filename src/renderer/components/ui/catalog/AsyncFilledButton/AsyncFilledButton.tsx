import { ThemeColor } from "@services/Theme.service";
import { FC, ReactNode, useState } from "react";

import FilledButton from "../FilledButton/FilledButton";

import { LoadingStates } from "@constants";

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
    const [state, setState] = useState<LoadingStates>("idle");

    const click = async () => {
        setState("pending");

        await onClick();

        setState("done");
    };

    return (
        <FilledButton onClick={click} color={color}>
            {state === "pending" ? (
                <div className="lds-hourglass"></div>
            ) : (
                children
            )}
        </FilledButton>
    );
};

export default AsyncFilledButton;
