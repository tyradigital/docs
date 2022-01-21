---
description: A guide on how to set up our Radio System.
---

# Radio System

### Initial Setup

Import the `.RBXM` file into your game and ungroup the models in their respective locations.

For each team in your game:

Create a `StringValue` named `Shortened`. In this value, place what you would like the prefix of a user's message in. If do not insert this value, no prefix will show.

_If your value is `OK`, then it will show as `[OK] Alfred: Ahoy there!`_



Create a `BoolValue` named `RadioAllowed`. Check the value if you would like this team to access the system.

### Configuration

To configure the radio, navigate to `RadioGui -> Radio -> Handler -> Config`. Here you can change the key to activate the radio.

Feel free to configure the toggle button.&#x20;
