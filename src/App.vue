<template>
<div>
<NavBar />
<!-- Router view -->
<div class="container mt-5">
<router-view></router-view>
</div>
</div>
</template>
<script>
import NavBar from './views/NavBar.vue'
export default {
name: 'App',
components: {
NavBar
}
}
</script>