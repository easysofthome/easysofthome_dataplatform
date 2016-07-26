<!doctype html>
{% html lang="en"  %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>{{ title }}</title>
        <script src="http://182.168.1.125:2323/Static/js/bigpipe.js" ></script>

{% endhead %}

    {% body %}
                {% block content %}
                {% endblock %}
    {% endbody %}

{% endhtml %}