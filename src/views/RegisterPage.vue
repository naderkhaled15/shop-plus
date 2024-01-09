<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route=useRoute()

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
                />
                
                <label for="pass">enter password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                />
                
                <button type="submit" class="btn-login">
                    Log In
                </button>
                <RouterLink to="/sign-up" class="btn-signup">Sign Up</RouterLink>
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
                />
                
                <label for="name">enter name</label>
                <input
                type="text"
                placeholder="Enter name here"
                id="name"
                />
                
                <label for="img">profile image</label>
                <input
                type="file"
                placeholder="Enter name here"
                id="img"
                />
                
                <label for="pass">enter password</label>
                <input
                type="password"
                placeholder="Enter password here"
                autocomplete="off"
                id="pass"
                />
                
                <button type="submit" class="btn-login">
                    Sign Up
            </button>
            <RouterLink to="/log-in" class="btn-signup">Log In</RouterLink>
            </form>
        </div>
</div>
</template>
