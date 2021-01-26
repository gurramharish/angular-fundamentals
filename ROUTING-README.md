# Angular Routing Deep Dive and Lazy Loading

## Routing Basics

1. First we need to declare base path in index.html.

1. For development it can be hard coded like this `<base href="/>`.

1. But when deploying to production the code can be kept in subfolder so we need to change the base href before deploying the angular application to server. There two ways to achive it:

    * Manually reset the base path
    * Use angular CLI with `ng build --base-href /appui/`

