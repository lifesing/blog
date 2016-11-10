/*
 * @Author: anytao 
 * @Descrition: base  rest controller
 * @Created time: 2016-11-10 14:15:20 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-10 16:04:05
 */

export default class extends think.controller.rest {

    constructor(http) {
        super(http);
        this._method = "method";
    }
}