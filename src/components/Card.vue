<template>
  <div class="card">
    <div class="card__container" :class="{ sold: this.card.status === 'sold' }">
      <div class="card__picture" @click="cardClickHandler">
        <img class="card__img" :src="'./img/' + card.images[0]" />
      </div>
      <div class="card__name" @click="cardClickHandler">
        {{ card.name }}
      </div>
      <div class="card__offer">
        <div v-if="card.price" class="card__left">
          <div v-if="card.previousPrice" class="card__previousPrice">
            {{ card.previousPrice }}
          </div>
          <div class="card__price">
            {{ card.price }}
          </div>
        </div>
        <div v-if="cardButton && card.price" class="card__right">
          <button
            class="card__button button"
            @click="buyButtonHandler"
            :class="{
              forSale: this.card.status === 'forSale',
              busket: this.card.status === 'busket',
              pending: this.card.status === 'pending',
            }"
          >
            <div class="card__buttonIcon" v-if="this.card.status === 'busket'">
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
            {{ cardButton }}
          </button>
        </div>
        <div v-else class="card__status">
          {{ cardButton }}
        </div>
      </div>
    </div>
    <CardModal
      @close_modal="closeModal"
      @set_card_status='setCardStatus'
      v-if="showModal"
      :card="card"
      :button="cardButton"
    />
  </div>
</template>
<script>
import CardModal from "./CardModal.vue";
export default {
  name: "Card",
  components: {
    CardModal,
  },
  props: ["card"],
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
      setCardStatus(e){
        //   console.log(e,1);
this.$emit('set_card_status', e)
      },
    buyButtonHandler(e) {
      
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
    cardClickHandler() {
      this.showModal = true;
    },
    closeModal() {
    //   console.log("lalala");
      setTimeout(() => {
        this.showModal = false;
      }, 0);
    },
  },
  computed: {
    cardButton() {
      if (this.card.status === "forSale") {
        return "Купить";
      } else if (this.card.status === "busket") {
        return "В корзине";
      } else if (this.card.status === "pending") {
        return "Ожидайте...";
      } else {
        return "Продана на аукционе";
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/vars.scss";
.card {
  display: flex;
  padding: 0 16px;
  width: 25%;
  box-sizing: border-box;
  @media (max-width: 1200px) {
padding: 0 8px;

  }
  @media (max-width: 780px) {
    width: 50%;
  }
   @media (max-width: 540px) {
    width: 100%;
  }
  .card__container {
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
    position: relative;
    overflow-x: hidden;
    width: 100%;
    &.sold {
      opacity: 0.5;
    }
    .card__picture {
      width: 100%;
      height: 160px;
      max-height: 160px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e7e7e7;
      cursor: pointer;
      .card__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .card__name {
      font-weight: normal;
      font-size: $fz_2;
      line-height: 28px;
      padding-left: 24px;
      padding-right: 36px;
      margin-bottom: 22px;
      cursor: pointer;
       @media (max-width: 1140px) {
           padding-left: 12px;
      padding-right: 18px;
  }
   @media (max-width: 960px) {
              font-size: $fz_3;

            
        }
    }
    .card__offer {
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
       @media (max-width: 1140px) {
           flex-direction: column;
           justify-content: flex-start;
  }
  .card__left{
        @media (max-width: 1140px) {
           text-align: center;
           margin-bottom: 5px;
  }
  }
      .card__status {
        display: flex;
        font-weight: bold;
        font-size: $fz_3;
        color: $fc_1;
        line-height: 150%;
        height: 48px;
        align-items: center;
        justify-content: flex-start;
       
      }
      .card__previousPrice {
        font-size: $fz_4;
        font-weight: 300;
        line-height: 150%;
        color: $fc_2;
        text-decoration: line-through;
      }
      .card__price {
        font-size: $fz_3;
        font-weight: bold;
        line-height: 150%;
        color: $fc_1;
        white-space: nowrap;
      }
      .card__button {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .card__buttonIcon {
          margin-right: 7px;
        }
      }
    }
  }
}
</style>