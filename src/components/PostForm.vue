<template>
    <form @submit.prevent>
      <h4>Create post</h4>
      <primary-input
        v-model="post.title"
        type="text"
        placeholder="Title"
      />
      <primary-input
        v-model="post.body"
        type="text"
        placeholder="Description"
      />
      <primary-button
        class="create-button" 
        @click="createPost"
      >
      Create
      </primary-button>
    </form>
</template>
<script>
export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now()
        this.$emit('create', this.post) //$emit creates a event for the parent to subscribe
        this.post = {
          title: '',
          body: ''
        }
      }
    }
}
</script>
<style scoped>

form {
  display: flex;
  flex-direction: column;
}

.create-button {
  margin-top: 15px;
}

</style>