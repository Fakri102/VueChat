<template>
  <div>
    <Navbar />
  </div>

  <main class="content mt-4 shadows-sm p-0 ">
    <div class="bg-secondary text-white">
        <h2 class="p-3">Chat Group</h2>
    </div>
    <div class="chat-wrapper">
        <Chatbox />
        <ChatForm />
    </div>
  </main>

  <footer>
      <Footer />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Chatbox from "../components/chat/Chatbox.vue";
import ChatForm from "../components/chat/Form.vue";
import Footer from '../components/Footer.vue'



export default {
  components: {
    Navbar,
    Chatbox,
    ChatForm,
    Footer
  },
};
</script>
<style>
h2 {
  text-align: center;
  color: whitesmoke;
}
</style>