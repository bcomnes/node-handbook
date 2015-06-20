# node-learnbook

Lets learn node the node way! 🐪 🙈

![](img/sparkle.gif)

It's uncertain where this trek will take us, but we will try to strike a balance between instructional material, history, and philosophies on node, javascript, software, programming, engineering, communication, and tooling.

We may also cover a few other useful places to learn cool tools and skils like:

- html
- css
- git
- irc
- unix
- app deployment

## TOC

<!-- TOC depth:6 withLinks:1 updateOnSave:1 -->
- [node-learnbook](#node-learnbook)
	- [TOC](#toc)
	- [Required Provisions](#required-provisions)
	- [Company and Time-line](#company-and-time-line)
	- [Getting started.](#getting-started)
		- [[Javascript for Cats](http://jsforcats.com)](#javascript-for-catshttpjsforcatscom)
		- [[nodeschool.io: javascripting](https://github.com/sethvincent/javascripting)](#nodeschoolio-javascriptinghttpsgithubcomsethvincentjavascripting)
		- [[Codecademy](http://www.codecademy.com/en/tracks/javascript)](#codecademyhttpwwwcodecademycomentracksjavascript)
	- [What is javascript?](#what-is-javascript)
	- [What is node?](#what-is-node)
	- [How to get node](#how-to-get-node)
		- [OSX](#osx)
		- [Linux](#linux)
		- [Windows](#windows)
	- [How to know node](#how-to-know-node)
		- [[The Art of Node](https://github.com/maxogden/art-of-node#the-art-of-node)](#the-art-of-nodehttpsgithubcommaxogdenart-of-nodethe-art-of-node)
		- [[Node.js in Action](http://www.manning.com/cantelon/)](#nodejs-in-actionhttpwwwmanningcomcantelon)
			- [What this book does well:](#what-this-book-does-well)
		- [[Nodeschool.io](http://nodeschool.io/) Core](#nodeschooliohttpnodeschoolio-core)
			- [[Node School Core](http://nodeschool.io/#workshopper-list)](#node-school-corehttpnodeschoolioworkshopper-list)
	- [Mastering Javascript](#mastering-javascript)
		- [[Nodeschool.io](http://nodeschool.io/) Core Redux](#nodeschooliohttpnodeschoolio-core-redux)
		- [Effective Javascript](#effective-javascript)
		- [Eloquent Javascript](#eloquent-javascript)
	- [Node in the browser?](#node-in-the-browser)
	- [`npm` stuffs](#npm-stuffs)
	- [Tools to write Node](#tools-to-write-node)
	- [Spellcheck for Javascript](#spellcheck-for-javascript)
	- [ES6 and Beyond](#es6-and-beyond)
	- [JS is the webs assembly](#js-is-the-webs-assembly)
	- [Streams](#streams)
	- [Semver](#semver)
	- [Frameworks](#frameworks)
	- [html + css](#html-css)
	- [Community](#community)
	- [Mastering git](#mastering-git)
	- [Electron?](#electron)
	- [Cool modules](#cool-modules)
	- [People to watch](#people-to-watch)
	- [... [WIP]](#-wip)

<!-- /TOC -->

## Required Provisions

* A computer 💻 (hopefully running a flavor of unix)
  * OS X will be easiest to use
  * Linux and windows are a bit more difficult
* Internet and a browser 📞
* some time and interest 🙇

We will be acquiring items and tools along the way.

## How long is this adventure going to last

Getting through all the material is going to take time.  Visit the places that seem most interesting, and don't get stuck on something you find boring or overwhelming.  Programming is [more fun and effective as a hobby](https://twitter.com/substack/status/586438480164589568) and you will learn more if you treat it that way.

Don't go at it alone.  Get in touch with your local javascript and node community and make friends.  Don't live near anyone?

![](http://bret.io/media/ownyourgram.com/igiRHQt1.jpg)

There is a vibrant and active community that is on-line at all hours of the day so you can remain isolated but still be connected with thousands of people.  Don't go at it alone! Skip ahead to [#community](https://github.com/bcomnes/node-learnbook#community) to find your way into the node community.

## Getting started.

Before we get started, we need to be somewhat prepared to face what lies ahead.  In order to communicate with the local populous you need to learn how to speak javascript

### [Javascript for Cats](http://jsforcats.com)
If your a cat, like to have fun or learn like a cat, this will teach you the basics of javascript.

![](img/jsforcats.png)

### [Codecademy](http://www.codecademy.com/en/tracks/javascript)
If you tend to be a bit more serious, Codecademy's Javascript is also a good place to start.  Don't feel bad if you get bored and don't finish.  It's picking up the syntax that counts.

![](img/codecademy.png)

### [nodeschool.io: javascripting](https://github.com/sethvincent/javascripting)

We will revisit [nodeschool.io](http://nodeschool.io/) in the near future, but for now the `javascripting` nodeschool adventure is a good place to start learning javascript.  It may be a bit steep for absolute beginners.  Read through the [`get going`](http://nodeschool.io/#get-going) section to get up and running.

For those who know their way around `npm` already:

```sh
npm install -g javascripting

```

![](img/javascripting.png)

## What is javascript?

Javascript is the programming language that your web browser comes with, but these days its becoming a lot more.  Its pretty okay.  Its not the best language and has a lot of warts, but it gets a lot right, and you don't really have a choice about using it or not (although this is changing, for better or for worse).  You should shouldn't skip javascript though.

[Douglas Crockford](http://www.crockford.com) gave a good presentation that effectivly answers the question: "What is Javascript?" in his 2012 "Javascript: Your New Overlord" presentation:

[![Javascript: Your New Overlord](img/crockford.gif)](https://www.youtube.com/watch?v=Trurfqh_6fQ)

[Javascript: Your New Overlord](https://www.youtube.com/watch?v=Trurfqh_6fQ)

You should watch it!

## What is node?

Node was created by [Ryan Dahl](http://tinyclouds.org).  He has since pulled a [Mark Pilgrim](http://www.diveintomark.link) and [HTTP 410](http://en.wikipedia.org/wiki/Mark_Pilgrim#.22Disappearance.22_from_the_Internet)'d himself from the INTERNET, but occasionally will post interesting undocumented code projects to his [github](https://github.com/ry) or [post to the node mailing list](https://groups.google.com/forum/#!activity/nodejs/2JvBi5ikhDgJ).

The best way to understand what node is to listen to Ryan describe it himself.

[![Ryan Dahl: Original Node.js presentation](img/ry1.gif)](https://www.youtube.com/watch?v=ztspvPYybIY)

[Ryan Dahl: Original Node.js presentation](https://www.youtube.com/watch?v=ztspvPYybIY)

[Ryan Dahl: Original Node.js presentation Slide Deck](doc/jsconf.pdf) (pdf)

[![Ryan Dahl Talk - NodeConf Theatre 2012.ogv](img/ry2.gif)](https://www.youtube.com/watch?v=GhFrlX0LdFA)

[Ryan Dahl Talk - NodeConf Theatre 2012.ogv](https://www.youtube.com/watch?v=GhFrlX0LdFA)

[Ryan Dahl Talk NodeConf Theatre 2012 Slides](doc/nodeconf2012.pdf) (pdf)

## How to get node

There are lots of ways to install node.  Lets visit some of the better ways of this contentious topic.

### OSX

<img src="img/osx.png" height="175">

The only prequisite to installing node is that you have a copy of [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).  This installs the OS X build toolchain.  This is a really complicated set of programs that let you build software from source.  Some node modues use `c` "native addons" which require that you have a `c` compiler on your computer.  Its free and the only place to get it is from App store (boooo).

<img src="img/xcode.png" height="175">

OSX Terminal.app is pretty great for everything you need to do (although historically it used to suck).  Just use OSX's terminal unless you have a reason not to.

<img src="img/terminal.png" height="175">

There are two great options to install `node` on OSX: Homebrew and the Offical Installer.

- #### [Homebrew](http://brew.sh)

  <img src="img/brew.png" height="175">

  Homebrew is a lightwheight package manager for OS X.  Homebrew:

    - downloads and installs Unix CLI programs from source code
    - keeps track of which programs you installed and at what version
    - updates your programs when updates are available
    - download non-npm programs and utilities

  Until npm has packages for all external dependencies, having `brew` installed can be really helpful.

  Visit the [Homebrew](http://brew.sh) website for the latest instructctions on how get `brew` installed.  Once you have homebrew installed installing node is as easy as running:

  ```sh
  $ brew install node
  ```

  To get new releases of node in the future download run:

  ```sh
  $ brew update
  $ brew upgrade node
  ```

  Easy.

  A quick brew `101` so that you know what you just did:

    - `/usr/local` is a special unix folder where 'userspace' (e.g. not managed by the OS) programs can be safely installed.
    - Homebrew turns `/usr/local` into a git repo
    - `brew` uses "Formula" written as simple ruby scripts to download, build and install programs to `/usr/local/Cellar`
    - The active version of a program installed by `brew` is symlinked to `/usr/local/{bin,lib,...}`
    - `brew update` updates the `/usr/local` repo so that you have the latest 'Formula' available
    - All Formula can be built from source, but most have precompiled 'Bottles' (a.k.a. binaries) to save time and battery.
    - Old versions of programs can be installed by going back into the git history.


- #### [The official node installer `node-v*.pkg`](https://nodejs.org/download/)

  ![](img/osxinstaller.png)

  Easy.  You go to the node website, you [download the .pkg](https://nodejs.org/download/), and install it.  It installs to the same location that homebrew installs to: `/usr/local/bin`.


### Linux

Running Linux? (👍btw)

![](img/stop.gif)

Don't just reach for your systems package manager.  Linux distributions almost universally ship painfully dated versions of node and npm (unless you are running something like [Arch Linux](https://www.archlinux.org)), and install them in ways that make them a total pain to use for the sake of 'stability'.  This sucks.

Luckily there is a comprensive resource on how to add software channels that have updated versions of node to common package mangers:

[Installing-Node.js-via-package-manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

Don't sudo with npm!  (even -g).  Set up `npm` so that it works without sudo:

[Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

### Windows

> Windows is very important.  Just like PHP
-- [Ryan Dahl](https://youtu.be/jo_B4LTHi3I?t=56s)

On windows, pretty much stick with the official installer:

[Official Installer](https://nodejs.org/download/)

There are a few package managers on windows which you are free to explore on your own time:

- [Chocolatey](https://chocolatey.org)
- [Scoop](https://github.com/lukesampson/scoop)

Windows support for node is pretty good.  Windows support for most npm modules is pretty bad.

You will also need to install a free version of Visual Studio for building modules that have native addons:

[Visual Studio Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx)

## How to know node

Now that we have seen a bit about the history and motivations behind node, lets actually visit the nessisary materials to acutally understand node.

### [The Art of Node](https://github.com/maxogden/art-of-node#the-art-of-node)

[![](img/art-of-node.png)](https://github.com/maxogden/art-of-node#the-art-of-node)

Written by the prolific [Max Ogden](http://maxogden.com),

<img src="img/max.gif" alt="thanks http://substack.net/art" height="200">

[maxogden/art-of-node](https://github.com/maxogden/art-of-node#the-art-of-node) gives a thorough explanation of how node works, how to write node flavored javascript, callbacks and async programming, writing and using modules and how to be apart of the node/js community and do your best.  Its full of insight and clear reasoning, but when you are new to js and/or node, all of the subtleties can fly by pretty quickly.  **It's a short and easily digestible read, that you should probably read through a few times**.

### [Node.js in Action](http://www.manning.com/cantelon/)

[![node.js in action image cover](img/inaction.jpg)](http://www.manning.com/cantelon/)

([2nd Edition Coming Soon](http://www.manning.com/cantelon2/))x

Written by a crew of early prolific node.js module developers, this book is *totally great* and *somewhat flawed*, and a bit dated at this point as well.  But for those that learn by example, *this is the book for you*.

It covers the basics of all the well known [Visionmedia](https://github.com/visionmedia)  modules (e.g. [express](http://expressjs.com), [mocha](http://mochajs.org), [connect](https://github.com/senchalabs/connect#readme), [jade](http://jade-lang.com), [ejs](http://www.embeddedjs.com) etc...).  You will learn to use all of these early node tools, including core node modules, async programming, testing, templating, CLI programs, and even node clustering from this book through the various included projects and examples.

Despite the fact that many of the modules discussed have changed their APIs, this is still a great reference and useful for learning node.

Unfortunately, this great collection of knowledge is tombed away in a book (*we should change that though*).  Get the book if you can.

#### What this book does well:

- Introduction to node, events async programming and flow control
- [socket.io](http://socket.io) examples
- npm modules: publishing and consuming
- Module resolution and loading (a.k.a. [require('foo')](https://nodejs.org/api/modules.html#modules_module_require_id))
- http
- ORMs and Databases
- Middleware and [Connect](https://github.com/senchalabs/connect)
- [Express](http://expressjs.com) photo hosting and microblogging app
- Testing (mostly Mocha)
- EJS and Jade templating
- Node application deployment
- System Calls
- Raw TCP/IP
- CLI Tools

Focus on the first and last 1/3 of the book, and don't sweat the middle 1/3rd (express/connect).

### [Nodeschool.io](http://nodeschool.io/) Core

<img src="https://cdn.rawgit.com/bcomnes/node-learnbook/master/img/schoolhouse.svg">

Nodeschool is a free resource that offers lessions and tutorials on tons of topcis, mostly relating to node and js.  The key is that the lessons are written for `node` and you install them with `npm` (usually).

#### [Node School Core](http://nodeschool.io/#workshopper-list)

Start with [learnyounode](https://github.com/workshopper/learnyounode) which can be installed with

```sh
npm i -g learnyounode
```

![](img/learnyounode.png)

(No, not [learnyouhaskell](http://learnyouahaskell.com/), that lives on a different planet)

After this, brush up on your `git` in `git-it`:

```sh
npm i -g git-it
```

![](img/git-it.png)

Finally, wrap your head around `npm`


```sh
npm i -g how-to-npm
```

![](img/how-to-npm.png)

## Javascript the hard parts

Javascript is easy to learn, but hard to master.  It's a flawed language with lots of subtle pitfalls to be navigated.  These materials will help you master the more subtle and difficult aspects of the language.


###  [Nodeschool.io](http://nodeschool.io/) Core Redux

If you haven't already, finish up the core nodeschool workshops.  The last two are the most conceptually difficult:

`scope-chains-closures` teaches you all about scopes and closures!

```sh
npm i -g scope-chains-closures
```

`streams adventure` teaches you about streams.  This is a good place to start, but this adventure is dated and needs work.  Have you found a better streams adventure or tutorial?  Please open an issue with the links/info!

```sh
npm i -g streams-adventure
```

### [Effective Javascript](http://effectivejs.com)

![](img/ejs.jpg)

[Effecitve Javascript](http://effectivejs.com) is an excellent book focusing only on Javascritpt the Language.  It has answers and clarifications for the more confusing aspects of the languages, explains the prototype chain in a clear way, and covers the more advanced aspects of JS.  The only downside is the cost of the book, but is well worth it if you can afford it. A+

### [Eloquent Javascript](http://eloquentjavascript.net)

![](img/eloquent.png)

This is a free

### [Javascript: The Good Parts]()

## Node in the browser?

- Browserify-handbook

## `npm` stuffs

- npm scripts
- package.json
- SPDX license expression

## Tools to write Node

## Spellcheck for Javascript

## ES6 and Beyond

## JS is the webs assembly

## Streams

- Streams handbook

## Semver

- http://semver.org/
- http://semver-ftw.org/

## Frameworks

- http://lebron.technology/
- http://hapijs.com/
- http://expressjs.com/
- https://github.com/Raynos/http-framework
- https://github.com/Raynos/mercury
- https://jshttp.github.io/

## html + css

- Dive into html5
- HTML5 and css Jon Ducket

## Community

- irc
- github
- twitter
- conferences
- gitter/slack?

## Mastering git

- orily git
- git for 5 year olds

## Electron?

- yay desktop apps
- electron handbook

## Cool modules

## People to watch

## Link Dump

This document was created  after amassing a large collection of node related links helpful to learning and understanding node.  Here is a partial linkdump until the rest of the guide can be written.

- https://nodejs.org/about/
- http://substack.net/node_aesthetic
- http://substack.net/many_things
- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- https://github.com/Raynos/http-framework
- https://github.com/substack/browserify-handbook#browserify-middleware-enchilada
- http://maxogden.com/a-month-of-modules.html
- http://maxogden.com/nested-dependencies.html
- http://maxogden.com/node-packaged-modules.html
- http://substack.net/finding_modules
- https://github.com/substack/node-mkdirp/blob/master/index.js
- https://github.com/substack/stream-handbook
- http://www.ustream.tv/recorded/46670615
- https://github.com/maxogden/slides
- https://gist.github.com/substack/68f8d502be42d5cd4942
- https://en.wikipedia.org/wiki/Turtles_all_the_way_down
- https://gist.github.com/substack/5075355
- http://www.macwright.org/big/
- http://0fps.net/2013/01/22/commonjs-why-and-how/
- http://blog.izs.me/post/25906678790/on-es-6-modules
- http://tomdale.net/2012/01/amd-is-not-the-answer/
- https://en.wikipedia.org/wiki/Modular_programming


## ... [WIP]
