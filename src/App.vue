<template>
  <div class="app">
    <h1 class="title">Posts Page</h1>
    <primary-button
      class="dialog-button"
      @click="showDialog"
    >
      Create post
    </primary-button>
    <form-dialog v-model:show="dialogVisibility">
      <post-form
      @create="createPost"
    />
    </form-dialog>
    <post-list 
      :posts="posts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import axios from 'axios'
import PrimaryButton from './components/UI/PrimaryButton.vue';
export default {
  components: {
      PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisibility: false,
      isPostLoading: false, 
    };
  },
  methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisibility = false
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.dialogVisibility = true
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data
        } catch (e) {
          alert('Error!')
        } finally {
          this.isPostLoading = false
        }
      }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap');

/* scored makes style applicable to this component */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

.app {
  padding: 5%;
}

.title {
  margin-left: 15px;
}

.dialog-button {
  margin-left: 15px;
  margin-top: 10px;
  padding: 10px;
}

</style>