import React from "react";

import { IntersectionManager } from "./src/providers/IntersectionProvider";

export const wrapRootElement = ({ element }) => {
    return (
    <IntersectionManager threshold={[0,1]}>
        {element}
    </IntersectionManager>      
    );
}