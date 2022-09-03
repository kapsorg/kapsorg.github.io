---
layout: default
title: Events
---

For the latest information, join our Facebook Group called "KAPS Newbies & Active Members Only". If the events here are old, we've forgotten to update them in a while.

Please email us at [hello@kaps.org](mailto:hello@kaps.org) to suggest events, or volunteer to host an event.

<h2>Upcoming Events</h2>

### Main events
{% for event in site.data.mainevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}

### Small group events
{% for event in site.data.smallgroupevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}

### Sports events
{% for event in site.data.sportsevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}

### Mental health events
{% for event in site.data.mentalhealthevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}

### Professional development events
{% for event in site.data.professionalevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}

### Volunteer events
{% for event in site.data.volunteerevents %}
1.  [{{ event.title }}]({{ event.link }}) \
    {{ event.date }} \
    {{ event.location }} \
    Expected attendance: {{ event.attendance }} 
{% endfor %}
