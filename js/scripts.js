$(function() {

$("#boardgame").submit(function(event) {

event.preventDefault();

var total = 0;
var socialInput = parseInt($("select#socializing").val());
var competeInput = parseInt($("select#competition").val());
var timeInput = parseInt($("select#time").val());
var animalInput = parseInt($("select#animal").val());

total = socialInput + competeInput + timeInput + animalInput;

if (total <= 12) {
      $("#diploResult").show()
      $("#oneDeckResult").hide()
      $("#hanabiResult").hide()
      $("#codeNamesResult").hide()
      $("#quackResult").hide()
    } else if (total <= 21) {
      $("#diploResult").hide()
      $("#oneDeckResult").show()
      $("#hanabiResult").hide()
      $("#codeNamesResult").hide()
      $("#quackResult").hide()
    } else if (total <= 33) {
      $("#diploResult").hide()
      $("#oneDeckResult").hide()
      $("#hanabiResult").show()
      $("#codeNamesResult").hide()
      $("#quackResult").hide()
    } else if (total <= 44) {
      $("#diploResult").hide()
      $("#oneDeckResult").hide()
      $("#hanabiResult").hide()
      $("#codeNamesResult").show()
      $("#quackResult").hide()
    } else {
      $("#diploResult").hide()
      $("#oneDeckResult").hide()
      $("#hanabiResult").hide()
      $("#codeNamesResult").hide()
      $("#quackResult").show()
    }

    $("#boardgame").slideUp(2000);


  });
});
