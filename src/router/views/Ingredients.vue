 <template>
<div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input type=" text" 
    v-model = "keyword"
    class="rounded mb-3 border-2 border-gray-200 w-full " 
    placeholder="Search for Ingredients "
   
    />
    <router-link v-for="ingredient of computedIngredients" :key="ingredient.id" 
    class="block bg-white rounded p-3 mb-3 shadow" :to="{name:'byIngredient',
    params:{ingredient:ingredient.strIngredient

    }}">
    <h3 class="text-2xl font-bold">{{ ingredient.strIngredient  }}</h3>
    <p>{{ingredient.strDescription  }}</p>
    </router-link>
</div>
 </template>

 <script setup>
 import {computed} from "@vue/reactivity"
import axiosClient from '../../axiosClient';
import { onMounted, ref } from 'vue';
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(()=>{
    if(!computedIngredients) return ingredients;
 return ingredients.value.filter((i)=> i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
    
 
});
onMounted(()=>{
    axiosClient.get("list.php?i=list")
    .then(({data})=>{
ingredients.value = data.meals;
    })
})
    
</script>