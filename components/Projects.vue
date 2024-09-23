<template>
  <section class="my-8">
    <h2 class="text-2xl font-semibold mb-4">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="project in projects" :key="project.title" class="border p-4 rounded">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="mt-2">{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'deSchoolmate',
          description: 'A Student Study Management System that provides productive tools and a books API, improving engagement and reducing planning time by 20%.',
          link: 'https://github.com/SpandanM110/De-SchoolMate'
        },
        {
          title: 'MediMerge',
          description: 'Optimizes healthcare efficiency by automating tasks and providing real-time data for personalized treatment.',
          link: 'https://github.com/your-github-link/MediMerge'
        },
        {
          title: 'Mitigrator',
          description: 'A Cloud/Platform Migrator that facilitates cloud migration and code conversion during emergencies, increasing efficiency by 25% using GEN AI.',
          link: 'https://github.com/SpandanM110/Mitigrator'
        },
        {
          title: 'Rail Madad AI',
          description: 'AI platform to support Indian Railways with real-time data and predictive analysis, reducing delays by 30%.',
          link: 'https://github.com/SpandanM110/Rail-Madad-AI'
        }
      ]
    }
  }
}
</script>
