import { api } from "./api";


export async function getCord() {
    let res = await api.get("/products")
    return res
}