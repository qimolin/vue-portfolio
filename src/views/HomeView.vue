<template>
  <main>
    <section class="first-section">
      <article class="first-section-article">
        <h1>I'm Qi Mo Lin</h1>
        <h2 class="description typewriter-effect" aria-label="Fullstack Developer"></h2>
        <hr class="divider" />
      </article>
      <img class="qimo-img" src="@/assets/qi_mo_lin.jpg" />
    </section>
    <section class="about">
      <h1>Who am I?</h1>
      <p>
        I am 21, software developer and ICT & Software engineering graduate. Currently
        pursuing my master's degree in Computer Science.
      </p>
      <div><RouterLink to="/about">Learn more...</RouterLink></div>
    </section>
    <section class="projects">
      <h1>Recent Projects</h1>
      <p>Coming soon...</p>
      <div><RouterLink to="/projects">View more...</RouterLink></div>
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
.first-section-article > .description {
  text-align: center;
  margin-bottom: 12px;
  color: var(--color-primary);
}
.first-section-article > .description::after {
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
.qimo-img {
  width: min(65%, 350px);
  border-radius: 50%;
  border: solid 3px var(--color-divider-dark-bg);
}
@media (min-width: 1025px) {
  .first-section-article > .description {
    text-align: start;
    margin-bottom: 20px;
  }
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
  padding-inline: max(8vw, 2rem);
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
    width: 100%;
  }
}
</style>
