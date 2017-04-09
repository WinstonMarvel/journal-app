function doPost(e) {

  
   var name = e.parameter.name;
  var passage = e.parameter.passage;
 var journal = e.parameter.journal;

  
  

  var date= (new Date()).toDateString();

  
  if(name=="Jack"){

    writeToDatabase(date, passage, "", journal);
  }
  else if(name=="Jill"){
writeToDatabase(date,"", passage, journal);

  }
  
  var output=HtmlService.createTemplateFromFile('forms').evaluate();
  output.setTitle('Journal submission');
  return output;

}
  
  

 //This allows including files from the Google App script project and
 //helps us return a html file as output after POST has completed
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function writeToDatabase(date, passage_becky, passage_marvel, journal) {
  

    var ss = SpreadsheetApp.openById('spreadsheet-id-from-google-drive-goes-here');
    var sheet = ss.getSheets()[0];

 // Appends a new row with 3 columns to the bottom of the
 // spreadsheet containing the values in the array
   sheet.appendRow([date,passage_becky,passage_marvel,journal ]);

    
return 0;

  
}