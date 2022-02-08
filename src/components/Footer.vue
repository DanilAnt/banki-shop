<template>
  <div class="footer">
    <div class="container footer__container">
      <ul class="footer__nav">
        <li class="footer__navItem">Каталог</li>
        <li class="footer__navItem">Доставка</li>
        <li class="footer__navItem">Оплата</li>
        <li class="footer__navItem">Контакты</li>
        <li class="footer__navItem">О компании</li>
      </ul>
      <div class="footer__contacts">
        <a href="tel:8912312" class="footer__tel">
          <svg
            class="footer__icon"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6861 11.0733L11.5241 8.9061C11.0934 8.47621 10.3803 8.48927 9.93461 8.9361L8.84534 10.0276C8.77652 9.98957 8.70529 9.94987 8.6304 9.90774C7.94254 9.52574 7.00109 9.00217 6.0104 8.00851C5.01678 7.01276 4.49391 6.06772 4.11161 5.37786C4.07127 5.30478 4.03261 5.23431 3.99445 5.16739L4.7255 4.43577L5.08492 4.07509C5.53125 3.62763 5.54356 2.91305 5.11392 2.48192L2.95184 0.314451C2.52219 -0.116083 1.80871 -0.103021 1.36238 0.344444L0.753032 0.95868L0.769684 0.975248C0.565361 1.23655 0.394623 1.53793 0.267564 1.86292C0.150441 2.17228 0.0775199 2.46748 0.0441767 2.76329C-0.241312 5.13542 0.840231 7.30337 3.7754 10.2452C7.8327 14.3114 11.1023 14.0043 11.2434 13.9893C11.5506 13.9525 11.845 13.8789 12.1442 13.7624C12.4657 13.6366 12.7662 13.4657 13.0267 13.2613L13.04 13.2732L13.6573 12.6673C14.1028 12.22 14.1156 11.5051 13.6861 11.0733Z"
              fill="inherit"
            />
          </svg>

          +7 (812) 555-55-55</a
        >
        <div class="footer__adress">
          <svg
            class="footer__icon"
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.07028 0C2.27451 0 0 2.27451 0 5.07025C0 8.53985 4.5374 13.6334 4.73058 13.8486C4.91204 14.0507 5.22884 14.0503 5.40997 13.8486C5.60315 13.6334 10.1406 8.53985 10.1406 5.07025C10.1405 2.27451 7.86601 0 5.07028 0ZM5.07028 7.62123C3.66366 7.62123 2.51932 6.47687 2.51932 5.07025C2.51932 3.66363 3.66368 2.51929 5.07028 2.51929C6.47687 2.51929 7.6212 3.66366 7.6212 5.07028C7.6212 6.47689 6.47687 7.62123 5.07028 7.62123Z"
              fill="inherit"
            />
          </svg>

          г. Санкт-Петербург, ул. Ефимова, 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  params: [],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchButtonHandler() {
      this.$emit("search", this.search);
      //   console.log('search',this.search);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/vars.scss";
// @import "../assets/styles/button.scss";
.footer {
  background-color: $bgcolor_2;
  height: 96px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  bottom: 0;
  color: $fc_4;
 @media (max-width: 720px) {
height: fit-content;}
  .footer__container {
    display: flex;
    justify-content: space-between;
      @media (max-width: 1140px) {
          flex-direction:column;
      }
  }
  .footer__contacts {
    display: flex;
    align-items: center;
    transition: all 0.2s linear;
    @media (max-width: 1140px) {
         justify-content: center;
         padding: 8px 0 8px 0;
         flex-wrap: wrap;
      }
    &:hover {
      color: $fc_1;
    }
    .footer__icon {
      margin-right: 10px;
      fill: $fc_4;
      transition: all 0.2s linear;
      &:hover {
        fill: $fc_1;
      }
    }
    .footer__tel {
      color: inherit;
      text-decoration: none;
      margin-right: 54px;
      display: flex;
      align-items: center;
      &:hover {
        text-decoration: underline;
      }
      @media (max-width: 720px) {
          margin-bottom: 10px;
      }
    }
    .footer__adress {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .footer__nav {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
     @media (max-width: 1140px) {
         padding: 0;
      }
      @media (max-width: 7200px) {
        flex-wrap: wrap;
      }
    .footer__navItem {
      list-style: none;
      padding: 38px 24px;
      cursor: pointer;
      transition: all 0.2s linear;
       @media (max-width: 1140px) {
         padding: 15px 24px;
      }
      &:hover {
        background-color: #5b3a32;
        color: $fc_3;
      }
    }
  }
}
</style>
 
