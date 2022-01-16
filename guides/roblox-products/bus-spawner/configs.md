---
description: Here you can find how to configure your spawner to your personal liking.
---

# Bus Spawner Configurations

### Default Config File

{% code title="Basic Config File" %}
```lua
-- VIEW https://docs.tyra.digital/guides/roblox-products/bus-spawner/configs FOR MORE DETAILS

return {
	defaultSettings = false,

	title = 'My Groups Spawner',
	theme = 'light',
	despawnOnLeave = true,
	extraSpawnerCategories = {
		categoryTwo = 'Secondary Spawn',
	}
}
```
{% endcode %}

### ALL Configuration Options

{% hint style="info" %}
Any Items marked with a star :star: are **required**
{% endhint %}

{% tabs %}
{% tab title="Basic Spawner" %}
:star: **Default Settings**

> The **`defaultSettings`** field is if you want the spawner to pick the default settings, you can look in the main file, but please do not edit it to see the default settings. If it is set to **true**, then nothing set in your config file will be in effect.
>
> **Value Options:**\
> \
> `true` | `false`
>
> **Default Value:**\
> \
> `false`

:star: **Title**

> The **`title`** field is if the name at the top of your spawner. You could name this your group name, or just name it 'My Epic Bus Spawner' if you'd like.
>
> **Value Options:**\
> \
> `String`
>
> **Default Value:**\
> \
> `'Spawner'`

**Theme**

> The **`theme`** field is if you want to have it be light or dark theme (Psst, dark is cooler :sunglasses:).
>
> **Value Options:**\
> \
> `'light'` | `'dark'`
>
> **Default Value:**\
> \
> `light`

:star:**Despawn on Leave**

> The **`despawnOnLeave`** field is if you want the spawner to despawn someones bus after the exit the server/game. This is useful to prevent unnessecary lag and so you don't have to btools somebody's bus when they leave.
>
> **Value Options:**\
> \
> `true` | `false`
>
> **Default Value:**\
> \
> `true`

:star: **Extra Spawner Categories**

> The **`extraSpawnerCategories`** field is if you want to add more spawner categories (up-to-4).

{% tabs %}
{% tab title="Category Two (categoryTwo)" %}
```
> This is the second, non-paid category you are allowed to have. If you don't want it you can just not include the **`extraSpawnerCategories`** object in the configuration file, or set `categoryTwo` to `false`.
> 
> **Value Options:** \
> \
> `String` | `false`
>
> **Default Value:**\
> \
> `false`
```
{% endtab %}
{% endtabs %}
{% endtab %}

{% tab title="ELITE (Custom Order) Spawner" %}
soon
{% endtab %}
{% endtabs %}
