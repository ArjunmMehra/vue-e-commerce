<template>
    <div class="elevation-2">
        <div>
            <slot>
                Hello
            </slot>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.categoryPanel{
  position: fixed;
}
</style>

