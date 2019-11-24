$(document).ready(function() {

  $(".projectsScreen").hide();
  $(".latestScreen").hide();
  $(".contactScreen").hide();
  $(".mainNav").hide();

  $(".homeBtn").click(function() {
    $(".projectsScreen").hide();
    $(".latestScreen").hide();
    $(".contactScreen").hide();
    $(".homeScreen").show();
    $(".mainNav").hide();
  });

  $(".personalBtn").click(function() {
    $(".projectsScreen").show();
    $(".latestScreen").hide();
    $(".contactScreen").hide();
    $(".homeScreen").hide();
    $(".mainNav").show();
  });

  $(".latestBtn").click(function() {
    $(".projectsScreen").hide();
    $(".latestScreen").show();
    $(".contactScreen").hide();
    $(".homeScreen").hide();
    $(".mainNav").show();
  });

  $(".contactBtn").click(function() {
    $(".projectsScreen").hide();
    $(".latestScreen").hide();
    $(".contactScreen").show();
    $(".homeScreen").hide();
    $(".mainNav").show();
  });






})
