/*
 * @Author: anytao 
 * @Description:  文章管理api
 * @Date: 2016-12-03 18:57:52 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-12-03 19:28:44
 */

'use strict';

import Base from './base.js';

export default class extends Base {

    /**
     * 文章列表
     */
    getAction() {


    }

    /**
     * add post
     */
    async postAction() {

        let response = {
            success: false,
            data: '',
            msg: ''
        };

        let result={};

        let data = this.post();

        let post = await this.modelInstance.where({
            pathname: data.pathname
        }).select();

        if (post.length > 0) {
            return this.fail('PATHNAME_EXIST');
        }

        result = await this.modelInstance.addPost(data);
    }
}