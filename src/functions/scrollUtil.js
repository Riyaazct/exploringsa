export const ScrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView(
      window.innerWidth >= 1280
        ? { behavior: "smooth", block: "center" }
        : { behavior: "smooth", block: "start" }
    );
  }
};
