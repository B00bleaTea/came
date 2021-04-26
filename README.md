# [came](https://rcame.netlify.app/)
a front-end weapp for tracking your freelings

***

### Things you should know:
> This is a **fully** front-end webapp
```
This webapp uses JavaScript to store all your events in
your browser's LocalStorage
```

> what do the LocalStorage keys mean?
- 1 .. infinity = `events IDs, it identifies your events`
  - text = `the main text of the event`
  - date = `a formatted date string`
- last = `the last day you made an event`

> /page/rec
```
rec means recover, the base argument replaces your
window.localStorage, when pressing the export button
it will percent encode your window.localstorage and it will
replace the value of the main text box with the url of /page/rec/?base=...
```

> when forking
```
when forking please edit the scss file instead of the css file,
scss is the main styling language used in this project, I left some more
information in style.scss file
```
