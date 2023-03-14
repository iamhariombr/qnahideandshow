
// <!---------------script.js---------------------->

// <!----hide answer fs-->
$(document).ready(function(){
    $(".hide-answer").click(function(){
      $(".answer").hide();
      $(".hide-answer").remove(".hide-answer");
    });
  });

// <!---refresh page fs-->

    $(document).ready(function(){
      $(".refresh-page").click(function(){
        if(confirm("Do you want to refresh the page?")) {
          location.reload();
        } else {
          return false;
        }
      });
    });

// <!----show answer fs-->
  $(document).ready(function(){
    $(".show-answer").click(function(){
      $("details").hide();
      $(".show-answer").hide();
   $(".q-1").after("(Ans.) B. भीमराव अंबेडकर");
   $(".q-2").after("(Ans.) C. महात्मा गांधी");
   $(".q-3").after("(Ans.) A. रघुराम सहाय");
   $(".q-4").after("(Ans.) D. भीमराव अंबेडकर");
   $(".q-5").after("(Ans.) A. महात्मा गांधी");
   $(".q-6").after("(Ans.) B. रघुराम सहाय");
   $(".q-7").after("(Ans.) B. भीमराव अंबेडकर");
   $(".q-8").after("(Ans.) C. महात्मा गांधी");
   $(".q-9").after("(Ans.) D. भीमराव अंबेडकर");
   $(".q-10").after("(Ans.) B. महात्मा गांधी");
    });
  });

// <!---------------Print-page------------>
  $(document).ready(function() {
  $('.print-page').click(function() {
  $(".answer-sheet, .show-answer, .hide-answer, .print-page, .section3").hide();
  window.print();
  });
});


// <!----------------Print Answer Sheet fs-->
    $(document).ready(function(){
    $(".answer-sheet").click(function(){
    $(".answer-sheet, .show-answer, .hide-answer, .section2 , .section3").hide();
    $(".answer-sheet-div").after("1.B | 2.C | 3.D | 4.B | 5.C | 6.A | 7.C | 8.D | 9.B | 10.A");
    });
  });

// <!-- -------------- title change fs------->

  $(function() {
	var message = "Hey, come back!";
	var original;

	$(window).focus(function() {
		if (original) {
			document.title = original;
		}
	}).blur(function() {
		var title = $('title').text();
		if (title != message) {
			original = title;
		}
		document.title = message;
	});
});

// <!---------------script.js END---------------------->