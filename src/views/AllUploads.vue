<template>
  <ion-page>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>SIMBA</ion-title>
        </ion-toolbar> </ion-header
      >,
      <ion-content fullscreen>
        <ion-card>
          <img src="https://imgs.search.brave.com/w_hjg5XMPAzL-boEl8DN3xVliJJPe2-fvcGQWxWGEwM/rs:fit:431:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/UFV5Q0NSOTc1cG1u/UVlGcmlDLVBnSGFJ/SiZwaWQ9QXBp" />
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
import { defineComponent } from "vue";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  name: "AllUploads",
  components: { IonHeader, IonPage, IonTitle, IonToolbar },
});
</script>
