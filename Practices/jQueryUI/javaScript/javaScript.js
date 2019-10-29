//---------------------responsive logic--------------------
function responsive() {
  if(window.innerWidth > 650){

      big_screen();

  } else if(window.innerWidth <= 650){

      small_screen();
  };
};

//---------------------function for big screen--------------------
function big_screen(){
  console.log("big screen is running");

  // removeAccordion();
  $(".code_container").hide();
  $("textarea").show();
  $(".code_container").css("height", "400px");

  $("#css_tag").css("margin-left", "-340px");
  $("#js_tag").css("margin-left", "-340px");

  $(".tags").click(function(){

    if(window.innerWidth < 650){

      return;
    };

    $("#css_tag").css("margin-left", "-340px");
    $("#js_tag").css("margin-left", "-340px");
    // $(window).off("resize", $("#accordion").accordion());
    // removeAccordion();

    $(".code_container").animate(
      {width:"0px"},
      {duration:"1500", queue:false}
    );

    $(".code_container").hide();
    $(this).next(".code_container").show();

    var id = $(this).attr("id");
    $(this).next().next(".tags").css("margin-left", "-170px");



    $("textarea").css("background","#ffdd40");
    $("textarea").animate(
      {backgroundColor:"#36383f"});


    $(this).next(".code_container").animate(
      {width:"40%",},
      {duration:"3000", queue:false}
    );
    $(this).next(".code_container").find("textarea").css("padding","15px");
  });
};


//---------------------function for small screen--------------------
function small_screen(){
  console.log("small screen ahihi");

  if(window.innerWidth > 650){

    return;
  };


  $(".code_container").hide();
  $(".code_container:first").show();
  $("#css_tag").css("margin-left", "0px");
  $("#js_tag").css("margin-left", "0px");

  $(".code_container").css("width","100%");
  $("textarea").css("backgroundColor","#36383f");
  $("textarea").css("padding","15px");


  $(".tags").click(function(){


    //if it is big screen, exit
    if(window.innerWidth > 650){

      return;
    };
      //close animation
      $(".code_container").animate(

        {height: "0px",},
        {duration: "1500", queue:false}
      );
      $("textarea").hide();
      $(".code_container").hide();

      //open animation
      $(this).next(".code_container").find("textarea").show();
      $(this).next(".code_container").show();
      $(this).next(".code_container").animate(
        {height:"400px",},
        {duration:"1500", queue:false}
      );

  });
};

//interpret codes
$("#interpret").click(function(){
  //clear all
  $("#result_frame").contents().find("body").html("");
  $("#result_frame").contents().find("head").html("");

  var html_code = $("#html_code").val();
  var css_code = "<style>" + $("#css_code").val() + "</style>";
  var js_code = $("#js_code").val();
  //run codes
  $("#result_frame").contents().find("body").html(html_code);
  $("#result_frame").contents().find("head").html(css_code);
  document.getElementById('result_frame').contentWindow.eval(js_code);

});

//---------------------execution code--------------------
responsive();

$(window).resize(function() {
  responsive();
});

//----------------------height for result frame-------------
var result_frame_height = $(window).height() - $("#result_frame").offset().top;
$("#result_frame").css("min-height", result_frame_height + "px");

$(window).on("resize", function() {
  var result_frame_height = $(window).height() - $("#result_frame").offset().top;
  $("#result_frame").css("min-height", result_frame_height + "px");
});
