<template>
  <div class="container mx-auto px-4">
    <ThemeToggle>
      <h1 class="text-4xl font-bold text-center my-8">Spandan Mukherjee</h1>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactInfo />
      <ChatBot /> <!-- Include the ChatBot component -->
    </ThemeToggle>
  </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue'
import Skills from '~/components/Skills.vue'
import Projects from '~/components/Projects.vue'
import ContactInfo from '~/components/ContactInfo.vue'
import ThemeToggle from '~/components/ThemeToggle.vue' // Import the ThemeToggle component
import ChatBot from '~/components/ChatBot.vue' // Import the ChatBot component

export default {
  components: {
    AboutMe,
    Skills,
    Projects,
    ContactInfo,
    ThemeToggle,
    ChatBot // Register the ChatBot component
  }
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
