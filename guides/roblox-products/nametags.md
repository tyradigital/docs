---
description: A guide on how to set up the Nametag system.
---

# Nametags

### Initial Setup

Once you have imported the `.RBXM` file that you have downloaded, move the NametagScript into `ServerScriptService` and delete the old folder.

Create an `IntValue` in each team (if your game has teams) and name it `GroupID`. This is case sensitive. For the value of this, replace it with the `GroupID` of the group related to this team. This is ideal for games that offer different divisions.

If your game does not use teams, instead create a default team and insert the GroupID value into there.

### Configuration

#### **Removing nametags for a certain team**:

If you would like to remove nametags for a specific team, simply do not add the GroupID value into the team. This will cause the nametags to not appear.

#### Badges:

This system offers badges that can be placed above the name of the user. To do this, see the table below. **Premium users are added by default**.

{% tabs %}
{% tab title="Based off of Group Rank" %}
```lua
if plr:GetRankInGroup(GROUPIDHERE) >= RANKIDHERE then
    NT.Frame.Status.BADGENAMEHERE.Visible = true
end
```

Example:

```lua
if plr:GetRankInGroup(12345) >= 12 then -- Anyone in the group with the ID of 12345 and has the rank 12 or above will get the Developer badge.
    NT.Frame.Status.Developer.Visible = true 
end
```
{% endtab %}

{% tab title="Based off of Gamepass" %}
```lua
local MPS = game:GetService("MarketplaceService")
if MPS:UserOwnsGamepassAsync(plr.UserId, GAMEPASSIDHERE) then
    NT.Frame.Status.BADGENAMEHERE.Visible = true
end
```

Example:

```lua
local MPS = game:GetService("MarketplaceService")
if MPS:UserOwnsGamepassAsync(plr.UserId, 123456) then
    NT.Frame.Status.Donator.Visible = true
end
--Anyone who owns the gamepass 123456 will get the 'Donator' Badge.if plr:GetRankInGroup(GROUPIDHERE) >= RANKIDHERE then
    NT.Frame.Status.BADGENAMEHERE.Visible = true
end
Example:
if plr:GetRankInGroup(12345) >= 12 then -- Anyone in the group with the ID of 12345 and has the rank 12 or above will get the Developer badge.
    NT.Frame.Status.Developer.Visible = true 
end
```
{% endtab %}

{% tab title="Based off of User" %}
```lua
if plr.UserId == USERIDHERE then
    NT.Frame.Status.BADGENAMEHERE.Visible = true
end
--We use UserId because player names can change!
```

Example:

```lua
if plr.UserId == 1234 then
    NT.Frame.Status.Cool.Visible = true
end
--Player with the ID 1234 will get the 'Cool' badge.
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Any badge should be added under the default premium badge and above&#x20;

`NT.Parent = Head`&#x20;

Do not add them anywhere else as this may cause the code to break!
{% endhint %}
