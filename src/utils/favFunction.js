export function getExisitngFavorits() {
    const favs = localStorage.getItem('favourite');
  
     if(!favs) {
         return []; 
     }else {
          return JSON.parse(favs);
     }
 }