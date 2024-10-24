// Uncheck all "viewed" checkboxes on GitHub pull request pages
document.getElementsByName("viewed").forEach((ch) => {
  if (ch.checked) {
    ch.click();
  }
});
