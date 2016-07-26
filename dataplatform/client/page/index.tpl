{% extends 'dataplatform:page/layout.tpl' %}


{% block content %}
     <div class="bigpipe1">
          {% widget "dataplatform:widget/testbigpipe.tpl" id="testbigpipe" mode="async" %}
     </div>
     <div class="bigpipe2">
          {% widget "dataplatform:widget/testbigpipe1.tpl" id="testbigpipe1" mode="async" %}
     </div>
{% endblock %}

