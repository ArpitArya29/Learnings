import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    // UseEffect to make fetch request
    useEffect(() => {
        const fetchData = async () => {
            setState(prev => ({ ...prev, loading: true }));

            try {
                const res = await fetch(url);
                const data = await res.json();
                setState({ data, loading: false, error: null });
            } catch (error) {
                setState({ data: null, loading: false, error: (error as Error).message });
            }
        };

        fetchData();
    }, [url]);

    return state;
}