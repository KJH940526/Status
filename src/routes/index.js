import Vue from 'vue';
import Router from 'vue-router';

import Status from '../statistics/Status'

Vue.use(Router) //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
            path:'/',
            name : Status,
            component : Status
        }
    ]
})