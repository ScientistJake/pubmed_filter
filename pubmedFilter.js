javascript:(function journalReplace (){
var journalList = ['Science','Nature','Cell','Development','Developmental biology'];
var base = window.location.toString().match(/(http.*\?term=)(.*)/)[1];
var term = window.location.toString().match(/(http.*\?term=)(.*)/)[2];
var appendedTerm = "((" + term + ")" + "+AND+" + "\""+journalList[0]+"\""+"\[Journal\])" ;
for (i = 1; i < journalList.length; i++) {
  appendedTerm += "+OR+" +"(("+term +")"+"+AND+"+ "\""+journalList[i]+"\""+"\[Journal\])" ;
};
window.location = base + appendedTerm
})()
