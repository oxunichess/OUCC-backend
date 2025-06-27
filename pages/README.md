# Creating a new page on the website

## 1. Creating your initial file

The process for creating a new page is the exact same as writing a new article. Read [the guide in the /pages folder](https://github.com/oxfordunichess/oucc-backend/tree/master/news) to get started.

## 2. Making it so that the link works

- Go to [index.json](https://github.com/oxfordunichess/oucc-backend/blob/master/index.json)
- Press the 'edit' button (the 🖉 button in the top right corner)
- Add a new [key, property] pairing which should be of the format:
```json
"ARTICLE_LINK": {
	"title": "ARTICLE_NAME",
	"parent": "ARTICLE_PARENT"
},
```
where ARTICLE_PARENT is the navigation header you want it to be under. The rest of the pages already in there should serve as an example if you get stuck.

## 3. Adding it to the navigation bar

- Go to [navigation.json](https://github.com/oxfordunichess/oucc-backend/blob/master/navigation.json)
- Press the 'edit' button (the 🖉 button in the top right corner)
- Find the section you want it to be under
- Add a new item to the array (in the exact position you want it to be displayed) in the format:
```json
[
	"/ARTICLE_LINK",
	"DISPLAY_NAME_IN_NAVIGATION_BAR"
],
```
Again, the examples there should help.
And you're done!