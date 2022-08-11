<template>
  <div class="center">
    <h1><span>4</span>0<span>4</span></h1>
    <p>The page could not be found</p>
    <RouterLink to="/">Go Home</RouterLink>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 60vh;
  color: var(--color-light);
  text-align: center;
}
.center h1 > span {
  color: var(--color-primary);
}
h1 {
  font-size: var(--step-4);
}
p {
  font-size: var(--step-1);
}
a {
  color: var(--color-primary);
  font-size: var(--step-1);
}
</style>
