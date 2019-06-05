$(function() {
  $("form#apt-form").submit(function(event) {
    event.preventDefault();

    var userName = $("input#name").val();
    var userReason = $("input#reason").val();
    var userDate = $("input#date").val();
    var userTime = $("input#time").val();

    $("#output").text(userName + userReason + userDate + userTime);

    alert("Booking Successful, " + userName + "!")
  });
});
