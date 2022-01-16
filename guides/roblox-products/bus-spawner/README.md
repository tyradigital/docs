---
description: A guide on how to setup the bus vehicle spawner for roblox bus communities.
---

# Bus Spawner

### Initial Setup

Once you have imported the .RBXM file that you have downloaded, ungroup everything in the folder where it asks you to.

### Adding Buses

To add buses to the spawner, move the model into the 'Buses' folder within ServerStorage.&#x20;

Next, go to ReplicatedStorage -> Buses. Copy the '00' BoolValue and paste it into which category you would like.&#x20;

CategoryR is the main page, CategoryR2 is the secondary page.

&#x20;Once you have pasted the value into the folder, rename the value to the bus name and check the 'Attributes' section of the value in the Properties tab.&#x20;

You will see different values. You are free to customise these to your liking.

CurrentDriver - String&#x20;

Description - String&#x20;

IsSpare - BoolValue&#x20;

Model - String&#x20;

Year - Integer

Please ensure that the Bus name is the same for the bus stored in ServerStorage and the BoolValue's Name.

#### Now you're done! You can look below or go to the next page for the full guide to configuring your spawner

{% content-ref url="configs.md" %}
[configs.md](configs.md)
{% endcontent-ref %}
