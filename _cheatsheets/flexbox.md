---
title: Flexbox
data_file: flex

intro: ''

contents: 
- {
  title: 'Properties Overview',
  link: '#property-overview'
}
- {
  title: 'Properties Detail - Flex Container Properties',
  link: '#flex-container-properties'
}
- {
  title: 'Properties Detail - Flex Item Properties',
  link: '#flex-item-properties'
}
- {
  title: 'Support',
  link: '#support'
}


support_tables:
- {
  feature: 'flexbox',
  periods: 'future_1,current,past_1,past_2'
}

---


<section id="flex-container-properties" class="cheatsheet-section">
  <h2>Properties Detail - Flex Container Properties</h2>

  {% for property in site.data.flex.properties %}
  {% if property.applies-to == 'Flex Container' %}
  <section id="{{property.property}}" class="property-section flex-property-section">

    <header class="property-section-header">
      <h3 class="cf">{{property.property}}</h3>
      <br>
      <p>{{property.description}}</p>
    </header>

    {% for value in property.values %}
    <section id="{{property.property}}-{{value.value}}" class="property-value-section flex-value-section">

      <header class="property-value-section-header">

        <h4 class="cf">{{property.property}}: {{value.value}}</h4>

        {% if value.description != '' %}<p>{{value.description}}</p>{% endif %}
      </header>

      <div class="example flex-container-example">
        <div class="flex-container {{property.property}}" style="{{property.property}}: {{value.value}}">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
            <div class="flex-item">5</div>
        </div>
      </div>

    </section>
    {% endfor %}
  </section>
  {% endif %}
  {% endfor %}
</section>





<section id="flex-item-properties" class="cheatsheet-section">
  <h2>Properties Detail - Flex Items Properties</h2><br>
  {% for property in site.data.flex.properties %}
  {% if property.applies-to == 'Flex Items' %}

  <section id="{{property.property}}" class="property-section flex-item-section">

    <header class="property-section-header">
      <h3 class="cf">{{property.property}}</h3>
      <br>
      <p>{{property.description}}</p>
    </header>

    {% for value in property.values %}
    <section id="{{property.property}}-{{value.value}}" class="property-value-section flex-value-section">

      <header class="property-value-section-header">

        <h4 class="cf">{{property.property}}: {{value.value}}</h4>

        {% if value.description != '' %}<p>{{value.description}}</p>{% endif %}
      </header>

      <div class="example flex-item-example">
        <div class="flex-container {{property.property}}">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item example-flex-item" style="{{property.property}}: {{value.value}}">3</div>
            <div class="flex-item">4</div>
            <div class="flex-item">5</div>
        </div>
      </div>

    </section>
    {% endfor %}
  </section>

  {% endif %}
  {% endfor %}
</section>


