<template>
  <ion-page>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Hello {{$store.state.person.name}}</ion-title>
        </ion-toolbar> 
      </ion-header>
      <ion-content fullscreen>
        <ion-card>
          <ion-card-content class="content">
            <img v-if="sexImage" src="https://imgs.search.brave.com/tcz74V0AanD5x4InfWV0EUjrR6GHUxrBgfFGgm6az-I/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/NWl4RTZsQnltWEx3/aUxwOE9DWHJ3SGFK/USZwaWQ9QXBp" :alt="$store.state.person.gender">
            <img v-else src="https://imgs.search.brave.com/SUtto9r0Jze_ErLWA3Y2CxZxJByptGXCKm1YwwbLCuI/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/ZU0tOXZ5Q2wzUzIz/bnB5TUdNN3RRSGFK/USZwaWQ9QXBp" :alt="$store.state.person.gender"/>
          </ion-card-content>
          <ion-card-content class="content">
            <p class="info"><span :class="sexClass">{{info}}</span></p>
          </ion-card-content>
          <ion-card-content class="content">
            <div>
              <label for="name">
                <input type="text" name="name" id="name" v-model="name">
              </label>
            </div>
            <div>
              <label for="age">
                <input type="number" name="age" id="age" v-model="age">
              </label>
            </div>
            <div>
              <label for="gender">
                <select name="gender" id="gender" v-model="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <div>
              <button @click="changeInfo()">change info</button>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
// import Person from '@/person';

const {
  log
} = console
export default defineComponent({
  name: "Gender",
  components: { IonHeader, IonPage, IonTitle, IonToolbar },
  computed: {
    sexImage() { 
      if (this.$store.state.person.gender.toLowerCase().includes('f')) {
        return true;
      } else {
        return false
      }
    },
    sexClass() { 
      return this.$store.state.person.gender.toLowerCase().includes('f') ? 'female' : 'male' 
    },
    info() {
      return `${this.$store.state.person.name} is a ${this.$store.state.person.gender} and he have ${this.$store.state.person.age} years`
    }
  },
  data() {
    return {
      name: '',
      age: 0,
      gender: 'male'
    }
  },
  methods: {
    changeInfo() {
      // const prs = new Person(this.$store.state.person.name, this.$store.state.person.age, this.$store.state.person.gender)
      // const data = prs.changeDinamicPerson()
      // this.$store.commit('setInfo', {name: prs.name, age: prs.age, gender: prs.gender})
      // log(prs, data)
      if(this.name !== '') {
        const newPerson = {
          name: this.name, 
          age: this.age, 
          gender: this.gender
        }
        this.$store.commit('setInfo', newPerson)
        log(newPerson, this.$store)
      }
      return this.info
    }
  }
});
</script>

<style scoped>
.info {
  font-size: 20px;
  color: white;
}
.female {
  font-weight: 600;
  color:rgb(228, 134, 226);
}
.male {
  font-weight: 600;
  color:rgb(42, 128, 242);
}
button {
  width: 100%;
  border-radius: 4px; 
  padding: 15px;
  color:rgb(39, 195, 28);
  background:#ffffff;
   box-shadow: -1px 1px 2px 1px rgb(39, 195, 28);
}
button:active {
  width: 100%;
  padding: 15px;
  color:#ffffff;
  background:rgb(39, 195, 28);
  box-shadow: -1px 1px 2px 1px #ffffff;
}

.content {
  text-align: center;
}

#name, #age, #gender {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>