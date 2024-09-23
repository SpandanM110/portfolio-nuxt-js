<template>
    <div :class="theme" class="transition-colors duration-300">
      <header class="flex justify-between items-center p-4">
        <h1 class="text-xl">The Resume Theme</h1>
        <button @click="toggleTheme" class="p-2 bg-gray-300 rounded">
          {{ isDark ? 'Light' : 'Dark' }} Mode
        </button>
      </header>
      <main class="p-4">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'The Resume Theme Portfolio',
    data() {
      return {
        isDark: false
      }
    },
    computed: {
      theme() {
        return this.isDark ? 'bg-gray-900 text-white' : 'bg-white text-black';
      }
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      }
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme');
      this.isDark = savedTheme === 'dark';
    }
  }
  </script>
  
  <style>
  body {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  </style>
  