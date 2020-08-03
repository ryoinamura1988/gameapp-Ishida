<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
  </div>
</template>

<script>
export default{
  data(){
    return{
      text:null
    }
  },
  methods:{
    
  }
}

</script>

<style>
 .input-container{
  padding: 10px;
  height: 100%;
}

textarea{
  width: 100%;
  height: 100%;
}
</style>