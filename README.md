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
  - [Client creation and first request](#client-creation-first-request-and-using-algorithm)
- [Decrease Webpack bundle size](#decrease-webpack-bundle-size)
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

#### Customizing telemetry collection data example

```typescript
import { Config } from 'trello.js';

const config: Config = {
  key: 'YOUR_API_KEY',
  token: 'YOUR_API_TOKEN',
  telemetry: {
    allowedToPassAuthenticationStatus: false,  // true by default
    allowedToPassRequestStatusCode: true,  // true by default
    allowedToPassRequestTimings: false,  // true by default
    allowedToPassTimeout: true, // true by default
  },
};
```

If you want to disable telemetry, set the `telemetry` field to `false`.

#### Disabling telemetry collection example

```typescript
import { Config } from 'trello.js';

const config: Config = {
  key: 'YOUR_API_KEY',
  token: 'YOUR_API_TOKEN',
  telemetry: false, // Telemetry will not be collected
};
```

## Usage

#### Key and token pair issuing

To interact with the Trello API, you must first get API Key and API Token.
The [official documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#authentication-and-authorization) does a good job of describing how to issue a Key and Token pair to work.

#### Client creation, first request and using algorithm

Take the key and token obtained in the previous step and pass them to `TrelloClient`, then call to create a new board.

```typescript
import { TrelloClient } from 'trello.js';

const trelloClient = new TrelloClient({
  key: 'YOUR_API_KEY',
  token: 'YOUR_API_TOKEN',
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

The algorithm for using the library:

```typescript
client.<group>.<methodName>(parametersObject);
```

Available groups:

- [actions](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-group-actions)
- [applications](https://developer.atlassian.com/cloud/trello/rest/api-group-applications/#api-group-applications)
- [batch](https://developer.atlassian.com/cloud/trello/rest/api-group-batch/#api-group-batch)
- [boards](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards)
- [cards](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-group-cards)
- [checklists](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-group-checklists)
- [customFields](https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/#api-group-customfields)
- [emoji](https://developer.atlassian.com/cloud/trello/rest/api-group-emoji/#api-group-emoji)
- [enterprises](https://developer.atlassian.com/cloud/trello/rest/api-group-enterprises/#api-group-enterprises)
- [labels](https://developer.atlassian.com/cloud/trello/rest/api-group-labels/#api-group-labels)
- [lists](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-group-lists)
- [members](https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-group-members)
- [notifications](https://developer.atlassian.com/cloud/trello/rest/api-group-notifications/#api-group-notifications)
- [organizations](https://developer.atlassian.com/cloud/trello/rest/api-group-organizations/#api-group-organizations)
- [plugins](https://developer.atlassian.com/cloud/trello/rest/api-group-plugins/#api-group-plugins)
- [search](https://developer.atlassian.com/cloud/trello/rest/api-group-search/#api-group-search)
- [tokens](https://developer.atlassian.com/cloud/trello/rest/api-group-tokens/#api-group-tokens)
- [webhooks](https://developer.atlassian.com/cloud/trello/rest/api-group-webhooks/#api-group-webhooks)

The name of the methods is the name of the endpoint in the group without spaces and in `camelCase`.

The parameters depend on the specific endpoint. For more information, [see here](https://mrrefactoring.github.io/trello.js/).

## Decrease Webpack bundle size

If you use Webpack and need to reduce the size of the assembly, you can create your client with only the groups you use.

```typescript
import { BaseClient } from 'trello.js';
import { Boards, Members } from 'trello.js/out/api';

export class CustomTrelloClient extends BaseClient {
  boards = new Boards(this);
  members = new Members(this);
}
```

## Take a look at our other products

* [Confluence.js](https://github.com/MrRefactoring/confluence.js) - confluence.js is a powerful Node.JS / Browser module that allows you to interact with the Confluence API very easily
* [Jira.js](https://github.com/MrRefactoring/jira.js) - a JavaScript/TypeScript wrapper for the JIRA REST API

## License

Distributed under the MIT License. See `LICENSE` for more information.
