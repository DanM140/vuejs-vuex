 <template>
<div class="p-8 pb-0">
    <input type=" text" class="rounded border-2 border-gray-200 w-full " 
    placeholder="Search for Meals "
    @change="searchMeals"
    />
</div>
<div class="grid grid-cols-1 md:grid-cols-3  gap-3 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl" >
    <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
        <img  :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
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

<Meals :meals="meals"/>
 </template>
  
 <script setup>
 import {ref, computed,onMounted} from 'vue'
import {useRoute} from "vue-router"
import store from '../../store';
import Meals from '../../components/Meals.vue';
 const keyword = ref([''])
 const route = useRoute()
 const meals = computed(()=>store.state.searchedMeals);
 function searchMeals(){
    if(keyword.value){
        store.dispatch('searchedMeals', keyword.value );
    }else{
      store.commit("setSearchedMeals",[]);  
    }
  
 }
 onMounted(()=>{
   keyword.value= route.params.name 
   if(keyword.value ){
   searchMeals() 
   }
 })
</script>
 