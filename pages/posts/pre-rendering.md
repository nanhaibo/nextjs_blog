---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
desc: '这是一段描述哈哈哈哈哈啊发的酸辣粉螺丝扣搭街坊了解飞机开绿灯就是附近的付款了大量十分激烈附件是的浪费三菱电机发了多少积分了单数量副书记地方上的飞机 '
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.