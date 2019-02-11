# pubmed_filter

Filters pub med search results to only white listed journals.

## usage:  

Copy and paste the following code into a new bookmark:
```
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
```

Edit/Add any journals to white list in the `journalList` variable. Use the following syntax: `['Journal name','second hournal name']`.

After searching on pubmed using a basic term (not advanced search), while on the results page, click the bookmark.
