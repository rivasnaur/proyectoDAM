<template lang='html'>
    <h1 class='logo'>{{ appName }} </h1>
</template>

<script>
    export default {
        name: 'CoLogo',
        data () {
            return {
                appName: 'Codit'
            }
        }
    }

</script>

<style lang="css">

    .logo {
        background-color: #62AB67
    }

</style>