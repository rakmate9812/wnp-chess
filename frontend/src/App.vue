<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="getRoom(65)">GetRoom 65</button>
      <button @click="modifyRoom(65)">ModifyRoom 65</button>
      <button @click="deleteRoom(65)">DeleteRoom 65</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import db from "./firebase.js";
import { ref, set, onValue, remove } from "firebase/database";

export default {
  methods: {
    createRoom() {
      const rng = Math.floor(Math.random() * 150);
      // console.log(rng);

      //ha nincs ilyen reference h db/room akor létre is hozza
      const reference = ref(db, "room/" + rng); // ha létezik a reference a db-ben, akkor igazából egy update fog lefutni rá

      // tehát itt ha létre akarom hozni, de van már ilyen reference, akkor megkapj a a eglévő ref a set-tel beállított értékeket
      set(reference, {
        moves: "e4, c5",
        timeleft: "3:00",
      });
    },

    getRoom(roomId) {
      console.log("asd");
      const roomData = ref(db, "room/" + roomId /* + "/moves"*/);

      // ez a cucc realtime keri le a db-t, tehát ha módosítok a db-oldalt valamit akkor küldi is egyből a kliensnek az új data-t, nézzed a konzolt amikor megfuttatod a modifyRoom-ot
      onValue(roomData, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
      });
    },

    modifyRoom(roomId) {
      const reference = ref(db, "room/" + roomId); // ha nem létezik a room, akkor nem modify-olja hanem létrehozza, ez nem jó!!!!!!!
      // érdekes lenne megpróbálni az update functionnel az hogy hogy viselkedik

      set(reference, {
        moves: "e4, c5, d4, d5, exd5",
        timeleft: `2:${Math.floor(Math.random() * 60)}`,
      });
    },

    deleteRoom(roomId) {
      const reference = ref(db, "room/" + roomId);

      remove(reference);
    },
  },

  beforeMount() {
    console.log("beforemount");
  },

  created() {
    this.createRoom();
  },
};
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
