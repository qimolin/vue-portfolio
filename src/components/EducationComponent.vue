<template>
  <section class="education">
    <h1>Education</h1>
    <div>
      <article class="education-card">
        <h1>Fontys University of Applied Sciences</h1>
        <span>BSc ICT & Software Engineering</span>
        <br />
        <span>September 2018 - July 2022</span>
        <br />
        <p>
          I studied software engineering and learned various ICT skills by studying theory
          and doing projects
        </p>
      </article>
      <article class="education-card">
        <h1>Haaga-Helia of Applied Sciences</h1>
        <span>Exchange semester</span>
        <br />
        <span>Augustus 2021 - December 2021</span>
        <br />
        <p>
          I went on an exchange semester to Finland to take up various courses in business
          IT
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education > h1 {
  font-size: var(--step-2);
  text-align: center;
  padding-bottom: 1rem;
}
.education {
  background: var(--color-light);
  text-align: center;
  padding-inline: max(5vw, 2rem);
  padding: max(5vh, 1rem) 0;
}
.education > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-inline: var(--side-padding);
}
.education-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  max-width: 250px;
  height: 200px;
  padding: 2rem;
  background-color: var(--color-light);
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;
  border-radius: 15px;
  color: var(--color-text-light-bg);
}
.education-card > h1 {
  color: var(--color-divider-light-bg);
  font-size: var(--step-0);
  padding-bottom: 0.2rem;
}
.education-card span {
  font-size: var(--step--2);
  font-style: italic;
  padding-bottom: 0.1rem;
}
.education-card p {
  font-size: var(--step--2);
}
@media (min-width: 650px) {
  .education-card {
    min-width: 250px;
    max-width: 300px;
    height: 200px;
  }
}
@media (min-width: 1025px) {
  .education > h1 {
    text-align: left;
    padding-inline: var(--side-padding);
  }
  .education-card {
    min-width: 250px;
    max-width: 350px;
    height: 250px;
    text-align: left;
  }
  .education > div {
    flex-direction: row;
    justify-content: left;
  }
}
@media (min-width: 1720px) {
  .education-card {
    max-width: 350px;
    height: 300px;
    text-align: left;
  }
}
</style>
