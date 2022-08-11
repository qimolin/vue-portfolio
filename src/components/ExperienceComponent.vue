<template>
  <section class="experience">
    <h1>Experience</h1>
    <div>
      <article class="experience-card">
        <h1>Sogeti</h1>
        <span>Frontend developer intern</span>
        <span>February 2022 - July 2022</span>
        <p>
          I successfully built a cross-platform sports challenges app using
          Quasar and Firebase. This app was graded a 9/10.
        </p>
      </article>
      <article class="experience-card">
        <h1>DOEN Horeca</h1>
        <span>Fullstack developer</span>
        <span>March 2021 - May 2022</span>
        <p>
          I built a recruitment system from the ground up while learning VueJS
          at the same time. After that I was adding new features and fixing
          bugs.
        </p>
      </article>
      <article class="experience-card">
        <h1>DAF Trucks</h1>
        <span>Software Engineering intern</span>
        <span>September 2018 - July 2022</span>
        <p>
          Performed research on how to display Simulink models in Bitbucket
          Successfully created a proof of concept. This was graded a 9/10.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--color-dark);
  text-align: center;
  padding-inline: max(5vw, 2rem);
  color: var(--color-light);
  padding: max(5vh, 1rem) 0;
}
.experience > h1 {
  font-size: var(--step-2);
  text-align: center;
  padding-bottom: 1rem;
}

.experience > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-inline: var(--side-padding);
}
.experience-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 220px;
  max-width: 270px;
  height: 200px;
  padding: 2rem;
  background-color: var(--color-light);
  border-radius: 15px;
  color: var(--color-dark);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
}
.experience-card > h1 {
  color: var(--color-primary);
  font-size: var(--step-0);
  padding-bottom: 0.2rem;
}
.experience-card span {
  font-size: var(--step--2);
  font-style: italic;
  padding-bottom: 0.1rem;
}
.experience-card p {
  font-size: var(--step--2);
}

@media (min-width: 1025px) {
  .experience > h1 {
    text-align: left;
    padding-inline: var(--side-padding);
  }
  .experience > div {
    flex-direction: row;
    justify-content: left;
  }
  .experience-card {
    min-width: 250px;
    max-width: 350px;
    height: 250px;
    text-align: left;
  }
  .experience-card > h1 {
    text-align: left;
  }
}
</style>
