const apiUrl='http://localhost:3001'

export class Api {


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