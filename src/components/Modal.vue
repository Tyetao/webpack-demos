<template>
  <section>
    <transition name="fade">
      <modal-mask :modal-mask-able="modalMaskAble" @on-close="$emit('on-close')">
        <div ref="modalContainer" class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <span>默认头部</span>
            </slot>
            <a v-if="closeBtn" href="javascript:;" class="modal-close" @click="$emit('on-close')">
              <i class="t-icon ion-close-circled"></i>
            </a>
          </div>

          <div class="modal-body">
            <slot name="body">
              默认内容
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <vue-button btn-text="取消" btn-type="danger" @on-button="$emit('on-ok')"></vue-button>
              <vue-button btn-text="确定" btn-type="success" @on-button="$emit('on-close')"></vue-button>
            </slot>
          </div>
        </div>  
      </modal-mask>
    </transition>
  </section>
</template>

<script>
import ModalMask from './ModalMask';
import vueButton from '~/Button';
export default {
  name: 'Modal',
  props: {
    closeBtn: {
      type: Boolean,
      default: true
    },
    modalMaskAble: {
      type: Boolean,
      default: true
    },
    modalStyle: {
      type: Object,
      default: {}
    }
  },
  components: {
    ModalMask,
    vueButton
  },
  mounted () {
    let marginLeft = (this.modalStyle.width || 400) / 2;
    this.$refs.modalContainer.style.width = `${this.modalStyle.width || 400}px`;
    this.$refs.modalContainer.style.marginLeft = `-${marginLeft}px`;
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(0,-50%);
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  .modal-header {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    padding: 15px;
    text-align: center;
    .modal-close {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    span {
      font-size: 14px;
    }
  }
  .modal-body {
    padding: 15px;
  }
  .modal-footer {
    border-top: 1px solid #e5e5e5;
    padding: 15px;
    text-align: right;
  }
}
</style>
