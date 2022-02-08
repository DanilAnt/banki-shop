<template>
  <div class="cardModal" @click="closeModal" data-modal="close">
    <div class="cardModal__container">
      <div class="cardModal__close" data-modal="close"></div>
      <Slick class="cardModal__slider" :options="slickOptions">
        <div class="cardModal__picture" v-for="img of card.images" :key="img">
          <img class="cardModal__img" :src="'./img/' + img" />
        </div>
      </Slick>

      <div class="cardModal__name">
        {{ card.name }}
      </div>
      <div class="cardModal__offer">
        <div v-if="card.price" class="cardModal__left">
          <div v-if="card.previousPrice" class="cardModal__previousPrice">
            {{ card.previousPrice }}
          </div>
          <div class="cardModal__price">
            {{ card.price }}
          </div>
        </div>
        <div v-if="button && card.price" class="cardModal__right">
          <button
            class="cardModal__button button"
            @click="buyButtonHandler"
            :class="{
              forSale: this.card.status === 'forSale',
              busket: this.card.status === 'busket',
              pending: this.card.status === 'pending',
            }"
          >
            <div class="cardModal__buttonIcon" v-if="this.card.status === 'busket'">
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237"
                  stroke="#F4F6F9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {{ button }}
          </button>
        </div>
        <div v-else class="cardModal__status">
          {{ button }}
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Slick from "vue-slick";
export default {
  name: "CardModal",

  props: {
    card: Object,
    button: String,
  },
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
      },
    };
  },
  methods: {
    closeModal(e) {
      if (e.target.getAttribute("data-modal") === "close") {
        this.$emit("close_modal");
      }
    },
     buyButtonHandler(e) {
    //   console.log(e);
      if (e.target.classList.contains("forSale")) {
           e.target.classList.add("pending");
        e.target.classList.remove("forSale");
        this.$emit('set_card_status', {id:this.card.id, status:'pending'})
       
        
        setTimeout(() => {
             e.target.classList.add("busket");
          e.target.classList.remove("pending");
            this.$emit('set_card_status', {id:this.card.id, status:'busket'})
         
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/vars.scss";
.cardModal {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  padding: 45px 20px;
  max-height: 100%;
  box-sizing: border-box;
  .cardModal__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 30px 20px;
    border-radius: 0;
    border: 1px solid $fc_1;
    width: 100%;
    max-width: 600px;
    position: relative;
    overflow-y: scroll;
    max-height: 100%;
    box-sizing: border-box;
    height: fit-content;

    // &::-webkit-scrollbar {
    //   /* chrome based */
    //   width: 0px; /* ширина scrollbar'a */
    //   background: transparent; /* опционально */
    // }

    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
  .cardModal__close {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
    &::before,
    &::after {
      position: absolute;
      left: 15px;
      content: "";
      height: 33px;
      width: 2px;
      background-color: #333;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  .cardModal__slider {
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    .slick-prev {
      transform: rotate(-140deg);
    }
     .slick-next {
      transform: rotate(45deg);
    }
    .slick-arrow {
      border: none;
      font-size: 0;
      background-color: transparent;
      width: 5px;
      height: 18px;
      border-radius: 2px;
      border-top: 5px solid $fc_4;
      border-right: 5px solid $fc_4;
      margin-right: 0px;
    }
  }
  .cardModal__picture {
    width: 100%;
    height: 260px;
    max-height: 260px;
    margin-bottom: 20px;
    border: 1px solid #e1e1e1;
    cursor: pointer;
    .cardModal__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cardModal__name {
    font-weight: normal;
    font-size: $fz_2;
    line-height: 28px;
    padding-left: 24px;
    padding-right: 36px;
    margin-bottom: 22px;
    cursor: pointer;
  }
  .cardModal__offer {
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .cardModal__status {
      display: flex;
      font-weight: bold;
      font-size: $fz_3;
      color: $fc_1;
      line-height: 150%;
      height: 48px;
      align-items: center;
      justify-content: flex-start;
    }
    .cardModal__left {
      margin-right: 25px;
    }
    .cardModal__previousPrice {
      font-size: $fz_4;
      font-weight: 300;
      line-height: 150%;
      color: $fc_2;
      text-decoration: line-through;
    }
    .cardModal__price {
      font-size: $fz_3;
      font-weight: bold;
      line-height: 150%;
      color: $fc_1;
    }
    .cardModal__button {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      .cardModal__buttonIcon {
        margin-right: 7px;
      }
    }
  }
}
</style>