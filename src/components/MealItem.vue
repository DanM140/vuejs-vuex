<template>
    
<div class="grid grid-cols-1 md:grid-cols-3  gap-3 p-8">
    <div   class="bg-white shadow rounded-xl" >
    <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
        <img  :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
    </router-link>
    <div class="p-3">
        <h3 class="  font-bold">{{ meal.strMeal }}</h3> 
    <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ea consequuntur placeat possimus laudantium corporis dolorem delectus temporibus debitis, 
        accusantium minima facere beatae mollitia consequatur minus repellendus quasi illo voluptate.</p>
    <div class="flex items-center justify-between" >
       
        <YouTubeButton :href="meal.strYoutube">
            Youtube
            </YouTubeButton>
    </div> 
    </div>
    </div>
</div>
</template>
<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
    meal: Object
})
</script>