import { defineStore } from "pinia";

export const userModule=defineStore("userModule",{
    state:()=>({
        userInfo:null as  null | { [key: string]: string }
    }),
    actions:{
        getUser(){
            this.userInfo=JSON.parse(localStorage.getItem('user-info')!)
        },
        deleteUser(){
            localStorage.removeItem('token')
            localStorage.removeItem('user-info')
            this.userInfo=null
        }
    }
})