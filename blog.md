---
layout: page
title: ""
permalink: /blog/
---

<div class="blog-header" style="text-align: center; margin-bottom: 60px;">
  <h1 class="page-heading">Research Blog</h1>
  <p class="subtitle" style="max-width: 600px; margin: 0 auto;">Updates on our latest experiments, publications, and life in the lab.</p>
</div>

<div id="filter-message" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(37, 99, 235, 0.1); border: 1px solid var(--accent-color); border-radius: 8px; color: var(--text-color); text-align: center;"></div>

<div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px;">
  {% for post in site.posts %}
    <article class="post-card post-item" data-tags="{{ post.tags | join: ',' }}" style="background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); padding: 25px; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column;">
      <div class="post-card-header" style="margin-bottom: 15px;">
        <span class="post-date" style="font-size: 0.85rem; color: var(--secondary-text); display: block; margin-bottom: 8px;">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3 style="margin: 0; font-size: 1.4rem; line-height: 1.3;">
            <a class="post-link" href="{{ post.url | relative_url }}" style="color: var(--heading-color);">{{ post.title | escape }}</a>
        </h3>
      </div>
      
      {% if post.excerpt %}
        <div class="post-excerpt" style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 20px; flex-grow: 1;">
          {{ post.excerpt | strip_html | truncatewords: 30 }}
        </div>
      {% endif %}
      
      <div class="post-card-footer" style="margin-top: auto; padding-top: 15px; border-top: 1px dashed var(--border-color);">
          {% if post.tags %}
            <div class="post-tags post-tags--pipe" style="justify-content: flex-start;">
              {% for tag in post.tags %}
              <a href="{{ '/blog/' | relative_url }}?tag={{ tag | url_encode }}" class="post-tag-link">{{ tag }}</a>
              {% endfor %}
            </div>
          {% endif %}
      </div>
    </article>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag'); // Get tag from URL
  
  if (tagParam) {
    // Decode and normalize tag to lowercase for comparison
    const searchTag = decodeURIComponent(tagParam).trim().toLowerCase();
    
    const posts = document.querySelectorAll('.post-item');
    let count = 0;
    
    posts.forEach(post => {
      // Get tags from data attribute and split into array
      const tagsAttr = post.getAttribute('data-tags');
      if (!tagsAttr) {
        post.style.display = 'none';
        return;
      }
      
      const postTags = tagsAttr.split(',');
      // Check if tag exists (case-insensitive)
      const hasTag = postTags.some(t => t.trim().toLowerCase() === searchTag);
      
      if (hasTag) {
        post.style.display = 'block';
        count++;
      } else {
        post.style.display = 'none';
      }
    });
    
    // Show filter message
    const filterMsg = document.getElementById('filter-message');
    filterMsg.style.display = 'block';
    
    // Display the original (non-lowercased) tag from URL for better UX, but decoded
    const displayTag = decodeURIComponent(tagParam);
    
    if (count > 0) {
        filterMsg.innerHTML = `Showing ${count} posts tagged with <strong>${displayTag}</strong>. <a href="{{ '/blog/' | relative_url }}" style="margin-left: 10px; color: var(--accent-color);">Clear Filter</a>`;
    } else {
        filterMsg.innerHTML = `No posts found with tag <strong>${displayTag}</strong>. <a href="{{ '/blog/' | relative_url }}" style="margin-left: 10px; color: var(--accent-color);">Show All</a>`;
    }
  }
});
</script>
