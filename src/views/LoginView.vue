<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { onMounted, ref } from 'vue';   
    import axios from 'axios'; 
    import {loginUrl} from "@/axios" 
    import { userModule } from '@/stores/userStore';

    const uesrStore=userModule()
    const {userInfo}=uesrStore
    const getUser=uesrStore.getUser

    const router=useRouter()
    const user_name=ref<string>('')
    const pass_word=ref<string>()
    let error=ref<string>('')

    onMounted(()=>{
        if(userInfo){
            router.push('/')
        }
    })

   

    const handleSubmit=async()=>{
        try{
            let response=await loginUrl.post('/login',{
                username:user_name.value,
                password:pass_word.value
            })
            if(response.status===200){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                localStorage.setItem('user-info',JSON.stringify(response.data.user))
                getUser()
                error.value=''
                router.push('/')
            }

        }catch(e:any){
            if(axios.isCancel(e)){
                console.error('request error',e.message)
            }else{
                console.error("error",e.response.data.message.split('.')[0])
                error.value=e.response.data.message.split('.')[0]

            }
        }
    }
</script>
<template>
        <div>
            <form class="log-in" @submit.prevent="handleSubmit">
                <div class="alert alert-danger fs-4 text-center mt-4" style="width: 70%; height: 5rem;" role="alert" v-if="error">
                    {{ error }}
                </div>

                <p class="title">Log In</p>
                <RouterLink to="/" class="extra home">X</RouterLink>
                
                <label for="em">enter username</label>
                <input
                type="text"
                placeholder="Enter email here"
                v-model="user_name"
                required
                />
                
                <label for="pass">enter password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                v-model="pass_word"
                required
                />
                
                <button  class="btn-login">
                    Log In
                </button>
                <RouterLink :to="{name:'sign_up'}" class="btn-signup">Sign Up</RouterLink>
            </form>
        </div>
</template>
