/*
 * @Author: anytao 
 * @Descrition: user 业务逻辑层
 * @Created time: 2016-11-10 14:32:13 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-23 13:50:24
 */

'use strict';

import Base from './base.js';
import {
    PasswordHash
} from 'phpass';

export default class extends Base {


    getEncryptPassword(password) {

        let passwordHash = new PasswordHash();
        return passwordHash.hashPassword(password);
    }

    /***
     * 新增用户
     */
    addUser(data, ip) {

        let created_at = think.datetime();
        let encryptPassword = this.getEncryptPassword(data.password);

        return this.where({
            username: data.username,
            email: data.email,
            _logic: 'OR'
        }).thenAdd({
            username: data.username,
            nickname: data.nickname,
            email: data.email,
            password: encryptPassword,
            image: data.image,
            website: data.website,
            type: data.type,
            status: data.status,
            created_at: created_at,
            created_ip: ip,
            created_by: 1
        });
    }

    /**
     * 更新用户信息
     */
    async saveUser(data, ip) {

        let user = await this.where({
            id: data.id
        }).find();

        if (think.isEmpty(user)) {
            return Promise.reject(new Error('用户不存在'));
        }

        let password = '';
        if (data.password) {
            password = this.getEncryptPassword(data.password);
        }


    }
}