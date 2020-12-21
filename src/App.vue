<template>
  <div id="app">

    <image-text></image-text>
    <carousel-section></carousel-section>
    <services-section></services-section>

    <!--  news -->
    <div id="news" class="container-fluid">
      <news-section></news-section>
    </div>
    <!--  news -->

    <!--  members -->
    <div class="container-fluid">
      <div class="row justify-content-center mb-5">
        <div class="col mt-5" v-for="(miembro, index) of Team" :key="index" >
          <team-card :member="miembro"></team-card>
        </div>  
      </div>
    </div>
    <!--  members -->

    <final-section></final-section>

  </div>
</template>


<script>

import ImageText from './components/ImageText.vue';
import CarouselSection from './components/CarouselSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FinalSection from './components/FinalSection.vue';
import TeamCard from './components/TeamCard.vue';
import NewsSection from "./components/NewsSection.vue"

export default {
  name: 'App',
  components:{
    ImageText,
    CarouselSection,
    ServicesSection,
    FinalSection,
    TeamCard,
    NewsSection
  },
  data(){
    return{
      Team: [
      {
        codigo : 1 ,
        nombre : 'Luisa María' ,
        descripcion : 'Egresada del programa de Matemáticas en la Universidad Nacional de Colombia sede Medellín. Intereses en ciencia de datos y machine learning.' ,
        rol : 'Desarrolladora' ,
        image : 'https://i.ibb.co/gvpPsqx/foto-Luisa4.png'
      },
      {
        codigo : 2 ,
        nombre : 'Omar Andrés' ,
        descripcion : 'Estudiante ingenieria de sistemas en la Universidad Central con diplomado en programacion java en la Universidad Politecnica de Colombia.' ,
        rol : 'Desarrollador' ,
        image : 'https://i.ibb.co/QFqrG46/omar-Circular.png'
      },
      {
        codigo : 3 ,
        nombre : 'Martha Cecilia' ,
        descripcion : 'Egresada de la universidad Real de Colombia del técnico en programación, actualmente estudia en el SENA mejorando su currículo profesional.' ,
        rol : 'Desarrolladora' ,
        image : 'https://i.ibb.co/k1WXhww/martha-Circular.png'
      }
      ]
    }
  }
}
</script>