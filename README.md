# Mee6 Levels Scrapper

> This is a Unnoficial Repo for Scrap levels of the Mee6 Bot on Discord.

I build this Module to help me to develop Ninifarm and expand the Server to add more Discord servers on it :D


## Installation

> npm install @dinels/mee6-levels-scrapper

or

> yarn add @dinels/mee6-levels-scrapper


## Usage
First we import the `Mee6Levels` module, and then we create a new instance of this Class.


```ts
import Mee6Levels from "@dinels/mee6-levels-scrapper"

const mee6levels = new Mee6Levels(leaderBoardId); 

// leaderBoardId is the ID of the discord server that you want to use
// you can name the instance where ever you want it :D
```

## Getting the Users Levels
```ts
const data = await mee6levels.getUsersLevels();

// Actually will fetch all the data available and return a array with the users, the limit help to speed up the process
```


## Thanks for using