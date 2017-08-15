$(document).ready(function(){
  $("#transportationForm").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=transportationWork]:checked").each(function(){
      var type = $(this).val();
      $("#work").append(type + "<br>");
    })
    $("input:checkbox[name=transportationOut]:checked").each(function(){
      var type = $(this).val();
      $("#out").append(type + "<br>");
    })
    $("#work").show();
    $("#out").show();
    $("#transportationForm").hide();
  });
});
