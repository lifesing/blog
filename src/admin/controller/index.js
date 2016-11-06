'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    /**
     * 登录页面
     */
    loginAction() {
        return this.display();
    }

    /**
     * 注销登录
     */
    logoutAction() {
        return this.redirect("/login");
    }
}