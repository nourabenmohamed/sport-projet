//Function generate ID
export function generateId(tab: any) {

  var max: any;
  if (tab.length == 0) {
    max = 0;
  }
  else {
    max = tab[0].id;
    for (var i = 1; i < tab.length; i++) {
      if (tab[i].id > max) {
        max = tab[i].id;
      }
    }
  }
  return max + 1;
}


