/*
 * @Author: anytao 
 * @Descrition: 用户模块 rest  api
 * @Created time: 2016-11-10 14:10:19 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-22 19:09:26
 */

'use strict';

import Base from './base.js';

export default class extends Base {


    /**
     * 用户列表
     */
    getAction() {

        let where = {};
        if (this.id) {
            where.id = this.id;
        }
        this.modelInstance.field('id,username,nickname,email,type,status,created_at').where(where);
        return super.getAction();
    }


    /**
     *  add user
     */
    async postAction() {

        //返回对象
        let response = {
            success: true,
            data: '',
            msg: ''
        };
        let result = {};
        let data = this.post();
        data.status = 1;
        data.type = 1;
        result = await this.modelInstance.addUser(data, this.ip());
        if (result.type == 'add') {
            response.msg = '新增成功';
            response.data = result.id;
        } else if (result.type == 'exist') {
            response.success = false;
            response.msg = '用户已存在';
        }
        return this.json(response);
    }

}