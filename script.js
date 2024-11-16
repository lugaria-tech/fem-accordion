document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-contents");

  faqContainer.addEventListener("click", (e) => {
    const faqHeader = e.target.closest(".group-header");

    if (!faqHeader) return;

    const text = faqHeader.nextElementSibling;
    const icon = faqHeader.querySelector(".icon");

    text.classList.toggle("open");
    icon.classList.toggle("active");

    const group = faqHeader.parentElement;
    const otherGroups = document.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      const otherGroupBody = otherGroup.querySelector(".text");
      const otherIcon = otherGroup.querySelector(".group-header .icon");

      if (otherGroup !== group) {
        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("active");
      }
    });
  });
});
