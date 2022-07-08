<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="list" href="/tabs/list">
            <ion-icon :icon="triangle" />
            <ion-label>Pumba</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="upload" href="/tabs/upload">
            <ion-icon :icon="ellipse" />
            <ion-label>Simba</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="geolocation" href="/tabs/geolocation">
            <ion-icon :icon="square" />
            <ion-label>Timon</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="gender" href="/tabs/gender">
            <ion-icon :icon="transgender" />
            <ion-label>Gender</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage
} from '@ionic/vue';
import { ellipse, square, triangle, transgender } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { 
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage
   },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      transgender
    }
  }
};
</script>