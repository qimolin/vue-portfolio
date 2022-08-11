<template>
  <footer>
    <p>Made with <font-awesome-icon icon="fa-solid fa-heart" /> by Qi Mo Lin</p>
    <span class="icons-wrapper">
      <a href="mailto:info@qimolin.com"
        ><font-awesome-icon class="icon" icon="fa-solid fa-envelope"
      /></a>
      <a href="https://www.linkedin.com/in/qi-mo-lin/"
        ><font-awesome-icon class="icon" icon="fa-brands fa-linkedin"
      /></a>
      <a href="https://github.com/"
        ><font-awesome-icon class="icon" icon="fa-brands fa-github"
      /></a>
      <a href="https://twitter.com/qimo_lin"
        ><font-awesome-icon class="icon" icon="fa-brands fa-twitter"
      /></a>
    </span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 6rem;
  height: max(12vh, 2rem);
  width: 100%;
  color: var(--color-light);
}
p {
  font-size: var(--step--2);
}
a {
  color: var(--color-light);
}
.fa-heart {
  color: red;
}
.icons-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon {
  width: 25px;
  height: 25px;
}
.icon:hover {
  color: var(--color-primary);
}
@media (max-width: 1025px) {
  footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .icon {
    width: 15px;
    height: 15px;
  }
}
</style>
