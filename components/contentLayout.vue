<template>
  <section class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <slot name="header">region header</slot>
      </div>
      <div id="sidebar" class="column">
        <slot name="sidebar">region sidebar</slot>
      </div>
    </div>
  </section>
</template>