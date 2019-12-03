<template>
  <div class="container">
    <table class="text-left w-full">
      <thead class="bg-blue flex text-white w-full">
        <tr class="flex w-full mb-4">
          <th class="p-4 w-1/4 font-bold">name</th>
          <th class="p-4 w-1/4 font-bold">surname</th>
          <th class="p-4 w-1/4 font-bold">gender</th>
          <th class="p-4 w-1/4 font-bold">region</th>
        </tr>
      </thead>
      <tbody
        class="bg-blue flex flex-col items-center justify-between overflow-y-scroll w-full"
        style="height: 50vh;"
      >
        <tr class="flex w-full mb-4" v-for="(post, index) in posts" :key="index">
          <td class="p-4 w-1/4 text-white">{{ post.name }}</td>
          <td class="p-4 w-1/4 text-white">{{ post.surname }}</td>
          <td class="p-4 w-1/4 text-white">{{ post.gender }}</td>
          <td class="p-4 w-1/4 text-white">{{ post.region }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store/index";
import { mapState } from "vuex";

export default {
  fetch({ store }) {
    if (store.state.posts) return;
    return Promise.all([store.dispatch("nuxtServerInit")]);
  },
  computed: {
    ...mapState(["posts", "nuxtServerInit"])
  },

  created() {
    this.$store.dispatch("nuxtServerInit");
  }
};
</script>

<style></style>
