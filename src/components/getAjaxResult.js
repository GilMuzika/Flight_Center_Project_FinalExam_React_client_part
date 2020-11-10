import axios from 'axios';

const getAjaxResult = (url, data, headers) => {

    return new Promise((resolve, reject) => {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(url, data, {headers})
        .then(res=>  {
            resolve(res);
        })
        .catch(err => {
            console.log('caught in  getAjaxResult:');
            console.log(err);
            alert(`caught in  getAjaxResult: \n${JSON.stringify(err)}`);
            reject(err);
        });
    });

}

export default getAjaxResult;