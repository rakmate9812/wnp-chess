<template>
  <div>
    <h1>Home</h1>
    <nav>
      <button @click="createGame">Create Game</button>
      <button @click="joinGame">Join Game</button>
      <button>Play with AI</button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, getDatabase, get, child } from "firebase/database";

export default defineComponent({
  methods: {
    async joinGame() {
      const roomId = window.prompt("Type the game identifier", "") ?? "";

      if (roomId.length !== 5) {
        alert("A game number is 5 characters!");
        return;
      }

      let isRoomExists = true;

      // check if the room exists
      await get(child(ref(getDatabase()), "room/" + roomId))
        .then((snapshot) => {
          const data = snapshot.val();
          if (!data) isRoomExists = false;
        })
        .catch((error) => {
          console.error(error);
        });

      if (!isRoomExists) {
        alert("No game exists with this number!");
        return;
      }

      this.$router.push("/game/" + roomId);
    },

    createGame() {
      this.$router.push("/create");
    },
  },
});
</script>
