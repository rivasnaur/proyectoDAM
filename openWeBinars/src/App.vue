<template lang='html'>  
  <div class='codit'>
    <div class='container'>
      <nav class='menu'>
        <co-search>
           v-on:search:'onSearch'
        </co-search>
        <co-bookmarks></co-bookmarks>
      </nav>
      <main class='content'>
        <header class='content__header'>
          <co-logo></co-logo>
        </header>
        <co-developers></co-developers>
      </main>
    </div>
  </div>
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
      CoDevelopers: () => ({
        component: import ('@/components/CoDevelopers'),
        delay: 400,
        timeout: 5000,
        loading: CoLoading, //componentes para cargar mientras carga, o si da error
        error: CoErrorComponent
      })
    }
  }
</script>

<style lang='css'>

</style>
