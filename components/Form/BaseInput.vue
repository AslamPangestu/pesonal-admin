<template>
  <div
    class="form-group"
    :class="{
      'input-group-focus': focused,
      'has-danger': error,
      'has-success': !error && touched,
      'has-label': label,
      'has-icon': hasIcon,
    }"
  >
    <slot name="label">
      <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
    </slot>
    <div class="mb-0" :class="{ 'input-group': hasIcon }">
      <slot name="addonLeft">
        <span v-if="addonLeftIcon" class="input-group-prepend">
          <div class="input-group-text"><i :class="addonLeftIcon" /></div>
        </span>
      </slot>
      <slot>
        <input
          :value="value"
          v-bind="$attrs"
          :class="`form-control ${type === 'password' && 'password'}`"
          aria-describedby="addon-right addon-left"
          v-on="listeners"
        />
      </slot>
      <slot name="addonRight">
        <span v-if="addonRightIcon" class="input-group-append">
          <div class="input-group-text"><i :class="addonRightIcon"></i></div>
        </span>
      </slot>
    </div>

    <slot v-if="error || $slots.error" name="error">
      <label class="error">{{ error }}</label>
    </slot>
    <slot name="helperText"></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    required: Boolean,
    type: {
      type: String,
      description: 'Input type',
      default: '',
    },
    label: {
      type: String,
      description: 'Input label',
      default: '',
    },
    error: {
      type: String,
      description: 'Input error',
      default: '',
    },
    value: {
      type: [String, Number],
      description: 'Input value',
      default: '',
    },
    addonRightIcon: {
      type: String,
      description: 'Input icon on the right',
      default: '',
    },
    addonLeftIcon: {
      type: String,
      description: 'Input icon on the left',
      default: '',
    },
  },
  data() {
    return {
      focused: false,
      touched: false,
    }
  },
  computed: {
    hasIcon() {
      return this.hasLeftAddon || this.hasRightAddon
    },
    hasLeftAddon() {
      const { addonLeft } = this.$slots
      return addonLeft !== undefined || this.addonLeftIcon !== undefined
    },
    hasRightAddon() {
      const { addonRight } = this.$slots
      return addonRight !== undefined || this.addonRightIcon !== undefined
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus,
      }
    },
  },
  methods: {
    onInput(evt) {
      if (!this.touched) {
        this.touched = true
      }
      this.$emit('input', evt.target.value)
    },
    onFocus(evt) {
      this.focused = true
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      this.focused = false
      this.$emit('blur', evt)
    },
  },
}
</script>

<style scoped>
.password {
  -webkit-text-security: disc;
  -mox-text-security: disc;
  font-family: text-security-disc;
}
</style>
