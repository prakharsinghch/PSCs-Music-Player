import { useState } from 'react';
import { useEffect } from 'react';

function useDebounce<T>(value: T, delay?: number): T{
    const [debounceValue, setdebounceValue] = useState<T>(value);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setdebounceValue(value)
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debounceValue;
};

export default useDebounce;