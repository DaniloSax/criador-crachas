<template>
 <layout-default>
   <router-view></router-view>
 </layout-default>
</template>

<script>
import LayoutDefault from './components/layout/LayoutDefault'
export default {
  name: 'App',

  components: {
    LayoutDefault
  },

  data: () => ({
    //
  }),
};
</script>
