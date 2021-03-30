import Vue from 'vue';
import Router from 'vue-router';

import Status from '../statistics/Status'
import Chart from '../statistics/Chart'
import DateTime from '../statistics/DateTime'
import DropBox from '../statistics/DropBox'

Vue.use(Router) //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
            path:'/',
            name : Status,
            component : Status
        },
        {
            path:'/chart',
            name : Chart,
            component : Chart
        },
        {
            path:'/DateTime',
            name : DateTime,
            component : DateTime
        },
        {
            path:'/DropBox',
            name : DropBox,
            component : DropBox
        }
    ]
})