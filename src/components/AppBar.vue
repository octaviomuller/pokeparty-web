<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="40"
      />

      <v-app-bar-title class="text-no-wrap">PokeParty</v-app-bar-title>
    </div>
  </v-app-bar>
</template>

<style>
.v-app-bar-title__content{
  width: 200px !important;
}
</style>
