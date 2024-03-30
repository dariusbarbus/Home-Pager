# 🚧THIS WIKI IS STILL UNDER CONSTRUCTION🚧

# Home Pager
Home Pager is a minimalist home page template where users can add their own links to have a personalized homepage.

## Color Scheme
It uses a slightly modified version of the [Nord Color Scheme](https://www.nordtheme.com/), and to match it there is a small collection of wallpapers included, most of which are part of the [ImageGoNord Project](https://ign.schrodinger-hat.it/) 

## Icons
The original Icons come from [weather-icons](https://github.com/Makin-Things/weather-icons) and where adapted to work here.

## Customization
There are multiple options for customizing this, as a simple html template it can be transformed into anything.

You can customize the search engine, by default it uses Google, but it can be customized following the instructions down bellow.

This page does not have access to your location, so to change the weather location, you are going to have to follow the instructions down bellow.

You can open any of these files in any text editor. Just make sure not to move them from the `src` folder and do not change the extension of the file.

### Using your own links
To add your own link, find the file called `index.html`.

The part you are looking for is around line 22. It is divided between 2 sections.

Section 1 controls a group of links that belong to a category, for example, a Email category. It starts with `<a>Link 1/</a>`, here `Link` is the larger title for the group.

```html
 <a>Email/</a>
    <ul>
        <li>
            ├── <a href="http://gmail.com/" target="_blank">Gmail</a>
        </li>
        <li>
            └── <a href="http://http://outook.com//" target="_blank">Outlook</a>
        </li>
    </ul>
```

The second section or section 2, controls each individual link that can be added an it has 2 variations, the first one uses the regular `├─` to represent the first or inline tree, the second one uses the `└──` which should only be used for the last link, following the example of a Email category, this is what section 2 would be.

```html
<li>
    ├── <a href="http://gmail.com/" target="_blank">Gmail</a>
</li>
<li>
    └── <a href="http://http://outook.com//" target="_blank">Outlook</a>
</li>
```

### Adding Categories
To add more sections just copy the first section and paste it right after the `</ul>`

Adding and extra category for social media after the Email would make the code go from this.

```html
 <a>Email/</a>
    <ul>
        <li>
            ├── <a href="http://gmail.com/" target="_blank">Gmail</a>
        </li>
        <li>
            └── <a href="http://http://outook.com//" target="_blank">Outlook</a>
        </li>
    </ul>
```

To this

```html
 <a>Email/</a>
    <ul>
        <li>
            ├── <a href="http://gmail.com/" target="_blank">Gmail</a>
        </li>
        <li>
            └── <a href="http://outook.com/" target="_blank">Outlook</a>
        </li>
    </ul>
<a>Social Media/</a>
<ul>
    <li>
        └── <a href="https://www.facebook.com/" target="_blank">Facebook</a>
    </li>
</ul>
```
### Change the search engine
To change search engine to DuckDuckGo or any other, find the `script.js` file. I have provided a few examples for the most common search engines.

In here you'll find the following function.

```javascript
function searchEngine(query) {
    const url = `https://www.google.com/search?q=${query}`;
    window.location.href = url;
}
```
You can use any of the following snippets to change it to your prefer search engine.

#### DuckDuckGo
```javascript
function searchEngine(query) {
    const url = `https://duckduckgo.com/?q=${query}`;
    window.location.href = url;
}
```

#### Bing
```javascript
function searchEngine(query) {
    const url = `https://www.bing.com/search?q=${query}`;
    window.location.href = url;
}
```

#### Yahoo!
```javascript
function searchEngine(query) {
    const url = `https://search.yahoo.com/search?p=${query}`;
    window.location.href = url;
}
```

#### Yandex
```javascript
function searchEngine(query) {
    const url = `https://yandex.com/search/?text=${query}`; 
    window.location.href = url;
}
```

#### Ecosia
```javascript
function searchEngine(query) {
    const url = `https://www.ecosia.org/search?q=${query}`; 
    window.location.href = url;
}
```

### Change the Weather
