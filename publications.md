---
layout: page
title: Publications
permalink: /publications/
---

<div class="publications-list">
  {% for pub in site.data.publications %}
    <div class="publication-card">
      
      <!-- Type Tag -->
      {% if pub.type %}
      <div class="pub-type-tag {{ pub.type | downcase | replace: ' ', '-' }}">
        {{ pub.type }}
      </div>
      {% endif %}
      
      <!-- Card Content -->
      <h3 class="pub-title">{{ pub.title }}</h3>
      
      <div class="pub-authors">
        {{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' }}
      </div>
      
      <div class="pub-journal">
        {{ pub.journal }}
      </div>
      
      <div id="abstract-{{ forloop.index }}" class="pub-abstract" style="display: none;">
        <strong>Abstract:</strong> {{ pub.abstract }}
      </div>
      
      <div class="pub-footer">
        {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank" class="doi-link">
          <i class="fas fa-link"></i> {{ pub.doi }}
        </a>
        {% else %}
        <!-- Spacer if no DOI -->
        <span></span>
        {% endif %}
        
        <div class="pub-actions">
          <button class="small-btn secondary toggle-abstract" data-target="abstract-{{ forloop.index }}">
            <i class="fas fa-chevron-down"></i> Abstract
          </button>
          
          <!-- Button Logic -->
          {% if pub.pdf and pub.pdf != "" %}
            <a href="{% if pub.pdf contains 'http' %}{{ pub.pdf }}{% else %}{{ pub.pdf | relative_url }}{% endif %}" class="small-btn primary" target="_blank" {% unless pub.pdf contains 'http' %}download{% endunless %}>
              <i class="fas fa-file-pdf"></i> PDF
            </a>
          {% else %}
            <span class="small-btn disabled">
              <i class="fas fa-lock"></i> No PDF
            </span>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle-abstract');
    
    toggles.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            if (target.style.display === 'none') {
                target.style.display = 'block';
                icon.className = 'fas fa-chevron-up';
            } else {
                target.style.display = 'none';
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
});
</script>
