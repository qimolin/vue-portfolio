<template>
  <section class="technologies">
    <h1>Technologies</h1>
    <h2>Frontend</h2>
    <div class="grid-container">
      <div class="icon-cards-wrapper">
        <div class="icon-card">
          <font-awesome-icon
            style="color: #e44d26; width: 42px; height: 42px"
            icon="fa-brands fa-html5"
          />
        </div>
        <div class="icon-card">
          <font-awesome-icon
            style="color: #264de4; width: 42px; height: 42px"
            icon="fa-brands fa-css3-alt"
          />
        </div>
        <div class="icon-card">
          <font-awesome-icon
            style="color: #f7df1e; width: 42px; height: 42px"
            icon="fa-brands fa-js-square"
          />
        </div>
        <div class="icon-card">
          <TypeScriptIcon />
        </div>
        <div class="icon-card">
          <VueIcon />
        </div>
        <div class="icon-card">
          <font-awesome-icon
            style="color: #1b769c; width: 42px; height: 42px"
            icon="fa-brands fa-wordpress"
          />
        </div>
      </div>
      <h2>Backend</h2>
      <div class="icon-cards-wrapper">
        <div class="icon-card">
          <font-awesome-icon
            style="color: #83cd29; width: 42px; height: 42px"
            icon="fa-brands fa-node-js"
          />
        </div>
        <div class="icon-card">
          <CSharpIcon />
        </div>
        <div class="icon-card">
          <JavaIcon />
        </div>
        <div class="icon-card">
          <PythonIcon />
        </div>
        <div class="icon-card">
          <MySQLIcon />
        </div>
        <div class="icon-card">
          <FirebaseIcon />
        </div>
      </div>
      <h2>Tooling</h2>
      <div class="icon-cards-wrapper">
        <div class="icon-card">
          <font-awesome-icon
            style="width: 42px; height: 42px"
            icon="fa-brands fa-github"
          />
        </div>
        <div class="icon-card">
          <GitlabIcon />
        </div>
        <div class="icon-card">
          <font-awesome-icon
            style="color: #2396ed; width: 42px; height: 42px"
            icon="fa-brands fa-docker"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TypeScriptIcon from "@/components/icons/TypeScriptIcon.vue";
import CSharpIcon from "@/components/icons/CSharpIcon.vue";
import VueIcon from "@/components/icons/VueIcon.vue";
import JavaIcon from "@/components/icons/JavaIcon.vue";
import PythonIcon from "@/components/icons/PythonIcon.vue";
import MySQLIcon from "@/components/icons/MySQLIcon.vue";
import FirebaseIcon from "@/components/icons/FirebaseIcon.vue";
import GitlabIcon from "@/components/icons/GitlabIcon.vue";
</script>

<style scoped>
.technologies {
  background: var(--color-light);
  text-align: center;
  padding-bottom: max(5vh, 1rem);
}
.technologies > h1 {
  font-size: var(--step-2);
}
.technologies h2 {
  padding-top: 5px;
  padding-bottom: 5px;
}
.icon-cards-wrapper {
  display: grid;
  grid-template-areas: "1fr 1fr 1fr";
  justify-content: center;
  gap: 1rem;
  padding-bottom: 15px;
}
.icon-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  box-shadow: -4px -4px 10px 6px rgba(0, 0, 0, 0.05), 4px 4px 10px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
@media (min-width: 650px) {
  .icon-cards-wrapper {
    display: flex;
    flex-direction: row;
  }
}
@media (min-width: 1025px) {
  .technologies {
    text-align: left;
  }
  .technologies > h1,
  .technologies h2 {
    padding-inline: var(--side-padding);
  }
  .icon-cards-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    padding-inline: var(--side-padding);
  }
}
</style>
