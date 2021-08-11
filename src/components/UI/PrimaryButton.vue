<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'primary-button'
}
</script>

<style>
.button {
  align-self: flex-end;
  color: white;
  border: none;
  background-color: #2FB275;
  border-radius: 8px;
  min-width: 30px;
  min-height: 30px;
  padding: 10px;
  box-shadow: 0px 4px #23885A;
}

.button:active {
    background-color: #279E67;
    box-shadow: 0px 1px #23885A;
    transition: 0.1s;
}

.button:hover {
    background-color: #2DAE72;
}
</style>