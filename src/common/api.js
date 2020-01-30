//api es la configuracion fecht de resivir servicios del backend

//url del servidor que nutre los servicios al frontend
const apiUrl='http://localhost:3001'

export class Api {

//metodo post registro de datos
    post(url, data, header) {
      let dataBody = JSON.stringify(data);
  
      return fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: (header ? header : {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }),
        body: dataBody
      })
    }
  //metodo put actualizacion de datos
    put(url, data, header) {
      let isFormData = data instanceof FormData;
  
      return fetch(`${apiUrl}${url}`, {
        method: 'PUT',
        headers: (header ? header :
          {
            'Accept': isFormData ? '' : 'application/json',
            'Content-type': isFormData ? '' : 'application/json',
          }
        ),
        body: isFormData ? data : JSON.stringify(data)
      })
    }
  
  //metodo get consulta de datos
    get(url, params) {
      url = new URL(`${apiUrl}${url}`);
      if (params)
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url, {
        method: 'GET',
        headers: {}
      });
    }
  }
  
  export default new Api();