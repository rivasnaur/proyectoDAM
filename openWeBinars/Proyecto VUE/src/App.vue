<template lang='pug' src='./App.pug'>  

</template>

<script>
  import Cologo from '@/components/Cologo'
  import CoSearch from '@/components/CoSearch'
  import CoBookmarks from '@/components/CoBookmarks'
  import CoDevelopers from '@/components/CoDevelopers'

  export default {
    name: 'CoApp',
    methods: {
      onSearch(searchCriteria) {
        console.log('Search', searchCriteria)
      }
    },
    components: {
      CoLogo,
      CoSearch,
      CoBookmarks,
      CoDevelopers: () => import ('@/components/CoDevelopers')

    }
  }
</script>

<style lang='css'>
  @import 'assets/css/reset';
  @import 'assets/css/global';
</style>

<style lang="css" scoped>
  
</style>
