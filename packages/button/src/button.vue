<template>
  <button 
    class="chj-button"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="buttonDisabled || loading"
    :type="nativeType"
    :class="[
      type ? 'chj-button--' + type : '',
      buttonSize ? 'chj-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="chj-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'ChjButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      buttonSize() {
        return this.size;
      },
      buttonDisabled() {
        return this.disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style scoped>
/* .chj-button {
    width: 200px;
    height: 100px;
}
.is-disabled {
    color: #C0C4CC;
    background-color: blue;
    border-color: #EBEEF5;
} */
</style>
