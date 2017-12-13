# vue-website-template

This repository is basically an overload of [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) maintained up to date, embbeding [vue-website-plugins](https://github.com/code-forefront/vue-website-plugins/) allowing VueJS developers to put in place a static website in no time powered by VueJS and allowing integrators or non experimented website developers to make use of the VueJS power to develop a website using simple components (html, css) with possible user interaction and reactivity, avoiding the use of jQuery for example or complex DOM manipulation.

## how to use

### standard

As you would for any vue template, just do a 

```
vue init code-forefront/vue-website-template my-site
cd my-site
```

You can develop with `npm run dev` and generate your static site with `npm run build`, that's it!

You just have to follow a simple convention : putting your pages in `src/_pages`, your layouts in `src/_layouts` and your includes in `src/_includes`.

### simpler

If the commands above bothers you, you can just use the [`vuejs-website-cli`](https://github.com/code-forefront/vue-website-cli)

### harder

You have an existing vue project or simply wants to have full control on your code? Install yourself the [vue-website-plugins](https://github.com/code-forefront/vue-website-plugins/) step by step.
