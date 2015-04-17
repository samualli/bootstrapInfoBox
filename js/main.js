//Samuel Li
//Portfolio Site

//Images Object Array
var imageArray = new Array();

function image(name, url){
  this.name = name;
  this.url = url;
  imageArray.push(this);
}

var image_Pamphlet = new image("pamphlet", "../img/insidePamphlet.jpg");



//*Images Object Array*//


$(document).ready(function() {
    
    //*--INFOBOX POPUP--*//
    
    //Infobox Hover
    $("#infoBox").hover(function(){
        $( "#infoBox > h4" ).css( "color", "#fff" );   
    }, function(){
        $( "#infoBox > h4" ).css( "color", "#ddd" );
    });
    
    
    //InfoBox Hide and Show
    var infoBoxHidden = false;
    $("#infoBox").click(function() {
        if(!infoBoxHidden){
            $(this).css( "height", "50px" ); 
            $("i").attr("class", "glyphicon glyphicon-chevron-up");
            infoBoxHidden = true;
        }else{
            $(this).css( "height", "auto" ); 
            $("i").attr("class", "glyphicon glyphicon-chevron-down");
            infoBoxHidden = false;
        }
    });
    
    //*--/# INFOBOX POPUP #/--*//
    
    //-----NORTHSEA
    $("#northSea").click(function(){
        $("#sec_top").css({"margin-top": "100%", "opacity": "0"});
        $("#sec_mid").css({"margin-left": "100%", "opacity": "0"});
         $("#sec_bottom").css({"margin-top": "-100%", "opacity": "0"});
        $("#sec_left").css({"margin-left": "-100%", "opacity": "0"});
        $("#infoBox").css({"background": "rgba(126,43,153,0.8)"});
        //Change Text of the InfoBox
        $("#infoBox p").html("Advertising campaign that involved: bus shelter ads, subway card advertising and Pamphlet design. Focus was family resemblance.");
        //Change Title
        $("h4 > span").html("North Sea Jazz Ad Campaign");
    });
    
    //-----District
    $("#district").click(function(){
        $("#sec_top").css({"margin-top": "100%", "opacity": "0"});
        $("#sec_mid").css({"margin-left": "0%", "opacity": "1"});
        $("#sec_bottom").css({"margin-top": "-100%", "opacity": "0"});
        $("#sec_left").css({"margin-left": "-100%", "opacity": "0"});
        $("#infoBox").css({"background": "rgba(14,27,77,0.8)"});
        //Change Text of the InfoBox
        $("#infoBox p").html("All the photos were taken by me at the Distillery District in Toronto.  The challenge was to apply our photography, design, and media tools skill and create a photo booklet with family resemblence and strong use of design and striking visual elements.");
        //Change Title
        $("h4 > span").html("The Distillery District");
    });
    
    //-----Sonja
    $("#sonja").click(function(){
        $("#sec_top").css({"margin-top": "0%", "opacity": "1"});
        $("#sec_bottom").css({"margin-top": "-100%", "opacity": "0"});
        $("#sec_left").css({"margin-left": "-100%", "opacity": "0"});
        $("#infoBox").css({"background": "rgba(212,32,42,0.8)"});
        //Change Text of the InfoBox
        $("#infoBox p").html("I contacted an artist and using their pencil sketch and digitally inked their work using the pen tool.  Through using gradient masks on Adobe Illustrator, I coloured Red Sonja.");
        //Change Title
        $("h4 > span").html("Red Sonja Illustration");
    });
    
    //-----Animatic
    $("#animatic").click(function(){
        $("#sec_top").css({"margin-top": "100%", "opacity": "0"});
        $("#sec_bottom").css({"margin-top": "0%", "opacity": "1"});
        $("#sec_left").css({"margin-left": "-100%", "opacity": "0"});
        $("#infoBox").css({"background": "rgba(14,27,77,0.8)"});
        //Change Text of the InfoBox
        $("#infoBox p").html("This is a flash game I created using AS3.  It is a two player platformer that has an equipment system.");
        //Change Title
        $("h4 > span").html("Flash Game");
    });
    
    //----Tradeshow
        $("#banners").click(function(){
        $("#sec_left").css({"margin-left": "0%", "opacity": "1"});
        $("#infoBox").css({"background": "rgba(14,27,77,0.8)"});
        //Change Text of the InfoBox
        $("#infoBox p").html("These are two tradeshow banners designed by me. Our job was to highlight the Surface Pro 3 as a tool for multimedia students.  The photo was taken by me of a friend who volunteered to be taken at the Starbucks I worked at.  He also helped refine the tag line.");
        //Change Title
        $("h4 > span").html("Tradeshow Banners");
    });
    
});

