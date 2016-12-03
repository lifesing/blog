/*
 * @Author: anytao 
 * @Description: post 业务逻辑
 * @Date: 2016-12-03 19:04:15 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-12-03 19:53:34
 */

'use strict';

import Base from './base.js';

export default class extends Base {
    init(...args) {
        super.init(...args);
        this.relation={
           tag:think.model.MANY_TO_MANY,
           category:think.model.MANY_TO_MANY
        };
    }

    /**
     * 新增文章
     */
    addPost(data) {
        let create_at = think.datetime();
        data = Object.assign({
            type: 0,
            status: 0,
            create_at: create_at,
            update_at: create_at,
            is_public: 1
        }, data);

        return this.where({
            pathname: data.pathname,
            _logic: 'OR'
        }).thenAdd(data);
    }
}