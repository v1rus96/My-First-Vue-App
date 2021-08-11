<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
export default {
    name: 'primary-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.input {
  margin: 10px;
  background: #fff;
  color: #525865;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  font-size: 1em;
  line-height: 1.45;
  outline: none;
  padding: 0.6em 1.45em 0.7em;
  -webkit-transition: .18s ease-out;
  -moz-transition: .18s ease-out;
  -o-transition: .18s ease-out;
  transition: .18s ease-out;
}

.input:hover {
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
}

.input:focus {
  color: #4b515d;
  border: 1px solid #B8B6B6;
  box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
}
</style>