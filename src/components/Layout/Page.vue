<template>
  <main class="page">
    <div class="container">
      <slot />
    </div>
  </main>
</template>

<style>
.page{
  background: var(--gray);
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>