<template>
    <div class="text-center my-5">
        <h1 class="fw-bold pb-5" style="color: green;font-size: 5rem;">payment successfully</h1>
        <b class="fs-2 d-block pb-3 text-muted">please wait a moment we will redirect you to the confirmation page after {{ counterTimer }} </b>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { cartModule } from '@/stores/cartStore';

const cartStore=cartModule()
const clearCart=cartStore.clearCart


const counterTimer=ref<number>(3)

const router=useRouter()

const notifyNotifications=()=>{
    Notification.requestPermission().then(perm=>{
        if(perm==='granted'){
            const notification=new Notification("payment done",{
                body:"transaction Successful",
                data:{payment:"transaction successfully"},
            })
        }
    })
}
onMounted(() => {
  notifyNotifications()
  const timer=setInterval(()=>{
    counterTimer.value--
    console.log(counterTimer.value)
    if(counterTimer.value===0){
      clearInterval(timer)
      router.push({ name: 'home' })
      clearCart()
  }
  },1000)
})




</script>

<style scoped>

</style>