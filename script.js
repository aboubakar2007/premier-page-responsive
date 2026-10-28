const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

// ferme le menu mobile après un clic sur un lien de section
const menuMobile = document.getElementById("offcanvasDarkNavbar");
menuMobile.querySelectorAll('.nav-link[href^="#"]:not(.dropdown-toggle)').forEach((lien) => {
  lien.addEventListener("click", () => {
    bootstrap.Offcanvas.getInstance(menuMobile)?.hide();
  });
});
