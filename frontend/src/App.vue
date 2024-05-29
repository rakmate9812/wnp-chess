<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { ref, set, onValue, remove } from "firebase/database";
// import RoomData, { defaultRoomData } from "./models/RoomData";
// import db from "./firebase";

export default defineComponent({
  methods: {
    // getRoom() {
    //   const roomData = ref(db, "room/" + this.roomId /* + "/moves"*/);
    //   onValue(
    //     roomData,
    //     (snapshot) => {
    //       const data = snapshot.val();
    //       console.log(data);
    //       // this.roomMoves = data.moves;
    //     }
    //     // ,
    //     // {
    //     //   onlyOnce: true,
    //     // }
    //   );
    // },
    //
    // modifyRoom(roomId) {
    //   const reference = ref(db, "room/" + roomId); // if the room doesnt exists, it will vreate a new db reference, not so good behaviour in this case
    //   // try the update funtion
    //   set(reference, {
    //     moves: "e4, c5, d4, d5, exd5",
    //     timeleft: "asd",
    //   });
    // },
    //
    // deleteRoom(roomId) {
    //   const reference = ref(db, "room/" + roomId);
    //   remove(reference);
    // },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
