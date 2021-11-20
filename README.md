# API GET Request

API Request Using [Axios]](https://www.npmjs.com/package/axios).

[![NPM](https://nodei.co/npm/axios.png)](https://www.npmjs.com/package/axios)

## Basic Usage

### Import Axios & Discord JS v11 To Your Project

```js
// Use Node.JS Require
const axios   = require("axios") 
// npm i axios
const Discord = require("discord.js-v11")
// npm i discord.js-v11
```

### Replace "token" With Your Bot Token

```js
const token   = "token" 
// https://discord.com/developers/applications
```

### Change The URL To Use Your API

```js
"https://webresolver.nl/api.php?key=<KEY>&action=geoip&string=" + 
// https://webresolver.nl/api
```

### Blacklist

```js
blacklist  = [""] // Blacklist For Any Host
// Blacklist any Host, for example:
blacklist  = ["1.1.1.1"] 
blacklist  = ["1.1.1.1","8.8.8.8"] 
// Add Always "IP",
```

* `Feel Free To Use The Source`
* `Source Made By Liam1337`

### Response Object

| Error   | Type            | Note                                                                    |
|---------|-----------------|-------------------------------------------------------------------------|
|   401   | `Unauthorized`  | No Access To The Requested Web Page                                     |
|   404   | `Not Found`     | Incorrect URL Request                                                   |
|  1020   | `Access Denied` | The Request Is Blocked By For Example A Firewall                        |
