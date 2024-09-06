import "./css/style.css";

let pathname = window.location.pathname;

switch (pathname) {
  case "/":
    import("./js/home.js");
    break;
  case "/joke/":
    import("./js/joke.js");
    break;
  case "/profile/":
    import("./js/profile.js");
    break;
  default:
    console.log("Not found");
}
