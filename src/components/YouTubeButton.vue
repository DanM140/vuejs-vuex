<template>
   <a :href="href" target="_blank" class="px-3 py-2 rounded 
   text-white border-2 
        border-red-500 bg-red-500 hover:bg-red-600 transition-colors">
      
      <slot>YouTube</slot>
        </a>  
</template>
<script setup >
const props  = defineProps ({
    href:String
}) 
</script>