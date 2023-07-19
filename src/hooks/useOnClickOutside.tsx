/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    inside: RefObject<T>,
    handler: (event: AnyEvent) => void,
    outside?: RefObject<T>,
) {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const element = inside?.current;
            const outElement = outside?.current;
            if (
                !element ||
                element.contains(event.target as Node) ||
                (outElement && outElement.contains(event.target as Node))
            ) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [inside, handler]);
}

export default useOnClickOutside;
