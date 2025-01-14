---
title: Contact Us
name: $timestamp
redirect: /contact-us

includes: 
    ip: ip
    hostname: hostname
    referer: Referer
    useragent: User-Agent

schema:
    name: required,min=1,max=32
    email: required,email
    message: required,min=1,max=255
content: message
---

Contact Us Form
