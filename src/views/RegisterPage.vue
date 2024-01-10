<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route=useRoute()

    let loginUserName=ref<string>('')
    let loginPass=ref<string>()

    let signupUsername=ref<string>('')
    let signupName=ref<string>('')
    let signupPass=ref<string>()
    let signupImg=ref<string>()

    const saveimg=(e:any)=>{
        signupImg.value=e.target.files[0]
    }
</script>
<template>
    <div>
        <div v-if="route.params.type==='log-in'">
            <form class="log-in">
                <p class="title">Log In</p>
                <RouterLink to="/" class="extra home">X</RouterLink>
                
                <label for="em">enter username</label>
                <input
                autofocus
                type="text"
                placeholder="Enter email here"
                v-model="loginUserName"
                />
                
                <label for="pass">enter password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                v-model="loginPass"
                />
                
                <button type="submit" class="btn-login" :disabled="!loginUserName || !loginPass">
                    Log In
                </button>
                <RouterLink :to="{name:'log_in',params:{'type':'sign-up'}}" class="btn-signup">Sign Up</RouterLink>
            </form>
        </div>

        <div v-if="route.params.type==='sign-up'">
            <form class="register">
                <p class="title">Sign Up</p>
                <RouterLink to="/" class="extra home">X</RouterLink>
                
                <label for="user">enter username</label>
                <input
                type="text"
                placeholder="Enter username here"
                id="user"
                v-model="signupUsername"
                />
                
                <label for="name">enter name</label>
                <input
                type="text"
                placeholder="Enter name here"
                id="name"
                v-model="signupName"
                />
                
                <label for="img">profile image</label>
                <input
                type="file"
                placeholder="Enter name here"
                id="img"
                @change="saveimg"
                />
                
                <label for="pass">enter password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                id="pass"
                v-model="signupPass"
                />
                
                <button type="submit" class="btn-login" :disabled="!signupUsername || !signupName || !signupPass || !signupImg">
                    Sign Up
            </button>
            <RouterLink :to="{name:'log_in',params:{'type':'log-in'}}" class="btn-signup">Log In</RouterLink>
            </form>
        </div>
</div>
</template>
