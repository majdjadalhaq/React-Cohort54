import { useDebugValue } from 'react';
import { useWindowSize } from './useWindowSize';

export function useScreenSize(label = 'Screen Size') {
    const { width } = useWindowSize(label);

    let size = 'small';
    if (width >= 1024) {
        size = 'large';
    } else if (width >= 768) {
        size = 'medium';
    }

    useDebugValue(`${label}: ${size} (${width}px)`);

    return size;
}
