<template>
  <ion-page>
    <ion-header translucent>
        <ion-toolbar>
          <ion-title>TIMON</ion-title>
        </ion-toolbar> </ion-header
      >,
      <ion-content fullscreen>
        <ion-card>
          <img src="https://imgs.search.brave.com/BZFc915pZ9-ezHdKwyIr0SbGmniGYt0kTYTPOc_HX-k/rs:fit:375:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/Q3ZuZGI4Sk8waERZ/M0dpTHpqZjh3SGFK/VyZwaWQ9QXBp" />
          <ion-card-header>
            <ion-card-subtitle>Destination</ion-card-subtitle>
            <ion-card-title>Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
      </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  name: 'Geolocation',
  components: { IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>