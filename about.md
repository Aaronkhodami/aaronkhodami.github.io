---
layout: page
title: About Me
permalink: /about/
---

<div class="about-hero">
  <div class="about-image">
    <img src="{{ '/assets/images/' | append: site.data.site.author.photo | relative_url }}" alt="{{ site.data.site.author.name }}" 
         onerror="this.src='https://ui-avatars.com/api/?name={{ site.data.site.author.name | cgi_escape }}&size=300&background=0D8ABC&color=fff';">
  </div>
  <div class="about-intro">
    <h2>{{ site.data.site.author.name }}</h2>
    <p class="title-subtitle">{{ site.data.site.author.title }}</p>
    <p class="bio">{{ site.data.site.author.bio }}</p>
  </div>
</div>

<div class="about-section">
  <h2>Research Interests</h2>
  
  {% assign interests = site.data.interests %}
  {% if interests and interests.size > 0 %}
  <div class="research-grid">
    {% for interest in site.data.interests %}
    <div class="research-item">
      <h3>{{ interest.title }}</h3>
      <p>{{ interest.description }}</p>
    </div>
    {% endfor %}
  </div>
  {% else %}
  <!-- Fallback if no data file -->
  <div class="research-grid">
    <div class="research-item">
      <h3>Research Area One</h3>
      <p>Brief description of your research area.</p>
    </div>
    <div class="research-item">
      <h3>Research Area Two</h3>
      <p>Brief description of your research area.</p>
    </div>
    <div class="research-item">
      <h3>Research Area Three</h3>
      <p>Brief description of your research area.</p>
    </div>
  </div>
  {% endif %}
</div>

<div class="about-section">
  <h2>Technical Skills</h2>
  <p>Proficient with the following tools and technologies:</p>
  
  <div class="software-grid">
    {% if site.data.about.tools %}
      {% for tool in site.data.about.tools %}
      <div class="software-item">
        {% assign tool_key = tool | downcase %}
        {% assign custom_icon = site.data.icons[tool_key] %}
        {% if custom_icon %}
          {% assign tool_img = custom_icon %}
        {% else %}
          {% assign tool_img = tool_key | append: '.png' %}
        {% endif %}
        <img src="{{ '/assets/images/' | relative_url }}{{ tool_img }}" alt="{{ tool }}" class="software-icon"
             onerror="this.style.display='none';">
        <span class="software-name">{{ tool }}</span>
      </div>
      {% endfor %}
    {% endif %}
  </div>
</div>

<div class="about-section">
  <h2>Education</h2>
  
  {% if site.data.about.education %}
    {% for edu in site.data.about.education %}
    <div class="timeline-item">
        <h3>{{ edu.degree }}</h3>
        <div class="timeline-meta" style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
           {% if edu.logo %}
             <img src="{{ '/assets/images/' | relative_url }}{{ edu.logo }}" alt="{{ edu.university }}" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;">
           {% endif %}
           {% if edu.url %}
             <a href="{{ edu.url }}" target="_blank" style="color: var(--accent-color); text-decoration: none;"><strong>{{ edu.university }}</strong></a>
           {% else %}
             <strong>{{ edu.university }}</strong>
           {% endif %}
           <span style="color: var(--secondary-text);">• {{ edu.year }}</span>
        </div>
        <p>{{ edu.details }}</p>
    </div>
    {% endfor %}
  {% endif %}
</div>

<div class="about-section">
  <h2>Professional Experience</h2>
  
  {% if site.data.about.experience %}
    {% for job in site.data.about.experience %}
    <div class="timeline-item">
        <h3>{{ job.position }}</h3>
        <div class="timeline-meta" style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
           {% if job.logo %}
             <img src="{{ '/assets/images/' | relative_url }}{{ job.logo }}" alt="{{ job.institution }}" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;">
           {% endif %}
           {% if job.url %}
             <a href="{{ job.url }}" target="_blank" style="color: var(--accent-color); text-decoration: none;"><strong>{{ job.institution }}</strong></a>
           {% else %}
             <strong>{{ job.institution }}</strong>
           {% endif %}
           <span style="color: var(--secondary-text);">• {{ job.duration }}</span>
        </div>
        <p>{{ job.description }}</p>
    </div>
    {% endfor %}
  {% endif %}
</div>

<div class="about-section">
  <h2>Contact Information</h2>
  <div class="research-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
    <!-- Contact Details Card -->
    <div class="research-item" style="text-align: center; display: flex; flex-direction: column; justify-content: center;">
      <h3>Get in Touch</h3>
      <p>
        <strong>Email:</strong> <a href="mailto:{{ site.data.site.social.email }}">{{ site.data.site.social.email }}</a><br>
        <strong>Office:</strong><br>
        {{ site.data.about.contact.office }}
      </p>
      
      {% if site.data.site.social %}
      <div class="social-links-icons" style="margin-top: 20px; gap: 15px;">
        {% if site.data.site.social.linkedin %}
        <a href="{{ site.data.site.social.linkedin }}" target="_blank" style="width: 50px; height: 50px; font-size: 1.5rem;"><i class="fab fa-linkedin"></i></a>
        {% endif %}
        {% if site.data.site.social.google_scholar %}
        <a href="{{ site.data.site.social.google_scholar }}" target="_blank" style="width: 50px; height: 50px; font-size: 1.5rem;"><i class="fas fa-graduation-cap"></i></a>
        {% endif %}
        {% if site.data.site.social.x_twitter %}
        <a href="{{ site.data.site.social.x_twitter }}" target="_blank" style="width: 50px; height: 50px; font-size: 1.5rem;"><i class="fa-brands fa-x-twitter"></i></a>
        {% endif %}
      </div>
      {% endif %}
    </div>

    <!-- Map Card -->
    <div class="research-item" style="padding: 0; overflow: hidden; height: 100%; min-height: 300px;">
       {% if site.data.about.contact.map %}
       <iframe src="{{ site.data.about.contact.map }}" width="100%" height="100%" style="border:0; min-height: 300px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       {% else %}
       <div style="padding: 20px; text-align: center;">
         <p>Map not configured.</p>
       </div>
       {% endif %}
    </div>
  </div>
</div>

