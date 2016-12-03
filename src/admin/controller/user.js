/*
 * @Author: anytao 
 * @Description: 用户管理 视图层 
 * @Date: 2016-11-20 09:51:22 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-11-23 11:47:48
 */

'use strict';

import Base from './base.js';

export default class extends Base {

    /**
     * 用户列表页面
     * @return {Promise} []
     */
    listAction() {
        //auto render template file index_index.html
        return this.display();
    }

    /**
     * 用户编辑页面
     */
    editAction() {
        let id = this.get('id');
        if (!id) {
            id = 0;
        }
        this.assign('id',id);
        return this.display();
    }

}