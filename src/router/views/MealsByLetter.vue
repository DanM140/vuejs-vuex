 <template>
    <div class="flex justify-center gap-2 mt-2">

<router-link :to="{name:'byLetter',params: {letter}}" v-for="letter of letters" :key="letter">
    {{ letter }} 
</router-link>
     
    </div>
    


<Meals :meals="meals"/>
 </template>

 <script setup>
 import {computed} from '@vue/reactivity'
 import { onMounted,watch} from 'vue';
import store from '../../store';
import {useRoute}from 'vue-router';
import Meals from '../../components/Meals.vue';
const route = useRoute();
  const letters ='ABCDEFGHIJKLMNOPQRSTUVWXY'.split('');
  const meals =computed(()=>store.state.mealsByLetter)
  watch(route,()=>{
    store.dispatch('searchedMealsByLetter',route.params.letter)
  })
  onMounted(()=>{
store.dispatch('searchedMealsByLetter',route.params.letter)
  })
</script>