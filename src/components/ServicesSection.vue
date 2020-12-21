<template>
  <!-- services -->
  <div id="services" class="container-fluid">
    <div class="row justify-content-center mb-5">
      <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">
        <div class="card">
          <div class="d-flex justify-content-center p-2">
            <img src="images/ducha1.jpeg" alt="ducha" width="300" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Baño</h5>
            <p class="card-text">
              Tu mascota recibirá un refrescante y delicioso baño a temperatura
              según el clima. Este servicio incluye revisión veterinaria de la
              piel, baño con productos especiales según su pelaje, secado, corte
              de uñas, enjuague bucal, cepillado, perfume y un juguete.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">
        <div class="card">
          <div class="d-flex justify-content-center p-2">
            <img src="images/corte1.jpeg" alt="corte" width="300" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Corte</h5>
            <p class="card-text">
              Tu mascota lucirá un hermoso look acorde a su raza y tus gustos.
              Este servicio incluye corte, cepillado y un lindo accesorio.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-xs-12 col-lg-4 mt-5">
        <div class="card">
          <div class="d-flex justify-content-center p-2">
            <img src="images/guarderia1.jpeg" alt="ducha" width="300" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Guardería</h5>
            <p class="card-text">
              Diseñamos el mejor plan para recrear y relajar a tu mascota,
              acompañándola para que disfrute de una sana experiencia. Este
              servicio es completamente flexible para adaptarse a tu necesidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ServicesSection",
};
</script>


<style scoped>
.card {
  border-style: none;
}
h5,
p {
  text-align: justify;
}
</style>