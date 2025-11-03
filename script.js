  // Ensure jQuery runs after the page is fully loaded
$(document).ready(function () {

  // CONTACT FORM HANDLER
  $(document).ready(function() {
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();

    let $form = $(this);
    let $status = $("#status");

    $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method"),
      data: $form.serialize(),
      dataType: "json",
      success: function() {
        $status.html("✅ Message sent successfully!");
        $form.trigger("reset");
      },
      error: function() {
        $status.html("❌ Oops! Something went wrong. Please try again.");
      }
    });
  });
});

    // TOGGLE MOBILE MENU
  $("#menu-icon").on("click", function () {
    $("nav ul").toggleClass("show"); // Show/hide the nav menu

    // Change icon between ≡ and ×
    const currentIcon = $(this).text().trim();
    $(this).text(currentIcon === "≡" ? "×" : "≡");
  });

  // SMOOTH SCROLL ON NAV LINK CLICK
    $("nav ul li a").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor jump

    // Get the target section ID from href attribute
    const target = $(this).attr("href");

    // Smooth scroll animation
    $("html, body").animate({
      scrollTop: $(target).offset().top - 60 // Offset for header height
    }, 800); // 800ms = smooth scroll duration

    // Close menu after clicking a link (for mobile)
    $("nav ul").removeClass("show");
    $("#menu-icon").text("≡");
  });

  // SMOOTH SCROLL ON "View My Work" button CLICK
  $("#info div a").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor jump

    // Get the target section ID from href attribute
    const target = $(this).attr("href");

    // Smooth scroll animation
    $("html, body").animate({
      scrollTop: $(target).offset().top - 60 // Offset for header height
    }, 800); // 800ms = smooth scroll duration
  });
});
