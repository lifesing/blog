/*
 * @Author: anytao 
 * @Descrition: user 业务逻辑层
 * @Created time: 2016-11-10 14:32:13 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-10 16:16:07
 */

'use strict';

import Base from './base.js';
import {PasswordHash} from 'phpass';

export default class extends Base {


    getEncryptPassword(password) {

        let passwordHash = new PasswordHash();
        return passwordHash.hashPassword(password);
    }

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
}