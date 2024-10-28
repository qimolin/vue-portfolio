<template>
  <main>
    <section class="first-section">
      <article>
        <h1 class="content">
          <span>I am</span> {{ authorName }}
          <ol>
            <li v-for="jobTitle in jobTitles" :key="jobTitle">
              <span>{{ jobTitle }}</span>
            </li>
          </ol>
        </h1>
        <hr class="divider" />
      </article>
      <img class="qimo-img" src="@/assets/qi_mo_lin.webp" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { authorName } from '../constants'

const jobTitles = [
  'Software Developer',
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'MSc Student',
]
</script>

<style>
:root {
  --job-count: 6;
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
.content {
  text-align: left;
  letter-spacing: 0.15rem;
}
.content span {
  color: var(--color-primary);
}
.content ol li {
  animation: slide calc(var(--job-count) * var(--animation-delay) * 2)
    steps(var(--job-count)) infinite;
}
@keyframes slide {
  100% {
    transform: translateY(calc(var(--job-count) * -100%));
  }
}
.content ol {
  list-style: none;
  height: 3.5rem;
  line-height: 3.5rem;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.content ol li span {
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
</style>
