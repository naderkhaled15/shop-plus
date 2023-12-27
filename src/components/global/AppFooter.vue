<script setup lang="ts">
import {ref} from "vue"

  let socialLogo=ref([
    {
      title:'facebook',
      image:`<svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon icon-facebook">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>`
    }
    ])
</script>
<template>

<div class="container-fluid p-0" >
  <footer>
<div class="footer-bg px-3 py-5">
    <!-- first row -->
    <div class="row row-cols-1 first-row my-5">
      <div class="col-md-6 offset-md-1 mb-3 mx-auto">

        <form>
          <h5 class="text-center footer-form-header">Subscribe to our newsletter</h5>
          <p class="text-center footer-form-text">get the latest updates on new products and upcoming sales</p>
          <div class="d-flex flex-column flex-sm-row row row-cols-2 row row-cols-2">
            <div class="col-9 ps-0 pe-5">
              <input class="form-control rounded-pill bg-white text-dark z-1 search" type="search" placeholder="enter your email address" aria-label="Search">
            </div>
            <button class="btn footer-form-btn rounded-pill col-3 ms-auto" type="button">submit</button>
          </div>
        </form>

      </div>
    </div>

    <!-- second row -->
    <div class="row row-cols-4 second-row">
      <div class="col mb-3">
        <h5 class="foot-col-header">shop</h5>
        <ul class="nav flex-column footer-list">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">electronics</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">computer & laptops</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">smartphones & Tablets</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">cameras</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">video game & systems</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">home furniture</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">weekly special</a></li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5 class="foot-col-header">further info</h5>
        <ul class="nav flex-column footer-list">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">about</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">customer service</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">reward program</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">shipping & returns</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">privacy policy</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">terms & conditions</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">blog</a></li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5 class="foot-col-header">customer service</h5>
        <ul class="nav flex-column footer-list">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">search terms</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">advanced search</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">orders and returns</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">contact us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">theme FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">consultant</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">store locations</a></li>
        </ul>
      </div>

      <div class="col mb-3">
        <img src="../../media/images/footer-logo.webp" alt="logo" width="60%" class="mb-5">
        <ul class="nav flex-column footer-list">

          <li class="nav-item d-flex gap-4 mb-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px">
                <path fill="#505050" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
              </svg>
            </div>
            <a href="tel:555-5555" class="text-black"> 685 market street <br> san francisco, CA 94105, US  </a>
          </li>

          <li class="nav-item d-flex gap-4  mb-4">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" viewBox="0 0 512 512" class="svg-inline--fa fa-phone-alt fa-w-16 fa-7x" width="20px" height="20px">
                <path fill="#505050" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" class="" />
              </svg>
            </div>
            <a href="tel:555-5555" class="text-black"> call us at (415) 555-5555 </a>
          </li>

          <li class="nav-item d-flex gap-4  mb-4">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16 fa-7x" width="20px" height="20px">
                <path fill="#505050" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" class=""></path></svg>
              </div>
            <a href="mailto:example@domain.com" class="text-black">example@domain.com</a></li>

          <!-- links -->
          <li class="nav-item mb-2" v-for="logo in socialLogo" :key="logo['title']">
            <a v-html="logo['image']" class="nav-link p-0 text-body-secondary social-logo"></a>
          </li>
          <!-- links -->

        </ul>
      </div>

    </div>
    
    <!-- third row -->
    <div class="row row-cols-1 third-row"> 
      <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/trust_551fa8e0-5f24-4fbc-bf22-74c01b859a01.png?v=1639984732" alt="brands logo" class="col-md-6 offset-md-1 mb-3 mx-auto brand-logos">
    </div>
  </div>

    <!-- fourth row -->
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 bg-white">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>

  </footer>
</div>

</template>

<style lang="scss">
footer {
  .footer-bg {
    background-color: #f5f5f5;
  }
  .first-row {
    .footer-form-header {
      font-size: 2.5rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    .footer-form-text {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 15px 0 25px;
    }
    form {
    .search::placeholder {
      color: #8b8b8b;
      font-weight: 400;
      opacity: 0.7;
      font-size: 2rem;
    } 
    .search {
      font-size: 2rem;
      font-weight: bold;
      padding: 2rem 2rem !important;
    }
  }
  .footer-form-btn {
    align-items: center;
    background-color: #161880;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  }
  .second-row {
    .foot-col-header {
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
  .footer-list {
    li {
      font-size: 2rem;
      &:not(:last-child){
        margin-bottom: 1.5rem;
      }
    }
    .social-logo {
      width:15px;
      height:15px;
      fill:#ffffff;
      padding:10px;
      background-color:#4b4b4b;
      border-radius:50%
    }
  }
  }
  .third-row {
    background-color: #f5f5f5;
    margin: 5rem 0;
  }
 
}
</style>


