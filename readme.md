# Vue Router Not Rendering after gulp compile
### Using Vue 1.0.26

### Run the following command
```
composer install
npm install
gulp 
```
You would need to setup a dev enviroment for this as well. 

The issue here is that if you navigate to the root of the site blank screen shows up
it isn't showing the contents in the root.vue componet under. 

```
resources/assets/js/components/views/root.vue
```

root.vue
```
<template>
    <div>testing</div>
</template>

<script>
    export default {

    }
</script>

```