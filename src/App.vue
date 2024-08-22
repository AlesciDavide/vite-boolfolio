<script >
import MainHeader from './components/MainHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components:{
    MainHeader,
    AppFooter,
  },
    data() {
        return{
            
        }
    }
}
</script>

<template>
  <MainHeader/>
  <Router-view>

  </Router-view>
  <AppFooter/>
</template>

<style lang="scss">
@import './styles/general.scss';

</style>
