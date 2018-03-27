<template>
	<section>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Layout',
  components: {
  }
};
</script>
