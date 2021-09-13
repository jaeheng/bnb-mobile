<template>
  <div class="bnb-alert">
    Bnb-Alert ( {{ count }} ) <button @click="count++">click</button>
  </div>
</template>

<script>
export default {
  name: 'bnb-alert',
  data () {
    return {
      count: 0
    }
  }
}
</script>
