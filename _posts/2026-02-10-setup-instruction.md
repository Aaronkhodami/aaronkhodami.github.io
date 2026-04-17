---
layout: post
title: "How to Set Up and Use This Template"
date: 2026-02-10 10:00:00 +0100
categories: updates
tags: [Guide, Setup]
excerpt: "Step-by-step setup, deployment, and content editing guide for this academic template."
---

This post explains how to fork, deploy, and customize the site. It also covers where to edit content, how to add images, and how to publish new posts.

## Updates

1. **Apr 12, 2026**

	- Updated versioning.
	- Updated the footer layout.
	- Added site-wide font switching.
	- To change the website font, open `_data/site.yml` and set `appearance.font` to one of these options: `times`, `ubuntu`, or `roboto`.
	- Added editable menu labels.
	- To rename the menu items, open `_data/site.yml` and edit the values under `navigation`, such as `home`, `about`, `research`, `publications`, `blog`, and `cv`.

2. **Apr 10, 2026**

	- Update versioning has been added to the website.

## 1) Fork the repository

1. Click **Fork** on GitHub to copy the template into your account.
2. Open your forked repo.

Direct link to the repository:

https://github.com/Aaronkhodami/Academic-web-with-blog

## 2) Configure GitHub Pages

1. Go to **Settings -> Pages**.
2. **Source:** Deploy from a branch.
3. **Branch:** `main` (or `master`), folder `/ (root)`.
4. Save and wait 1-3 minutes for the site to build.

### Set the URL and base URL

Open these files and edit the values:

- `_config.yml`
- `_data/site.yml`

If your site is a **project site** (username.github.io/repo), use:

```
url: https://YOUR_USERNAME.github.io
baseurl: /YOUR_REPO
```

If your site is a **user/org site** (username.github.io), use:

```
url: https://YOUR_USERNAME.github.io
baseurl: ""
```

Commit and push. GitHub Pages will rebuild automatically.

## 3) Update site identity

Edit `_data/site.yml` to replace the placeholder info:

- `title` and `description`
- `author.name`, `author.title`, `author.bio`
- `social` links
- `cv` file path

### Profile photo

1. Add your photo to `assets/images/`.
2. In `_data/site.yml`, set:

```
author:
	photo: your-photo.jpg
```

This image appears on the homepage and About page.

## 4) Update pages

Edit these Markdown files:

- Home: `index.md`
- About: `about.md`
- Research: `research.md`
- Publications: `publications.md`

## 5) Add and edit blog posts

Posts live in `_posts/` and must follow the naming format:

```
YYYY-MM-DD-title.md
```

Each post has front matter at the top:

```
---
layout: post
title: "Your Post Title"
date: 2026-02-10 10:00:00 +0100
categories: updates
tags: [News, Lab]
excerpt: "Short summary shown in the blog list."
---
```

## 6) How the blog list works

The blog list page lives at `blog.md`. It loops through `site.posts` and renders each post card.
When you add a new file in `_posts/`, it will automatically appear in the blog list.

If you want to change the blog layout or card design, edit `blog.md`.

## 7) How tags work

Tags come from each post's front matter:

```
tags: [News, Lab, Publication]
```

On the blog page, clicking a tag appends `?tag=YourTag` to the URL.
The blog page reads that parameter and shows only posts that include the tag.

If you want a post to appear under multiple topics, add more tags to its list.

## 8) SEO (search and social sharing)

The template uses `jekyll-seo-tag` and `jekyll-feed` (enabled in `_config.yml`).
SEO data comes from the site and page front matter.

To improve SEO and sharing previews:

- Set `title` and `description` in `_config.yml` and `_data/site.yml`.
- Ensure each page has a clear title.
- For posts or pages, add a custom image in the front matter if needed:

```
image: /assets/images/your-share-image.jpg
```

The default layout will use this image for social previews when available.
If no image is provided, it falls back to the profile photo from `_data/site.yml`.

## 9) Update publications

Edit `_data/publications.yml` to add or update entries. Each item supports:

- `title`, `type`, `authors`, `journal`, `abstract`
- `doi` (optional)
- `pdf` (local file or external link)

## 10) Update research interests

Edit `_data/interests.yml` to change the cards on the homepage.

## 11) Add images

Place images in `assets/images/` and reference them like this:

```
![Alt text]({{ '/assets/images/your-image.jpg' | relative_url }})
```

For your profile image, place the file in `assets/images/` and set `author.photo` in `_data/site.yml`.

## 12) Update technical skills (tools)

The **Technical Skills** section is driven by `_data/about.yml`:

```
tools:
	- Python
	- R
	- MATLAB
```

### Add tool icons (custom)

You can use any image file (PNG, JPG, or SVG).

1. Upload icon files to `assets/images/`.
2. Edit `_data/icons.yml` to map tool names to icon files. Example:

```
python: python.png
matlab: matlab.svg
r: r.png
```

3. Make sure the tool name in `_data/about.yml` matches the key (case-insensitive).

The template lowercases the tool name to find the icon key.
If no icon is found, it tries `toolname.png` automatically.

## 13) Add education entries and logos

Education entries live in `_data/about.yml`:

```
education:
	- degree: Ph.D. in [Field]
		university: "[University Name]"
		logo: "university_logo.png"
		url: "https://university.edu"
		year: "[Year]"
		details: |
			Dissertation: "[Your dissertation title here]"<br>
			Advisors: [Advisor names]
```

### Add an education logo

1. Upload the logo file to `assets/images/`.
2. Set `logo` to the file name (for example, `university_logo.png`).

The logo will appear next to the university name on the About page.

## 14) Add experience entries and logos

Experience entries are also in `_data/about.yml`:

```
experience:
	- position: "Current Position"
```