<template>
  <div>
    <h1>Create Game</h1>
    <nav>
      <button @click="backToHome">Back to Home</button>
    </nav>
    <form id="form" @submit.prevent="create">
      <div><span>Moves:</span> <input v-model="data.moves" /></div>
      <div><span>Timecontrol:</span><input v-model="data.timecontrol" /></div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, set, get, onValue, child, getDatabase } from "firebase/database";
import RoomData, { defaultRoomData } from "@/models/RoomData";
import db from "@/firebase";

export default defineComponent({
  data() {
    return {
      moves: "",
      timecontrol: "",
      data: defaultRoomData,
    };
  },

  methods: {
    backToHome() {
      this.$router.push("/");
    },

    create() {
      const rng = (Math.random() + 1).toString(36).substring(7);

      const reference = ref(db, "room/" + rng); // if there is no reference to this node, firebase creates one, if the reference exists, firebase overwrites it

      set(reference, this.data); // creating the room

      this.$router.push("/game/" + rng);
    },
  },
});
</script>
