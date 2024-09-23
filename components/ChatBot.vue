<template>
    <div>
      <button
        @click="toggleChat"
        class="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <img src="@/assets/facebook-messenger.png" alt="Chat Logo" class="w-8 h-8" />
      </button>
      
      <div v-if="isChatOpen" class="fixed bottom-16 right-5 bg-white shadow-lg rounded p-4 w-80 max-w-xs">
        <div class="chat-messages overflow-y-auto max-h-60">
          <div v-for="message in messages" :key="message.id" class="my-2">
            <strong>{{ message.sender }}:</strong> {{ message.text }}
          </div>
        </div>
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
          class="border p-2 w-full mt-2 rounded"
        />
        <div v-if="loading" class="text-blue-500 mt-2">Sending...</div>
      </div>
    </div>
</template>

<script>
import { db } from '~/plugins/firebase'; // Import Firestore
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

export default {
    data() {
      return {
        isChatOpen: false,
        newMessage: '',
        messages: [],
        loading: false, // Track loading state
      };
    },
    methods: {
      toggleChat() {
        this.isChatOpen = !this.isChatOpen;
      },
      async sendMessage() {
        if (this.newMessage.trim()) {
          this.loading = true; // Set loading state
          try {
            await addDoc(collection(db, 'messages'), {
              text: this.newMessage,
              sender: 'User', // Replace with actual user data if available
              timestamp: new Date(),
            });
            this.newMessage = ''; // Clear the input
          } catch (error) {
            console.error("Error sending message: ", error);
          } finally {
            this.loading = false; // Reset loading state
          }
        }
      },
      listenForMessages() {
        onSnapshot(collection(db, 'messages'), (snapshot) => {
          this.messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
      },
    },
    created() {
      this.listenForMessages(); // Start listening for messages
    },
};
</script>

<style scoped>
.chat-messages {
    max-height: 300px;
    overflow-y: auto;
}
</style>
