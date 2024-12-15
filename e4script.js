document.addEventListener("DOMContentLoaded", function () {
  // Map of social media icons to their respective URLs
  const socialMediaLinks = {
    "facebook-icon": "https://www.facebook.com/yourPage",
    "twitter-icon": "https://twitter.com/yourProfile",
    "instagram-icon": "https://www.instagram.com/e4os.tech/",
    "linkedin-icon": "https://www.linkedin.com/in/yourProfile",
  };

  // Add event listeners to each social media icon
  for (const [id, url] of Object.entries(socialMediaLinks)) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        window.open(url, "_blank"); // Opens the link in a new tab
      });
    }
  }
});
