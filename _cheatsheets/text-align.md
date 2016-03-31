---
title: Text-Align
data_file: text-align
---

<section id="properties-detail" class="cheatsheet-section">
  <h2>Detail</h2>

  {% for property in site.data[page.data_file]properties %}
  <section id="{{property.property}}" class="property-section">

    <header class="property-section-header">
      <h3 class="property-header cf">
        <div class="arrow toggle-values-display open" aria-label="Toggle Values"></div> 
        {{property.property}}
      </h3>
    </header>

    {% for value in property.values %}
    <section id="{{property.property}}-{{value.value}}" class="property-value-section">

      <header class="property-value-section-header">
        <h4 class="cf">{{property.property}}: {{value.value}}</h4>
      </header>

      <div class="example">
        <div class="{{property.property}}" 
             style="{{property.property}}: {{value.value}}; padding: 10px;">
          <p>Lorem Khaled Ipsum is a major key to success. They will try to close the door on you, just open it. Don’t ever play yourself. Mogul talk. Don’t ever play yourself. </p>
        </div>
      </div>

    </section>
    {% endfor %}
  </section>
  {% endfor %}
</section>





