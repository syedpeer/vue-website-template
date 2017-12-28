<template>
  <main-layout>
    <p>This tool allows you to put in place a static website powered by <a target="_blank" href="https://vuejs.org/">VueJS</a>.</p>
    <p>If you are a VueJS developer, you can develop a static website in no time with the tools you love. Read the <a target="_blank" href="https://github.com/code-forefront/vue-website-cli">Github Page</a> to know more and get what you need from this project.</p>
    <p>If you are integrator or website developer using static site generators like Jekyll, and or handle user actions with tools like jQuery and manipulate much DOM, you will be able to code your website as simple components (html, css). Just add some js implementing VueJS component module and you will add reactivity to your page.</p>
    <h2>installation</h2>
    <pre><code>
npm i -g vue-website-cli
    </code></pre>
    <h2>how to use</h2>
    Just generate a new website and you're done!
    <pre><code>
vue-website generate my-website
    </code></pre>
    <p>A npm run dev will live reload your site, a npm run build will generate your static pages, embedding wuejs anyway for reactivity and user interaction.</p>
    <a href="/contact" @click.prevent="$router.push('/contact')">Contact us</a>
  </main-layout>
</template>