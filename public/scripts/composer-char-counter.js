$(document).ready(function() {
  $("#tweet-text")
    .on("input", function() {

      //Resize textarea
      this.style.height = "";
      this.style.height = this.scrollHeight + 4 + "px";

      // Counter value
      const counter = $(this).next('div').children('output')[0];
      counter.value = 140 - this.value.length;

      // color change
      if (counter.value < 0) {
        $(counter).css("color", "red");
      } else {
        $(counter).css("color", "black");
      }
    });
});