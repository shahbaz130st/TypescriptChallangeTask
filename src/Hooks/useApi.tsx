import { useState } from "react";
import axios from "axios";
import _ from "lodash";


export const useApi = (): [isLoading: Boolean, data: any, error: string | undefined, apiCall: Function] => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [error, setError] = useState<string>();
    const apiCall = async (url: string) => {
        try {
            setIsLoading(true)
            const response =
                await axios.get(url);
            const { data } = response;
            setData(data);
            setIsLoading(false);
        } catch (err) {
            setError("Something went wrong");
        }
    }
    return [isLoading, data, error, apiCall];
};