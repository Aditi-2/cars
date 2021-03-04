import axios from "axios";

const get = async <T>(endpoint: string): Promise<T> => {
    return (await axios.get(`${process.env.REACT_APP_CARS}/api/${endpoint}`)).data;
};

export const getCars = async(): Promise<string[]> => {
    return get<string[]>('makes');
}

export const getCarModels = async(manufacturer: string): Promise<string[]> => {
    return get<string[]>(`models?make=${manufacturer}`)
}

export const getVehicles = async(manufacturer: string, carModel: string): Promise<string[]> => {
    return get<string[]>(`models?make=${manufacturer}&model=${carModel}`)
}