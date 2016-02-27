---
title: Typography
data_file: typography
draft: true

intro: 'Understanding flexbox'

contents: 
- {
  title: 'Introduction',
  link: '#intro'
}
- {
  title: 'Properties Overview',
  link: '#property-overview'
}
- {
  title: 'Properties Detail ',
  link: '#properties-detail'
}

---

<section id="properties-detail" class="cheatsheet-section">
  <h2>Properties Detail</h2>

  {% for property in site.data.typography.properties %}
  <section id="{{property.property}}" class="property-section">

    <header class="property-section-header">
      <h3 class="cf">{{property.property}}</h3>
      <br>
      <p>{{property.description}}</p>
    </header>

    {% for value in property.values %}
    <section id="{{property.property}}-{{value.value}}" class="property-value-section">

      <header class="property-value-section-header">
        <h4 class="cf">{{property.property}}: {{value.value}}</h4>
      </header>

      <div class="example {{property.property}}" style="padding: 10px;">
          <p style="{{property.property}}: {{value.value}}">The quick brown fox jumped over the lazy dog</p>
      </div>
      
    </section>
    {% endfor %}
  </section>
  {% endfor %}
</section>