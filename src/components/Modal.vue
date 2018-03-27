<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <a class="model-close" href="javascript:;"  @click="$emit('close')">
            <i class="ion-close-circled"></i>
          </a>

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="$emit('close')">
                取消
              </button>
              <button @click="$emit('close')">
                确定
              </button>
            </slot>
          </div>
        </div>  
      </div>
    </div>
  </transition>
</template>
<style scoped>
.model-close {
  position: absolute;
  right: 15px;
  top: 15px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  padding: 15px;
}

.modal-footer {
  border-top: 1px solid #e5e5e5;
  padding: 15px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
<script>
export default {
  name: 'Model'
};
</script>
