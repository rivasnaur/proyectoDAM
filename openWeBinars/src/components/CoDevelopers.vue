<template lang='html'>
    <ul class="developers">
        <li class="developers__item">
            <co-developer>
                
            </co-developer>
        </li>
    </ul>
</template>

<script>
    import bus from '@/busdata.js'
    import CoDeveloper from '@/components/CoDeveloper'


    export default {
        name: 'CoDevelopers',
        data () {
            return {
                users: [],                
            }
        },
        mounted () {
            this.getTopUsers()
        },
       methods: {
           getTopUsers () {
               return fetch(
                  `$(process.env.API)`,
                   {
                       headers: {
                           'Authorization': 'token $(process.env.TOKEN)'
                       }
                   }
                )
                 .then(response => response.json())
                 .then(response => response.items)
                 .then(users => users.map(user =! fetch(
                     `${process.env.API}/users/${user.login}`
                 )))
           }
       }
    }
</script>

<style lang='css'>
</style>
