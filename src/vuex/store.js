import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const state = {
    login_user: null,
    users: [
        {
            name: "admin",
            real_name: "张三",
            sex: "女",
            age: 18
        },
        {
            name: "lisi",
            real_name: "李四",
            sex: "男",
            age: 19
        }
    ]
};

const mutations = {
    setLoginUser(state, data) {
        state.login_user = data;
    },
};

const actions = {
    login(context, params) {
        //没有数据库，简单自行判断下账号密码，也不进行密码加密，返回promise
        return new Promise((resolve, reject) => {
            if (params.name == 'admin' && params.password == 'admin') {
                context.commit('setLoginUser', _.find(state.users, (user) => { return user.name == params.name; }));
                return resolve();
            } else {
                return reject();
            }
        });
    }
};

export default new Vuex.Store({
    state, mutations, actions,
});
