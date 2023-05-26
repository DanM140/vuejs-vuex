import axiosClient from "../axiosClient";
export function searchedMeals({commit},keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
      commit('setSearchedMeals', data.meals)  
    })
}
export function searchedMealsByLetter({commit},letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
      commit('setMealsByLetter', data.meals)  
    })
}
export function searchedMealsByIngredients({commit},ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data})=>{
      commit('setMealsByIngredients', data.meals)  
    })
}