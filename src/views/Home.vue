<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-card>
        <ion-card-header>
          <h2>This is the Camera Page</h2>
        </ion-card-header>
        <ion-card-content>
          <div>Showing the use of the Capacitor Camera plugin and the vue-router for changing pages in the application</div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  toastController,
} from "@ionic/vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
};
</script>

<style scoped>
.image-wrapper {
  text-align: center;
  height: 210px;
  padding: 6px;
  background: whitesmoke;
}
img {
  object-fit: contain;
  height: 200px !important;
}
</style>