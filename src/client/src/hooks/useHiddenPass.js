import { useState } from "react";

export const useBoleean = () => {
    const [boleean, setBoleean] = useState(false)

    const handleBoleean = (buttonId) => {
        setBoleean((prevStates) => ({
            ...prevStates,
            [buttonId]: !prevStates[buttonId],
        }))
    }

    return {
        boleean,
        handleBoleean
    }
}
