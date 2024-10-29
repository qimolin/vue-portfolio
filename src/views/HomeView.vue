<template>
  <main>
    <section class="first-section">
      <article>
        <h1 class="heading"><span>I am</span> {{ authorName }}</h1>
        <ol class="job-list">
          <li v-for="jobTitle in jobTitles" :key="jobTitle">
            <span>{{ jobTitle }}</span>
          </li>
        </ol>
        <hr class="divider" />
      </article>
      <img class="qimo-img" src="@/assets/qi_mo_lin.webp" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { authorName } from '../constants'

const jobTitles = [
  'Software Developer',
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'MSc Student',
]

onMounted(() => {
  document.documentElement.style.setProperty(
    '--job-count',
    jobTitles.length.toString(),
  )
})
</script>

<style>
:root {
  --animation-delay: 3s;
}
</style>

<style scoped>
.first-section {
  height: calc(100vh - 20rem);
}
.qimo-img {
  width: min(65%, 350px);
  border-radius: 50%;
  border: solid 3px var(--color-primary);
}
.first-section-article h1 > span {
  color: var(--color-primary);
}
.heading {
  text-align: center;
  letter-spacing: 0.15rem;
}
.heading span {
  color: var(--color-primary);
}
.job-list {
  list-style: none;
  height: 3.5rem;
  line-height: 3.5rem;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: var(--step-4);
  font-weight: bold;
  margin-bottom: 15px;
}
.job-list li {
  animation: slide calc(var(--job-count) * var(--animation-delay) * 2)
    steps(var(--job-count)) infinite;
}
@keyframes slide {
  100% {
    transform: translateY(calc(var(--job-count) * -100%));
  }
}
.job-list li span {
  font-weight: 600;
  -webkit-text-fill-color: transparent;
  background-color: var(--color-primary);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;

  border-right: 0.4rem solid var(--color-primary);

  display: inline-block;
  width: 0%;
  animation:
    cursor 0.8s step-end infinite,
    typing var(--animation-delay) steps(18) infinite alternate;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}
@keyframes typing {
  0%,
  10% {
    width: -1%;
  }
  70%,
  100% {
    width: 100%;
  }
}
@media (min-width: 1025px) {
  .heading {
    text-align: start;
  }
  .job-list {
    align-items: flex-start;
  }
}
</style>
