# Getting started



## Installing

Start off by making sure you have node and npm installed. Then install the package.

```shell-session
$ npm install tyblox.js
```

## Cookie

### What is a cookie?

A cookie is a value stored in your browser that websites can access. In this use case, the only cookie we care about is the `.ROBLOSECURITY` cookie.

### How do I get my `.ROBLOSECURITY` cookie?

{% hint style="danger" %}
### NEVER GIVE AWAY YOUR COOKIES TO ANYONE! <a href="never_give_away_cookies" id="never_give_away_cookies"></a>
{% endhint %}



{% tabs %}
{% tab title="Example A (Most Recommended to use)" %}
## Example A

In this example, you are using

### Storing your cookie

{% code title=".env" %}
```
cookie=put your cookie here
```
{% endcode %}

### Index File

Your main file should look a bit like this. Make sure you have the dependancies shown in this such as the [`dotenv`](https://npmjs.com/package/dotenv) dependancy.

{% code title="index.js" %}
```javascript
const tyblox = require("tyblox.js") // Can be named anything, preferably tyblox.
const client = new tyblox.Client() // Can be named anything - just remember to keep the same name
require("dotenv").config()

client.on("ready", () => {
    console.log("Ready!")
    
    console.log("Logged in as " + client.user.username)
})

client.login(process.env.cookie) // Make sure its the correct value name for your Roblox CookieExample B
```
{% endcode %}
{% endtab %}

{% tab title="Example B (Recommended for beginner coders)" %}
## Example B

In this example, you are using basic code to get your application up and running. We still recommend you use **Example A **however for better security.

### Storing your cookie

{% code title="settings.json" %}
```json
{ 
    "cookie": "put your cookie here"
}
```
{% endcode %}

### Index File

Your main file should look a bit like this. Make sure that if you change the name for any of these values, you update any methods or objects under the variable names.

{% code title="index.js" %}
```javascript
const tyblox = require("tyblox.js") // Can be named anything, preferably tyblox.
const client = new tyblox.Client() // Can be named anything - just remember to keep the same name
const { cookie } = require("./settings.json")

client.on("ready", () => {
    console.log("Ready!")
    
    console.log("Logged in as " + client.user.username)
})

client.login(cookie)
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Git and `.gitignore`

Git is a fantastic tool to keep track of your code changes and allows you to upload progress to services like [Github](https://github.com). While this is super useful to share code with other developers, it can also have you mistakenly upload your files with sensitive data such as your [cookie](getting-started.md#cookie).

