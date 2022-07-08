<template>
  <ion-page>
    <ion-header translucent>
        <ion-toolbar>
          <ion-title>PUMBA</ion-title>
        </ion-toolbar> </ion-header
      >,
      <ion-content fullscreen>
        <ion-card>
          <img src="https://imgs.search.brave.com/H8qvyppdY-nsUgNlNsF07CtKDcLtx1F2iQlBTfbWLWE/rs:fit:386:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/UVJqV1YyOEQxUU52/S0NlR3ZTT05nSGFK/RyZwaWQ9QXBp" />
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
  name: 'ImageDetail',
  components: { IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>