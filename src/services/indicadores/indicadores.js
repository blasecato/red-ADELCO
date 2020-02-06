import Api from "../../common/api";

export async function getIndicadores() {
    let response = await Api.get('/indicadores')
    let payload = await response.json();
    return payload;
}