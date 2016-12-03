/*
 * @Author: anytao 
 * @Description: 文章管理 视图层
 * @Date: 2016-12-03 19:31:50 
 * @Last Modified by: anytao
 * @Last Modified time: 2016-12-03 19:35:33
 */

'use strict';

import Base from './base.js';

export default class extends Base {

    /**
     * 文章管理 列表页面
     */
    listAction() {
        return this.display();
    }
    
    /***
     * 文章管理 编辑页面
     */
    editAction(){
         return  this.display();
    }
}