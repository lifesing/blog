/*
 * @Author: anytao 
 * @Descrition: 用户模块 rest  api
 * @Created time: 2016-11-10 14:10:19 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-10 16:03:51
 */

'use strict';

import Base from './base.js';

export default class extends Base {


    /**
     *  add user
     */
    async postAction() {

        let data = this.post();
        let userID = await this.modelInstance.addUser(data, this.ip());
        return this.success({
            id: userID
        });

    }

}