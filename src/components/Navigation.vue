<template>
    <header class="top-0 bg-image">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-protoapp-dark-color py-6">
            <!-- Logo -->
            <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
                <img src="../../public/img/logo3.png" alt="Weather Icon" class="h-16">
                 <!-- Sidebar Navigation -->
                <div class="flex sm:hidden">
                    <!-- Sidebar Toggle Button -->
                    <button @click="toggleSidebar" class="text-protoapp-hover-color duration-150 cursor-pointer ml-5 mt-2">
                        <i class="material-icons large">view_headline</i>
                    </button>
                </div>
            </RouterLink>

           

            <div class="hidden sm:flex gap-3 flex-1">
                <RouterLink :to="{ name: 'home' }" class="pt-2 pl-5">
                    <div class="hover:text-protoapp-hover-color duration-150 cursor-pointer text-lg">
                        Home
                    </div>
                </RouterLink>
            </div>

            <!-- Sidebar Navigation (Visible on Tablet and Mobile) -->
            <transition name="slide">
                <div v-if="showSidebar" class="fixed inset-0 flex flex-col bg-white z-10 overflow-y-auto">
                    <button @click="toggleSidebar"
                        class="absolute top-5 right-5 text-protoapp-hover-color duration-150 cursor-pointer">
                        <i class="material-icons">close</i>
                    </button>

                    <!-- Sidebar Links -->
                    <div class="flex flex-col gap-3 mt-16">
                        <RouterLink :to="{ name: 'home' }" class="pl-5">
                            <div class="hover:text-protoapp-hover-color duration-150 cursor-pointer">
                                Home
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </transition>
        </nav>

        <div class="container mx-auto px-4 py-16">
            <div class="flex flex-wrap items-start">
                <div class="w-full sm:w-6/12">
                    <!-- Left Column Content -->
                   <h1 class="text-6xl sm:text-2xl md:text-7xl lg:text-8xl xl:text-8xl 
                   text-left pt-8 text-protoapp-dark-color">Protoapp</h1>

                    <p class="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl  text-left text-protoapp-dark-color pt-8">
                        Our landing page template works on all devices, so you only have to set it up
                        once, and get beautiful results forever.
                    </p>
                    <button
                        class="hover-getstarted-btn duration-150 mt-8 px-12 py-5 bg-blue-500 text-white rounded text-lg">Get
                        Started</button>
                </div>
                <div class="w-full sm:w-6/12"></div>
            </div>
        </div>

         <div class="container sm:mt-16 md:mt-8 lg:mt-4 xl:mt-36 mx-auto px-4 py-16">
            <div class="flex items-center justify-center">
                <img src="../../public/img/badge.play-store.svg" alt="Play Store" class="w-auto h-auto mr-5 hover:shadow-lg hover:cursor-pointer">
                <img src="../../public/img/badge.app-store.svg" alt="Apple Store" class="w-auto h-auto ml-5 hover:shadow-lg hover:cursor-pointer">
            </div>
         </div>

    </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showSidebar = ref(false);

function toggleSidebar() {
    showSidebar.value = !showSidebar.value;
}
</script>

<style scoped>
.bg-image {
    background-image: url("../../public/img/header_banner_2-min.png");
    background-size: cover;
    background-position: center;
    height: 920px;
}

@media (max-width: 1024px) {
  
    .bg-image {
        height: 820px; 
    }
}

@media (max-width: 768px) {
 
    .bg-image {
         height: 800px; 
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

.hover-getstarted-btn:hover {
    background-color: #3fe3ee;
    color: white;
    transition: 0.5s;
}</style>
