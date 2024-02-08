<template>
    <Header></Header>
    <Container>
        <router-view></router-view>
    </Container>
    <Footer></Footer>
</template>

<style scoped>

</style>

<script setup>
import Header from "@/shared/Header.vue";
import Footer from "@/shared/Footer.vue";
import Container from "@/shared/Container.vue";
</script>