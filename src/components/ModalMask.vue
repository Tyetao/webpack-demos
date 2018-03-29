<template>
  <div class="modal-mask" @click="modalMaskAble && $emit('on-close')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalMask',
  props: {
    modalMaskAble: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
</style>
