<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <router-link
          class="products-card"
          v-for="good in goodsArray"
          :key="good.id"
      >
          <div class="products-card__image">
            <img :src="getUrl(good.image)" :alt="`good-${good.id}`">
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">{{good.title}}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">{{good.info}}</p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="../assets/images/icons/shopping-cart-white.svg" alt="user">
                </button>
                <span class="products-card__description-controls--price">{{good.price}} ₽</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/main.css';
</style>

<script setup>
import {goodsArray} from "../../constants/goods.js";
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
}
</script>