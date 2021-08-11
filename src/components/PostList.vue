<template>
  <div v-if="posts.length > 0">
    <h3 class="subtitle">List of Posts</h3>
    <post-item 
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else class="message">
    There is no posts so far...
  </h2>
</template>
<script>
import PostItem from './PostItem'
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.message {
  color: red;
  font-weight: bold;
  text-align: center;
}

.subtitle {
  margin-left: 15px;
}
</style>