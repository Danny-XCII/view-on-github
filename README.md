# View on Github

A simple JavaScript library that adds a "View on Github" bar to your web app. Great for personal 
and portfolio projects. This library is free to use for personal or commercial use.

### How to use

It's **really** easy to start using *View on Github*; simply include the library and create a new 
`ViewOnGithub` object. 

The class constructor takes in just **three** parameters: 

- `el` - the ID of the HTML element that you'd like to use for the "VOG" bar.
- `username` - your Github username.
- `project` - the name of your project on Github (the slug).

To add your own "VOG" bar, simply add the below to your HTML page before the closing `</body>` tag:

```html
<script src="https://tools.winningweb.co.uk/view-on-github/ViewOnGithub.js"></script>
<script>
new ViewOnGithub( "html-id", "github-username", "project-name" );
</script>
```