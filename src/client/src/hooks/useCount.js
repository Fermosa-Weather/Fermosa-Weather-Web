import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCount = (time, route) => {

    const navigate = useNavigate();
    //RECIBE TIEMPO EN SEGUNDOS
    const [countdown, setCountdown] = useState(time);

    useEffect(() => {

        const countdownTimer = setTimeout(() => {

            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else if (route) {
                navigate(route);
            }
        }, 1000);

        return () => {
            clearTimeout(countdownTimer);
        };

    }, [countdown, navigate]);

    return countdown;
};
