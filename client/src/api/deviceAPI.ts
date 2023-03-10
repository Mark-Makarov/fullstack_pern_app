import {$authHost, $host} from "./http";
import jwt_decode from "jwt-decode";

export const createType = async (type: string) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

interface CreateBrandParams {
    name: string
}

export const createBrand = async (brand: CreateBrandParams) => {
    const {data} = await $authHost.post('api/brand', brand)
    console.log(brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device: object) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

type FetchDeviceParams = {
    typeId: string,
    brandId: string,
    page: string,
    limit: number
}

export const fetchDevices = async ({typeId, brandId, page, limit} : FetchDeviceParams) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id: string | undefined) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}