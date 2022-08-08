<template>
  <main>
    <section class="hero">
      <article class="hero-article">
        <h1>I'm Qi Mo Lin</h1>
        <h2 class="description typewriter-effect" aria-label="Fullstack Developer"></h2>
        <hr class="divider" />
      </article>
      <img class="qimo-img" src="@/assets/qi_mo_lin.jpg" />
    </section>
    <section class="article-wrapper">
      <article class="about">
        <h1>Who am I?</h1>
        <p>
          I am 21, software developer and ICT & Software engineering graduate. Currently
          pursuing my master's degree in Computer Science.
        </p>
        <div><RouterLink to="/about">Learn more...</RouterLink></div>
      </article>
      <article class="projects">
        <h1>Recent Projects</h1>
        <p>Coming soon...</p>
        <div><RouterLink to="/projects">View more...</RouterLink></div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const phrases = ["Software Developer"];
let firstLoop = 0;
let secondLoop = 0;
const currentPhrase: string[] = [];
let isDeleting = false;

function loopTypeWriter() {
  const h2Text = document.querySelector(".typewriter-effect");
  if (firstLoop < phrases.length) {
    if (!h2Text) return;
    if (!isDeleting && secondLoop <= phrases[firstLoop].length) {
      currentPhrase.push(phrases[firstLoop][secondLoop]);
      secondLoop++;
      h2Text.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && secondLoop <= phrases[firstLoop].length) {
      currentPhrase.pop();
      secondLoop--;
      h2Text.innerHTML = currentPhrase.join("");
    }

    if (secondLoop === phrases[firstLoop].length) {
      isDeleting = true;
    }

    if (isDeleting && secondLoop === 0) {
      isDeleting = false;
      firstLoop++;
    }
  } else firstLoop = 0;
  const deletingSpeed = 50;
  const normalSpeed = 200;
  const time = isDeleting ? deletingSpeed : normalSpeed;
  setTimeout(loopTypeWriter, time);
}

onMounted(() => {
  loopTypeWriter();
});
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 7.5rem);
  gap: 1rem;
}
.hero-article h1 {
  text-align: center;
  color: var(--color-text-dark-bg);
  font-size: var(--step-3);
  font-weight: bold;
  margin-bottom: 15px;
}
.description {
  text-align: center;
  margin-bottom: 12px;
  color: var(--color-primary);
}
.description::after {
  content: "";
  border-right: 0.15em solid;
  animation: blinking 1.2s step-end infinite;
}
@keyframes blinking {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-primary);
  }
}
.divider {
  margin-inline: auto;
  width: min(150px, 75px);
  height: max(10px, 15px);
  margin-bottom: max(7px, 14px);
  background-color: var(--color-divider-dark-bg);
  border: none;
  border-radius: 10px;
}
.qimo-img {
  width: min(65%, 350px);
  border-radius: 50%;
  border: solid 3px var(--color-divider-dark-bg);
}
@media (min-width: 1025px) {
  .hero {
    flex-direction: row;
    padding-inline: 6rem;
  }
  .hero > .hero-article {
    min-width: 30vw;
  }
  .hero-article > h1 {
    text-align: start;
    margin-bottom: 12px;
  }
  .hero-article > .description {
    text-align: start;
    margin-bottom: 20px;
  }
  .divider {
    margin-inline: 0;
  }
  .qimo-img {
    float: right;
  }
}
.article-wrapper {
  height: 100%;
  background: var(--color-light);
}
.about {
  padding-top: max(5vh, 1rem);
}
.projects {
  padding-bottom: max(5vh, 1rem);
}
.about,
.projects {
  text-align: center;
  line-height: 1.5;
  background-color: var(--color-light);
  padding-inline: max(2vh, 2rem);
}
.about h1,
.projects h1 {
  font-size: var(--step-2);
}
.about a,
.projects a {
  font-size: var(--step--1);
  color: var(--color-divider-light-bg);
}
@media (min-width: 1025px) {
  .hero {
    justify-content: space-between;
  }
  .about,
  .projects {
    float: left;
    text-align: start;
    width: 100vw;
    padding-inline: 6rem;
  }
}
</style>
