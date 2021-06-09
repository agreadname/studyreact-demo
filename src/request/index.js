import axios from 'axios';
import React from 'react';
let serve=axios.create({timeout:15000})
// 请求拦截器
serve.interceptors.request.use((config)=>{
    console.log("===请求拦截",config)
    
    return config
})
// 响应拦截器
serve.interceptors.response.use((response)=>{
    console.log("===响应拦截",response)
    return response
})
React.Component.prototype.$axios=serve