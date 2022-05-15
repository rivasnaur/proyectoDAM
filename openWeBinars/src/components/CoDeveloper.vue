
<template>
    
</template>

<script>
  export default {
    name: 'CoDeveloper',
    props: {
      avatar: {
        type: String,
        required: true,
        validator (value) {
          return value.startsWith('http')
        },
      },
      name: {
        type: String,
        required: true
      },
      login: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: false
      },
      location: {
        type: String,
        required: false
      },
      company: {
        type: String,
        required: false
      },
      repos: {
        type: Number,
        required: false
      },
      gists: {
        type: Number,
        required: false
      }
    },
    compputed: {
        metadata () {
            let meta = ''

            if(this.email) {
                meta = '${meta} - ${this.email}'
            }

            if(this.location) {
                meta = '${meta} - ${this.location}'
            }

            if(this.company) {
                meta = '${meta} - ${this.company}'
            }
            return meta
        },
        watch: {
          metadata (newValue) {
            console.log('Metadata:', newValue)
          }
        }
        // othermeta: {

        //     get (){
        //         let meta = ''

        //     if(this.email) {
        //         meta = '${meta} - ${this.email}'
        //     }

        //     if(this.location) {
        //         meta = '${meta} - ${this.location}'
        //     }

        //     if(this.company) {
        //         meta = '${meta} - ${this.company}'
        //     }
        //     return meta
        //     }
        // }
        //..      
    }
  }
</script>

<style lang='css'>

</style>