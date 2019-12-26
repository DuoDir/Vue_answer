<template>
  <div>
    <itemcontainer father-component="item"></itemcontainer>
  </div>
</template>
<script>
import itemcontainer from "../../components/itemcontainer";
import { mapActions } from "vuex";
export default {
  name: "home",
  components: { itemcontainer },
  created() {
    this.remember_time();
  },
  methods: {
    ...mapActions(["remember_time"])
  }
};
</script>

<style lang="less">
</style>