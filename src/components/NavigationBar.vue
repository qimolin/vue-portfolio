<template>
  <header class="header">
    <img alt="Website logo" src="@/assets/logo.svg" width="100" height="100" />
    <input
      id="toggle-menu"
      type="checkbox"
      aria-hidden="true"
      @click="setHamburgerExpanded"
    />
    <button
      class="hamburger"
      for="toggle-menu"
      aria-label="Hamburger"
      aria-expanded="false"
      aria-controls="nav-list"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul id="nav-list" class="nav-list">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";

function setHamburgerExpanded() {
  const hamburgerBtn = document.querySelector(".hamburger");
  const ariaExpanded = hamburgerBtn?.getAttribute("aria-expanded");
  if (ariaExpanded === "true") hamburgerBtn?.setAttribute("aria-expanded", "false");
  else hamburgerBtn?.setAttribute("aria-expanded", "true");
}

function handleClickOnLeftEvent(e: MouseEvent) {
  const input = document.querySelector("#toggle-menu") as HTMLInputElement;
  if (e.target != input) {
    const clickTarget = e.currentTarget as HTMLBodyElement;
    const clickTargetWidth = clickTarget.offsetWidth;
    const xCoordInClickTarget = e.clientX - clickTarget.getBoundingClientRect().left;
    if (0.4 * clickTargetWidth > xCoordInClickTarget) {
      const input = document.querySelector("#toggle-menu") as HTMLInputElement;
      if (input.checked) {
        input.checked = !input.checked;
      }
    }
  }
}

onMounted(() => {
  document.querySelector("body")?.addEventListener("click", handleClickOnLeftEvent);
});

onBeforeUnmount(() => {
  document.querySelector("body")?.removeEventListener("click", handleClickOnLeftEvent);
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding-inline: 6rem;
}
#toggle-menu {
  display: none;
}
.hamburger {
  opacity: 0;
}
.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
}
.nav-list {
  display: flex;
  gap: 6rem;
}
.nav-list li > a {
  font-size: 20px;
  color: var(--color-light);
}
.nav-list li > a:hover {
  color: var(--color-primary);
}
.nav-list li > a:hover:after {
  content: "";
  float: left;
  background-color: var(--color-primary);
  width: 100%;
  height: 7px;
  border-radius: 3px;
  margin-top: 5px;
  animation: fade-in 0.3s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 1025px) {
  .header {
    padding-inline: 1rem;
  }
  .nav-list {
    position: fixed;
    inset: 0 0 0 40%;
    flex-direction: column;
    place-content: center;
    height: 100vh;
    gap: 3rem;
    background: var(--color-navbar);
    backdrop-filter: blur(0.5rem);
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  .nav-list li > a {
    z-index: 9999;
    color: var(--color-dark);
  }
  #toggle-menu {
    position: absolute;
    display: block;
    width: 2rem;
    aspect-ratio: 1;

    top: 3.3rem;
    right: 2rem;
    cursor: pointer;
    opacity: 0;
    z-index: 9999;
    -webkit-touch-callout: none;
  }
  .hamburger {
    position: absolute;
    z-index: 2000;
    width: 2.1rem;
    aspect-ratio: 1;
    top: 3.3rem;
    right: 2rem;
    opacity: 1;
    background: rgba(0, 0, 0, 0);
    border: rgba(0, 0, 0, 0);
  }
  .hamburger > span {
    display: block;
    width: 35px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: var(--color-light);
    border-radius: 3px;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  .hamburger > span:first-child {
    transform-origin: 0% 0%;
  }
  .hamburger > span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #toggle-menu:checked ~ .hamburger span:nth-child(1) {
    background: var(--color-dark);
    transform: rotate(45deg) translate(2.5px, -1.5px);
  }
  #toggle-menu:checked ~ .hamburger span:nth-child(2) {
    background: var(--color-dark);
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #toggle-menu:checked ~ .hamburger span:nth-child(3) {
    background: var(--color-dark);
    transform: rotate(-45deg) translate(-4px, 2.5px);
  }
  #toggle-menu:checked ~ nav .nav-list {
    transform: none;
  }
}
</style>
