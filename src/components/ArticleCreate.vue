<template>
    <div class="creator">
        <h3>Insert Post</h3>
         <form action="" method="post">
            <fieldset>
                <input name="author" placeholder="Author" type="text" tabindex="1" required autofocus>
            </fieldset>
            <fieldset>
                <input name="title" placeholder="Title" type="text" tabindex="2" required>
            </fieldset>
            <fieldset>
                <input name="subtitle" placeholder="Subtitle" type="text" tabindex="3" required>
            </fieldset>
            <fieldset>
                <input name="media" placeholder="Image" type="url" tabindex="4" required>
            </fieldset>
            <fieldset>
                <textarea name="excerpt" placeholder="Content" tabindex="5" required></textarea>
            </fieldset>
            <input type="hidden" name="date" :value="new Date()">
        </form>
        <fieldset>
                <input name="MongoDB Key" class="mongo-key" type="password" placeholder="MongoDB Key" tabindex="5" required>
        </fieldset>
        <div class="insert-post">
            Insert Post
        </div>
    </div>
</template>

<script>
function buildPostJson() {
    this.post = {};
    this.inputs.forEach(field => {
        this.post[field.name] = field.value;
    });

    return this.post;
}

function insertPost() {
    const newPost = buildPostJson.call(this);
    const mongoKey = this.mongoKey.value;

    fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPost, mongoKey })
    })
    .then(response => response.json({ mongoKey, newPost }))
    .then(response => {
        if (!!response.ok) {
            this.$el.querySelector('form').reset();
            alert('All nice!');
        }
        console.log(response)
    })
    .catch(error => { console.log(error) });
}

export default {
  name: "ArticleCreate",
  components: {},
  props: {},
  data() {
      return {
          insertButton: null,
          post: null,
          inputs: null
      }
  },
  methods: {
      updateVisualizer: function() { this.$emit('updateVisualizer', buildPostJson.call(this)) }
  },
  mounted: function() {
      this.inputs = Array.from(this.$el.querySelectorAll('form input, form textarea'));
      this.mongoKey = this.$el.querySelector('.mongo-key');
      this.insertButton = this.$el.querySelector('.insert-post');

      this.insertButton.addEventListener('click', insertPost.bind(this));
      this.inputs.forEach(field => field.addEventListener('keyup', this.updateVisualizer.bind(this)));
  }
};
</script>

<style scoped>
.creator {
    flex-grow: 1;
    margin: 0 2%;
}

form {
    width: 98%;
}

h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin: 10px 0px;
}

fieldset {
  border: medium none;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
}

input,
textarea {
  width: 94%;
  border: 1px solid #ccc;
  background: #FFF;
  padding: 10px;
}

textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

.insert-post {
    border-radius: 5px;
    padding: 5px 11px;
    border: 1px solid black;
    margin-top: 20px;
    text-align: center;
    width: 92%;
    color: white;
    background-color: #E84C3D;
}

</style>
