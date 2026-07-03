---
sidebar_position: 1
slug: /intro
---

# Introduction

**AllieService** is a complete player data management system for Roblox games.

## What does it do?

- ✅ **Loads & saves** player data automatically using DataStores
- ✅ **Replicates** data from server to client automatically
- ✅ **Fires signals** the moment any data changes
- ✅ **Session locking** to prevent data corruption
- ✅ **Cross-server messaging** for global events
- ✅ **Mock mode** for safe Studio testing

## Quick Start

### Server
```lua
local AllieService = require(ReplicatedStorage.Packages.AllieService).server

AllieService:init({
    template = require(script.DataTemplate),
    profileStoreIndex = "MyGame_v1",
    useMock = true,
})

function AllieService:onPlayerInit(player, data)
    data.lastJoin = os.time()
end

Players.PlayerAdded:Connect(function(player)
    AllieService:waitForData(player)
    AllieService:update(player, "coins", function(c)
        return c + 100
    end)
end)
```

### Client
``` lua

local AllieService = require(ReplicatedStorage.Packages.AllieService).client

AllieService:init()

print("My coins:", AllieService:get("coins"))

AllieService:getChangedSignal("coins"):Connect(function(new, old)
    print("Coins:", old, "->", new)
    coinsLabel.Text = tostring(new)
end)
```
