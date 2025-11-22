<template>
    <v-col
        cols="12"
        md="6"
        class="d-none d-md-flex justify-center align-center"
      >
        <v-carousel v-model="carouselIndex" hide-delimiters>
          <v-carousel-item v-for="(image, index) in images" :key="index">
             <v-img :src="image.img" alt="carousel image">
              <div class="caption" slot="bottom">
                <h2>{{ image.title }}</h2>
                <p>{{ image.description }}</p>
              </div>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
</template>
<script setup>
import { ref } from 'vue';

    const carouselIndex = ref(0)
    const images = [
         {
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
            title: 'USER PORTAL',
            description:
            'Developed an event booking system integrated with M-Pesa, allowing users to seamlessly book and pay for events directly through the platform.',
        },
        {
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
            title: 'USER PORTAL',
            description: 'Your data is protected with enterprise-grade encryption and safeguards.',
        },
        {
            img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
            title: 'USER PORTAL',
            description:
            'Designed and launched a high-performance corporate website with modern UI/UX and SEO optimizations.',
        },
    ];
</script>
<style scoped>
/* Add some basic styles */
.v-card {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>