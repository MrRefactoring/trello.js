<div align="center">
  <img alt="Trello.js logo" src="https://svgshare.com/i/U4A.svg"/>

<a href="https://www.npmjs.com/package/trello.js"><img alt="NPM version" src="https://img.shields.io/npm/v/trello.js.svg?maxAge=3600&style=flat-square" /></a>
<a href="https://www.npmjs.com/package/trello.js"><img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/trello.js.svg?maxAge=3600&style=flat-square" /></a>
<a href="https://github.com/MrRefactoring/trello.js"><img alt="build status" src="https://img.shields.io/github/workflow/status/mrrefactoring/trello.js/ci?style=flat-square"></a>
<a href="https://github.com/mrrefactoring/trello.js/blob/develop/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mrrefactoring/trello.js?color=green&style=flat-square"/></a>

<span>JavaScript / TypeScript library for Node.JS and browsers to easily interact with Atlassian Trello API</span>
</div>

## About

trello.js is a powerful [Node.JS](https://nodejs.org/) / Browser module that allows you to interact with the [Trello API](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/) very easily.

Usability, consistency, and performance are key focuses of trello.js, and it also has nearly 100% coverage of the Trello API. It receives new Trello features shortly after they arrive in the API.

## Table of contents

- [Installation](#installation)
- [Telemetry information collection agreement](#telemetry-information-collection-agreement)
  - [Customizing telemetry collection data example](#customizing-telemetry-collection-data-example)
  - [Disabling telemetry collection example](#disabling-telemetry-collection-example)
- [Usage](#usage)
  - [Key and token pair issuing](#key-and-token-pair-issuing)
  - [Client creation and first request](#client-creation-and-first-request)
- [Contributes](#contributors)
- [License](#license)

## Installation

**Node.js 10.0.0 or newer is required.**

Install with the npm:

```bash
npm install trello.js
```

Install with the yarn:

```bash
yarn add trello.js
```

## Telemetry information collection agreement

The use of this library may collect, record and transmit data about the operation of the library and related data, as well as potentially personal data, including ip address from which the request is made, user agent from the device from which the request is made, version of the library used, version of the telemetry sending library, name of the invoked method, authorization type information (can be configured), callback information, onResponse middleware usage information, onError middleware usage information, queries usage information, body usage information in queries, HTTP response code (can be configured), request start date and time and response receipt date and time (can be configured), timeout settings.

The type and amount of data may vary with the version of the libraries and can be changed at any time without notice.

Telemetry data collection is enabled by default.

The following tracking parameters can be configured:

- Authentication status
- Request status code
- Request timings
- Timeout information

##### Customizing telemetry collection data example

```typescript
import { Config } from 'trello.js';

const config: Config = {
  apiKey: 'YOUR_API_KEY',
  apiToken: 'YOUR_API_TOKEN',
  telemetry: {
    allowedToPassAuthenticationStatus: false,  // true by default
    allowedToPassRequestStatusCode: true,  // true by default
    allowedToPassRequestTimings: false,  // true by default
    allowedToPassTimeout: true, // true by default
  },
};
```

If you want to disable telemetry, set the `telemetry` field to `false`.

##### Disabling telemetry collection example

```typescript
import { Config } from 'trello.js';

const config: Config = {
  apiKey: 'YOUR_API_KEY',
  apiToken: 'YOUR_API_TOKEN',
  telemetry: false, // Telemetry will not be collected
};
```

## Usage

##### Key and token pair issuing

To interact with the Trello API, you must first get API Key and API Token.
The [official documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#authentication-and-authorization) does a good job of describing how to issue a Key and Token pair to work.

##### Client creation and first request

Take the key and token obtained in the previous step and pass them to `TrelloClient`, then call to create a new board.

```typescript
import { TrelloClient } from 'trello.js';

const trelloClient = new TrelloClient({
  apiKey: 'YOUR_API_KEY',
  apiToken: 'YOUR_API_TOKEN',
});

async function main() {
  const createdBoard = await trelloClient.boards.createBoard({
    name: 'My first board',
    desc: 'From trello.js with love'
  });

  console.log(createdBoard);
}

main();

// Expected output:
// {
//   id: '562c56ea71b89509da09b802',
//   name: 'My first board',
//   desc: 'From trello.js with love',
//   descData: null,
//   closed: false,
//   idOrganization: '134d3ee72b12a9636211247e',
//   idEnterprise: null,
//   pinned: false,
//   url: 'https://trello.com/b/hUdovbPJ/my-first-board',
//   shortUrl: 'https://trello.com/b/hUdovbPJ',
//   prefs: {
//     ...
//   },
//   labelNames: {
//     ...
//   },
//   limits: {}
// }
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
