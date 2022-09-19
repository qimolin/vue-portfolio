<template>
  <main>
    <section class="first-section">
      <article>
        <h1>Public Projects</h1>
        <hr class="divider" />
      </article>
      <img class="svg-image" src="@/assets/my_app.svg" />
      <a class="scroll-down" href="#projects"></a>
    </section>
    <section id="projects" class="projects">
      <a href="https://deepalpha.tech/">
        <article class="project-card">
          <h1>Company website</h1>
          <p>Deep Alpha company website created using WordPress</p>
          <div class="pill-row">
            <span class="pill wordpress">WordPress</span>
          </div>
        </article>
      </a>
      <a href="https://github.com/qimolin/nuxt-student-portfolio">
        <article class="project-card">
          <h1>Nuxt Student Portfolio</h1>
          <p>Portfolio website created during my bachelor's using Nuxt and TailwindCSS</p>
          <div class="pill-row">
            <span class="pill vue">Vue</span>
            <span class="pill javascript">JavaScript</span>
          </div>
        </article>
      </a>
      <a href="https://github.com/qimolin/logic-engineering">
        <article class="project-card">
          <h1>Logic Proposition Parser</h1>
          <p>
            App to parse propositional logical formulas using OO design and C# Winforms
          </p>
          <div>
            <span class="pill c-sharp">C#</span>
          </div>
        </article>
      </a>
      <a href="https://github.com/qimolin/casino-jack">
        <article class="project-card">
          <h1>Casino Jack</h1>
          <p>Casino app created using TDD and Java</p>
          <div>
            <span class="pill java">Java</span>
          </div>
        </article>
      </a>
    </section>
  </main>
</template>

<style scoped>
.svg-image {
  width: min(50%, 300px);
}
.projects {
  background: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: max(5vw, 2rem);
  padding: max(5vh, 1rem) 0;
  gap: 1rem;
}
.project-card {
  background-color: var(--color-dark);
  border-radius: 15px;
  color: var(--color-light);
  padding: 2rem;
  min-width: 220px;
  max-width: 250px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;
}
a > .project-card:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  cursor: pointer;
}
.project-card > h1 {
  color: var(--color-primary);
  font-size: var(--step-0);
  padding-bottom: 0.2rem;
}
.project-card p {
  font-size: var(--step--2);
  padding-bottom: 0.2rem;
}
.project-card span {
  font-size: var(--step--2);
  padding-bottom: 0.1rem;
}
.pill-row {
  display: flex;
  gap: 0.3rem;
}
.pill {
  color: var(--color-dark);
  padding-inline: 1vw;
  border-radius: 10px;
}
.wordpress {
  background: #00769d;
}
.vue {
  background: #41b883;
}
.javascript {
  background: #f1e05a;
}
.c-sharp {
  background: #178600;
}
.java {
  background: #b07219;
}
@media (min-width: 650px) {
  .projects {
    display: grid;
    grid-template-areas: "1fr 1fr";
    justify-content: center;
  }
  .project-card {
    min-width: 250px;
    max-width: 300px;
    height: 150px;
  }
}
@media (min-width: 1025px) {
  .projects {
    display: grid;
    grid-template-areas: "1fr 1fr 1fr";
    justify-content: center;
  }
  .project-card {
    min-width: 250px;
    max-width: 375px;
    height: 200px;
  }
  .project-card > h1 {
    text-align: left;
  }
}
</style>
