<template>
  <main>
    <section class="first-section">
      <article>
        <h1>About me</h1>
        <hr class="divider" />
      </article>
      <img class="qimo-img" src="@/assets/qi_mo_lin_graduation.jpg" />
      <a class="scroll-down" href="#summary"></a>
    </section>
    <section id="summary" class="summary">
      <h1>Summary</h1>
      <p>
        Hi, my name is Qi Mo Lin. Born and raised in Eindhoven, the Netherlands.
        I am
        {{ age }}, software developer and ICT & Software Engineering graduate. I
        am currently pursuing a master's degree in Computer Science. I like to
        learn new things and solve problems. During my free time I like to play
        sports and spend time with family.
      </p>
    </section>
    <TechComponent />
    <ExperienceComponent />
    <EducationComponent />
  </main>
</template>

<script setup lang="ts">
import TechComponent from "@/components/TechComponent.vue";
import ExperienceComponent from "@/components/ExperienceComponent.vue";
import EducationComponent from "@/components/EducationComponent.vue";
import { useAge } from "@/composables/useAge";

const { age } = useAge();
</script>

<style scoped>
.qimo-img {
  width: min(50%, 300px);
  border-radius: 15px;
  box-shadow: 2px 4px 4px var(--color-divider-dark-bg);
}
.summary {
  background: var(--color-light);
  text-align: center;
  padding-top: max(5vh, 1rem);
  padding-bottom: 10px;
}
.summary p {
  padding-inline: var(--side-padding);
}
.summary > h1 {
  font-size: var(--step-2);
}
@media (min-width: 1025px) {
  .summary {
    text-align: left;
  }
  .summary > h1 {
    padding-inline: var(--side-padding);
  }
}
</style>
