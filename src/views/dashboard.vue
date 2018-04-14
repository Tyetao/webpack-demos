<template>
  <section>
		<vue-button @on-button="showModal = true" btn-text="显示弹框" btn-type="success"></vue-button>
    <vue-modal v-if="showModal" :modal-mask-able="modalMaskAble" :showModal="showModal" :modal-style="modalStyle" @on-close="showModal = false" @on-ok="showModal = false"></vue-modal>
    <div class="block">
      <vue-button btn-text="Primary" btn-type="primary"></vue-button>
      <vue-button btn-text="Secondary" btn-type="secondary"></vue-button>
      <vue-button btn-text="Success" btn-type="success"></vue-button>
      <vue-button btn-text="Danger" btn-type="danger"></vue-button>
      <vue-button btn-text="Warning" btn-type="warning"></vue-button>
      <vue-button btn-text="Info" btn-type="info"></vue-button>
      <vue-button btn-text="Light" btn-type="light"></vue-button>
      <vue-button btn-text="Dark" btn-type="dark"></vue-button>
      <vue-button btn-text="Link" btn-type="link"></vue-button>
    </div>
    <div class="block">
      <vue-button btn-text="Primary" btn-outline="primary"></vue-button>
      <vue-button btn-text="Secondary" btn-outline="secondary"></vue-button>
      <vue-button btn-text="Success" btn-outline="success"></vue-button>
      <vue-button btn-text="Danger" btn-outline="danger"></vue-button>
      <vue-button btn-text="Warning" btn-outline="warning"></vue-button>
      <vue-button btn-text="Info" btn-outline="info"></vue-button>
      <vue-button btn-text="Light" btn-outline="light"></vue-button>
      <vue-button btn-text="Dark" btn-outline="dark"></vue-button>
      <vue-button btn-text="Link" btn-outline="link"></vue-button>
    </div>
    <div class="block">
        <vue-button btn-text="Large button" btn-type="primary" btn-size="lg"></vue-button>
        <vue-button btn-text="Default button" btn-type="primary"></vue-button>
        <vue-button btn-text="Small button" btn-type="primary" btn-size="sm"></vue-button>
    </div>
    <div class="block">
        <vue-button btn-text="Large block button" btn-type="primary" btn-size="lg" btn-block="true"></vue-button>
        <vue-button btn-text="Small block button" btn-type="primary" btn-size="sm" btn-block="true"></vue-button>
    </div>
    <div class="block">
        <vue-button btn-text="Primary" btn-type="primary" btn-size="lg" btn-active="true"></vue-button>
    </div>

    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="bounce">
      <p v-if="show">hello</p>
    </transition>
  </section>
</template>

<script>
import vueModal from '~/Modal';
import vueButton from '~/Button';
export default {
  name: 'dashboard',
  data () {
    return {
      show: true,
      showModal: false,
      modalMaskAble: false,
      modalStyle: {
        width: 600
      }
    };
  },
  components: {
    vueModal,
    vueButton
  }
};
</script>
<style lang="scss" scoped>
  .modal-container .modal-header[data-v-d0325b66]{
    text-align: left;
  }
  .block{
    margin-top: 20px;
  }
</style>
