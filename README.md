# VzletayTur Landing Page

This repository contains a simple one‑page landing website for the **Взлетай Тур** travel agency. The site is built with plain HTML, CSS and JavaScript. It is styled in the same spirit as our VK group cover art and includes sections for a hero banner, benefits, popular tours, testimonials, company info, a booking form and contacts.

## How to deploy on GitHub Pages

To publish the site:

1. Go to **Settings → Pages** on GitHub.
2. Under *Source*, choose **Deploy from a branch**.
3. Select the `main` branch and folder `/` (root).
4. Save the settings. After a few moments your site will be available at:

```
https://<username>.github.io/Vzletaytur
```

Replace `<username>` with your GitHub username.

## How to change contacts and links

- Phone numbers, email, VK and Telegram links are defined in the `#cta` section of `index.html`.
- To change the address displayed, edit the **Contacts** section in `index.html`.
- The styles are located in `css/styles.css`.
- JavaScript behaviour (e.g., form validation) is in `js/app.js`.

## Assets

SVG logos are stored in the `assets/` folder (`logo.svg` and `favicon.svg`). You can replace them with your own versions while preserving filenames.

---

If you clone this repository locally, you can open `index.html` in a browser to preview the site. All resources are relative and there is no build step.
