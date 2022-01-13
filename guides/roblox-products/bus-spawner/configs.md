# Bus Spawner Configurations

### Example Config File

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
Any Items marked with a star :star: are **required**&#x20;
{% endhint %}

{% tabs %}
{% tab title="Basic Spawner" %}
#### :star:Default Settings

> The **defaultSettings** field is if you want the spawner to pick the default settings, you can look in the main file, but please do not edit it to see the default settings. If it is set to **true**, then nothing set in your config file will be in effect.
>
> **Value Options:** \
> ****\
> ****`true` | `false`
>
> **Default Value:**\
> \
> `false`
{% endtab %}

{% tab title="Pro Spawner" %}

{% endtab %}

{% tab title="ELITE (Custom Order) Spawner" %}
,
{% endtab %}
{% endtabs %}

