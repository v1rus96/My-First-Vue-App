<template>
    <div class="post">
      <div>
        <div class="name"><strong>Name:</strong> {{ post.title }}</div>
        <div class="description"><strong>Description:</strong> {{ post.body }}</div>
      </div>
      <div class="post-buttons">
          <primary-button
            class="delete-button"
            @click="$emit('remove', post)"
          >
            <font-awesome-icon icon="trash" />
          </primary-button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.post {
  padding: 15px;
  box-shadow: 0px 4px #D2D5DA;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.delete-button {
    margin: 5px;
    background-color: #c23333;
    box-shadow: none;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 100px;
}

.button:active {
    background-color: #7c1e1e;
    box-shadow: none;
}

.button:hover {
    background-color: #aa2929;
}

.name {
    margin: 10px;
}

.description {
    margin: 10px;
}
</style>