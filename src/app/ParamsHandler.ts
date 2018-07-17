import {PancakeForm} from './models/pancakeForm';

export default class ParamsHandler {
  constructor() {
  }

  getParams() {
    const searchString = window.location.search.substr(1);
    const params = {};
    const arr = searchString.split('&');
    arr.forEach(elem => {
      const elems = elem.split('=');
      params[elems[0]] = elems[1];
    });
    return params;
  }

  pushParams(pancake: PancakeForm, step: number) {
    console.log(window.location.host, window.location.pathname);
    let params = `${window.location.pathname}?step=${step}`;
    Object.keys(pancake).forEach(key => {
      params += `&${key}=${pancake[key]}`;
    })
    window.history.pushState('', '', params);
  }


}
