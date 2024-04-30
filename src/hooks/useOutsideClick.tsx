import { useEffect, useRef } from "react";

type ClickHandler = () => void;

export function useOutsideClick(
    handler: ClickHandler,
    listenCapturing: boolean = true
): React.RefObject<HTMLDivElement> {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenCapturing);

        return () => {
            document.removeEventListener("click", handleClick, listenCapturing);
        };
    }, [handler, listenCapturing]);

    return ref;
}
