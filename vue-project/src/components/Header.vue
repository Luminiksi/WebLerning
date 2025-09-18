<script setup>
const emit = defineEmits(["toggleModal"]);
const openModal = () => emit("toggleModal");
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/images/logo.png" alt="logo">
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/images/icons/user.png" alt="user">
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal">
            <img src="../assets/images/icons/shopping-cart.png" alt="shopping-cart">
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import '@/assets/main.css';

.header {
  display: flex;
  align-items: center;
  height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>