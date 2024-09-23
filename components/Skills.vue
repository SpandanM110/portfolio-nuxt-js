<template>
  <section class="my-8">
    <h2 class="text-2xl font-semibold mb-4">Skills</h2>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="skill in skills" :key="skill" class="bg-black-100 p-2 rounded">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        'Python',

        'JavaScript',
        'TypeScript',

        'Tailwind CSS',
        'ReactJS',
        'Next.js',
        'Nuxt.js',
        'Node.js',
        'Express.js',
        'Django',
        'Flask',
        'Git',
        'Firebase',
        'Supabase',
        'Stripe',
        'SQL',
        'MongoDB',
        'AWS',
        'Azure',
        'Blockchain',
        'Solana',
        'GEN AI',
        'Public Speaking',
        'Project Management'
      ]
    }
  }
}
</script>
