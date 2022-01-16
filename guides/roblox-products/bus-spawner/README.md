---
description: A guide on how to setup the bus vehicle spawner for roblox bus communities.
---

# Bus Spawner

### Initial Setup

Once you have imported the .RBXM file that you have downloaded, ungroup everything in the folder where it asks you to.

### Adding Buses

To add buses to the spawner, move the model into the 'Buses' folder within ServerStorage.

Next, go to `ReplicatedStorage -> Buses`. Copy the `00` `BoolValue` and paste it into which category you would like.

`CategoryR` is the primary spawning category, `CategoryR2` is the secondary spawning category.

Once you have pasted the value into the folder, rename the value to the bus name and check the `Attributes` section of the value in the Properties tab.

You will see different values. You are free to customize these to your liking.

### Values

{% tabs %}
{% tab title="CurrentDriver" %}
> _Type -_ **String**
>
> _Description -_ **Internal information used by the spawner to know who is driving the bus. Editing this value will BREAK the spawner!**
{% endtab %}

{% tab title="Description" %}
> _Type -_ **String**
>
> _Description -_ **Description of the bus that the player can see when spawning it.**
{% endtab %}

{% tab title="IsSpare " %}
> _Type -_ **Boolean**
>
> _Description -_ **Internal information used by the spawner to know if the bus is a spare.**
{% endtab %}

{% tab title="Model " %}
> _Type -_ **String**
>
> _Description -_ **The model of the bus that the player can see when spawning it.**
{% endtab %}

{% tab title="Year " %}
> _Type -_ **Integer**
>
> _Description -_ **The year of the bus that the player can see when spawning it.**
{% endtab %}
{% endtabs %}

### Premium Values

{% tabs %}
{% tab title="InService" %}

{% endtab %}

{% tab title="DecalId" %}

{% endtab %}
{% endtabs %}

### Notes

Please ensure that the bus name is the same for the bus stored in `ServerStorage -> Buses` and the name of the `BoolValue` stored in `ReplicatedStorage.`

#### _**Now you're done! You can look below or go to the next page for the full guide to configuring your spawner**_

{% content-ref url="configs.md" %}
[configs.md](configs.md)
{% endcontent-ref %}
