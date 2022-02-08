<template>
  <div class="home container">
    <div class="home__header">Картины эпохи Возрождения</div>
    <div class="home__cards">
      <Card
        v-for="card of computedCards"
        :key="card.id"
        :card="card"
        @set_card_status="setCardStatus"
      />
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Home",
  props: ["filter"],
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "«Рождение Венеры» Сандро Боттичелли",
          status: "forSale",
          price: "1 000 000 $",
          previousPrice: "2 000 000 $",
          images: ["card1_1.png", "card1_2.png", "card1_3.png"],
        },
        {
          id: 2,
          name: "«Тайная вечеря»  Леонардо да Винчи",
          status: "forSale",
          price: "3 000 000 $",
          previousPrice: "",
          images: ["card2_1.png", "card2_2.png"],
        },
        {
          id: 3,
          name: "«Сотворение Адама» Микеланджело",
          status: "busket",
          price: "5 000 000 $",
          previousPrice: "6 000 000 $",
          images: ["card3_1.png", "card3_2.png", "card3_3.png"],
        },
        {
          id: 4,
          name: "«Урок анатомии»  Рембрандт",
          status: "sold",
          price: "",
          previousPrice: "",
          images: ["card4_1.png", "card4_2.png"],
        },
      ],
    };
  },
  methods: {
    setCardStatus(e) {
      // console.log(e, "e");
      this.cards = this.cards.map((card) => {
        if (card.id === e.id) {
          // console.log({ ...card, ...{ status: e.status } });
          return { ...card, ...{ status: e.status } };
        } else {
          return card;
        }
      });
         window.history.pushState(this.cards,'')
    },
  },
  computed: {
    computedCards() {
      return this.filter
        ? this.cards.filter((card) => {
            return card.name
              .toLowerCase()
              .includes(this.filter.trim().toLowerCase());
          })
        : this.cards;
    },
  },
  mounted(){
    let cards =  window.history.state
    // console.log(cards,'hist');
    if (cards){
this.cards =cards;
    }
    
  }
};
</script>
<style lang="scss">
@import "../assets/styles/vars.scss";

.home {
  padding-top: 45px;
  padding-bottom: 96+45px;
  @media (max-width: 780px) {
    padding-top: 20px;
  }
  .home__header {
    font-weight: bold;
    line-height: 36px;
    font-size: $fz_1;
    margin-bottom: 39px;
  }
  .home__cards {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: -16px;
    margin-right: -16px;
    margin-bottom: 45px;
    @media (max-width: 1200px) {
margin-left: -8px;
    margin-right: -8px;
  }
  @media (max-width: 780px) {

  }
    // box-sizing: border-box;
  }
}
</style>