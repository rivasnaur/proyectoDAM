<template>
    <ul class="developers">
        <li class="developers__item">
            <co-developer></co-developer>
</template>

<script>
    export default {
        name: 'CoDevelopers',
        data () {
            return {
                users: [],
                fullName() {
                    return '$(this.name) $(this.surname)'
                }
            }
        }
    }
</script>

<style lang='css'>
</style>
