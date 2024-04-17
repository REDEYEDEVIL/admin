<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentSlideIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <!-- Display your content here, e.g., images -->
        <img :src="slide.image" :alt="slide.description" />
      </div>
    </div>

    <button @click="prevSlide" class="carousel-control prev">&lt;</button>
    <button @click="nextSlide" class="carousel-control next">&gt;</button>

    <div class="indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlideIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        { image: 'https://via.placeholder.com/1024x480', description: 'Slide 1' },
        { image: 'https://via.placeholder.com/1024x480', description: 'Slide 2' },
        { image: 'https://via.placeholder.com/1024x480', description: 'Slide 3' },
        // Add more slides as needed
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.slides.length - 1;
      }
    },
    goToSlide(index) {
      this.currentSlideIndex = index;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.indicators span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background-color: white;
}
</style>
