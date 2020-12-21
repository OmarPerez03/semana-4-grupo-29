<template>
    <div id="team" class="team">
        <div class="card border-info text-info">
            <div class="d-flex justify-content-center p-2">
                <img :src="member.image" alt="foto" heidht="200" width=200>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{member.nombre}}</h5>
                <p class="card-text">{{member.descripcion}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{member.codigo}}. {{member.rol}}</small>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>


<style scoped>

</style>