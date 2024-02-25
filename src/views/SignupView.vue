<script setup lang="ts">
    import { onMounted, ref, useModel } from 'vue';
    import {loginUrl} from "@/axios"
    import axios from 'axios';
    import router from '@/router';
    import { userModule } from '@/stores/userStore';

    const uesrStore=userModule()
    const {userInfo}=uesrStore
    const getUser=uesrStore.getUser

    const user_name=ref<string>('')
    const current_name=ref<string>('')
    const pass_word=ref<string>('')
    const user_email=ref<string>('')

    let error =ref<any>('')

    onMounted(() => {
        if(userInfo){
            router.push('/')
        }
    })


        const handleSubmit=async()=>{
        try{
            const formData=new FormData()
            formData.append('username',user_name.value)
            formData.append('password',pass_word.value)
            formData.append('name',current_name.value)
            formData.append('email',user_email.value)

            const headers={
                "Content-Type":'multipart/form-data; boundary=<calculated when request is sent>'
            }

            let response= await loginUrl.post('/register',formData,{headers})

            if(response.status===200){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                localStorage.setItem('user-info',JSON.stringify(response.data.user))
                getUser()
                error.value=''
                router.push('/')
            }


        }catch(e:any){
            if(axios.isCancel(e)){
                error.value=e.message
            }else{
                console.error("error",e.response.data.message.split('.')[0])
                error.value=e.response.data.message.split('.')[0]
            }
        }
    }

</script>
<template>
        <div>
            <form class="register" @submit.prevent="handleSubmit">

                <div class="alert alert-danger fs-4 text-center" style="width: 50%; height: 5rem;" role="alert" v-if="error">
                    {{ error }}
                </div>

                <p class="title">Sign Up</p>
                <RouterLink to="/" class="extra home">X</RouterLink>
                
                <label for="email">Email</label>
                <input
                type="email"
                placeholder="Enter your email "
                id="email"
                v-model="user_email"
                required
                />

                <label for="user">username</label>
                <input
                type="text"
                placeholder="Enter your password"
                id="user"
                v-model="user_name"
                required
                />
                
                <label for="name">name</label>
                <input
                type="text"
                placeholder="Enter your name"
                id="name"
                v-model="current_name"
                required
                />
                
                <label for="pass">password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                id="pass"
                v-model="pass_word"
                required
                />
                
                <button class="btn-login" >
                    Sign Up
                </button>
            <RouterLink :to="{name:'log_in',}" class="btn-signup">Log In</RouterLink>
            </form>
        </div>
</template>
