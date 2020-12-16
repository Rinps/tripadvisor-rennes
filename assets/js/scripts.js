const $ = document;

$.addEventListener("DOMContentLoaded", async () => {
  console.log("Hello there!");

  $.querySelector("#loginForm").addEventListener("click", () => {
    $.querySelector(".modal").classList.toggle("hidden");
  });

  $.querySelector("#cancelLogin").addEventListener("click", () => {
    $.querySelector(".modal").classList.toggle("hidden");
  });

  $.querySelector("#submitLoginForm").addEventListener(
    "submit",
    async (event) => {
      try {
        event.preventDefault();
        const firstname = $.querySelector("#firstname").value;
        const lastname = $.querySelector("#lastname").value;
        const email = $.querySelector("#email").value;
        const subject = $.querySelector("#subject").value;
        const description = $.querySelector("#description").value;
        const data = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          subject: subject,
          description: description,
        };
        const response = await axios.post(
          "https://cd1cd8e407ab.ngrok.io/submit",
          data
        );
        console.log(response);
        $.querySelector(".modal").classList.toggle("hidden");
      } catch (error) {
        alert("Something went wrong.");
      }
    }
  );

  $.querySelector("#arrow-left-entertainment").addEventListener("click", () => {
    var scrollValue =
      $.getElementById("entertainments-photos").scrollLeft - 1300;
    $.getElementById("entertainments-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-right-entertainment").addEventListener(
    "click",
    () => {
      var scrollValue =
        $.getElementById("entertainments-photos").scrollLeft + 1300;
      $.getElementById("entertainments-photos").scrollLeft = scrollValue;
    }
  );

  $.querySelector("#arrow-left-hotels").addEventListener("click", () => {
    var scrollValue = $.getElementById("hotels-photos").scrollLeft - 1300;
    $.getElementById("hotels-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-right-hotels").addEventListener("click", () => {
    var scrollValue = $.getElementById("hotels-photos").scrollLeft + 1300;
    $.getElementById("hotels-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-left-restaurants").addEventListener("click", () => {
    var scrollValue = $.getElementById("restaurants-photos").scrollLeft - 1300;
    $.getElementById("restaurants-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-right-restaurants").addEventListener("click", () => {
    var scrollValue = $.getElementById("restaurants-photos").scrollLeft + 1300;
    $.getElementById("restaurants-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-left-locations").addEventListener("click", () => {
    var scrollValue = $.getElementById("locations-photos").scrollLeft - 1300;
    $.getElementById("locations-photos").scrollLeft = scrollValue;
  });

  $.querySelector("#arrow-right-locations").addEventListener("click", () => {
    var scrollValue = $.getElementById("locations-photos").scrollLeft + 1300;
    $.getElementById("locations-photos").scrollLeft = scrollValue;
  });
});
