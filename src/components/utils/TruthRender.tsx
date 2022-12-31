import React from "react";

interface TruthRenderProps {
    conditional: boolean;
    children: React.ReactNode;
}

const TruthRender = ({ conditional, children }: TruthRenderProps) => {
    if (!conditional) {
        return;
    }

    return <>{children}</>;
};

export default React.memo(TruthRender);
