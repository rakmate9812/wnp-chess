<template>
  <div>
    <h1>Game</h1>
    <nav>
      <button @click="backToHome">Back to Home</button>
    </nav>
    <div id="game">
      <p>Room ID :{{ roomId }}</p>
      <p>Moves :{{ roomData.moves }}</p>
      <p>Time control :{{ roomData.timecontrol }}</p>
    </div>
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
      roomData: defaultRoomData,
      roomId: "",
    };
  },

  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },

  async created() {
    // check if the room contains any data
    let isRoomExists = true;

    // check if the room exists
    await get(child(ref(getDatabase()), "room/" + this.$route.params.id))
      .then((snapshot) => {
        const data = snapshot.val();
        if (!data) isRoomExists = false;
      })
      .catch((error) => {
        console.error(error);
      });

    if (!isRoomExists) {
      alert("No room exists with this ID!");
      this.$router.push("/");
      return;
    }

    // get the room data, and set an event listener to the real-time db
    this.roomId = this.$route.params.id.toString(); // this is only for the displaying of the id
    const dbRef = ref(db, "room/" + this.$route.params.id); // getting the database reference of the object
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      this.roomData = {
        moves: data.moves,
        timecontrol: data.timecontrol,
      };
    });
  },
});
</script>
