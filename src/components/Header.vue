<template>
  <div class="header container">
    <ul class="header__nav">
      <li class="header__navItem">Каталог</li>
      <li class="header__navItem">Доставка</li>
      <li class="header__navItem">Оплата</li>
      <li class="header__navItem">Контакты</li>
      <li class="header__navItem">О компании</li>
    </ul>
    <div class="header__search">
      <input
        type="text"
        @input="searchButtonHandler"
        v-model="search"
        class="header__input"
        placeholder="Поиск по названию картины"
      />
      <button
        type="button"
        @click="searchButtonHandler"
        class="header__button button"
      >
        Найти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  params: [],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchButtonHandler() {
      this.$emit("search", this.search);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/vars.scss";
@import "../assets/styles/button.scss";
.header {
  font-size: $fz_4;
  display: flex;
  justify-content: space-between;
  height: 96px;
  border-bottom: 1px solid #e1e1e1;
  @media (max-width: 960px) {
    height: 55px;
  }
  @media (max-width: 780px) {
    // height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    z-index: 10;
    width: fit-content;
    background-color: white;
    // min-height: 100vh;
    // max-height: 100vh;
    height: fit-content;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: scroll;
    top: 0;
    right: 0;
    transform: translateX(100%);
    align-items: flex-end;
    padding: 0px 0 15px 0;
    transition: all 0.3s linear;
    .showHeader &{
       transform: translateX(0);
    }
  }
  .header__nav {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
    @media (max-width: 960px) {
      padding: 0;
    }
    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
      height: fit-content;
      // height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    .header__navItem {
      white-space: nowrap;
      list-style: none;
      padding: 38px 24px;
      @media (max-width: 960px) {
        padding: 20px 10px;
      }
      @media (max-width: 780px) {
        width: 100%;
        text-align: center;
      }
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        background-color: #5b3a32;
        color: $fc_3;
      }
    }
  }

  .header__search {
    max-width: 416px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    @media (max-width: 780px) {
      min-width: 270px;
      box-sizing: border-box;
      padding: 0 10px;
    }

    .header__input {
      border: 1px solid #e1e1e1;
      background-color: transparent;
      padding-top: 13px;
      padding-left: 16px;
      padding-bottom: 14px;
      line-height: 21px;
      flex-grow: 1;
      outline: none;
      color: $fc_1;
      &::placeholder {
        color: #9f9f9f;
      }
    }
    .header__button {
      padding: 13px 36px 14px 36px;
      @media (max-width: 780px) {
        display: none;
      }
    }
  }
}
</style>
 
