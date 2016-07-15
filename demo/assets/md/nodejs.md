<!--metadata
    title: NodeJS
    name: nodejs
    description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
    keywords:
        javascript
        server-side
    tree
        parent
            child
        neighbor
            neighbor's chils
-->

# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

## History
Ryan Dahl, creator of Node.js

Node.js was originally written in 2009 by Ryan Dahl. The initial release supported only Linux. Its development and maintenance was led by Dahl and later sponsored by Joyent.

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009. Node.js combined Google's V8 JavaScript engine, an event loop and a low-level I/O API. The project received a standing ovation.

In 2011, a package manager was introduced for the Node.js environment called npm. The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating and uninstallation of libraries.

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js. The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project. In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee. Unlike Node.js, the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.

In February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0. This brought V8 ES6 features into Node.js, and a long-term support release cycle. As of 2016, the io.js website recommends that developers switch back to Node.js.

## Overview

Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams and other core functions. Node.js's modules use an API designed to reduce the complexity of writing server applications.

Node.js applications can run on Mac OS X, Microsoft Windows, NonStop, and Unix servers. They can alternatively be written with CoffeeScript (a JavaScript alternative), Dart or Microsoft TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.

Node.js is primarily used to build network programs such as Web servers, making it similar to PHP. The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute in parallel, and use callbacks to signal completion or failure).

### Platform architecture

Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript. Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task. Node.js was created because concurrency is difficult in many server-side programming languages, and often leads to poor performance. Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.

Node.js was built on the Google V8 JavaScript engine since it was open-source under the BSD license, extremely fast, and proficient with internet fundamentals like HTTP, DNS, TCP. Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.

### Industry support

Thousands of open-source libraries have been built for Node.js, most of which are hosted on the npm website. Its developer community has two main mailing lists and the IRC channel #node.js on freenode. There is an annual Node.js developer conference, called NodeConf.

The open source community developed server frameworks to accelerate the development of applications. Common frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails, Meteor, Derby, and many others.

Modern desktop IDEs provide editing and debugging features specifically for Node.js applications. Such IDEs include Atom, Brackets, JetBrains WebStorm, Microsoft Visual Studio (with Node.js Tools for Visual Studio, or TypeScript with Node definitions), NetBeans, Nodeclipse Enide Studio (Eclipse-based) and Visual Studio Code. Certain online web-based IDEs also support Node.js, such as Codeanywhere, Cloud9 IDE and Koding. Regardless, any text editor such as Notepad++ may also be used in place of an IDE, albeit without code completion or debugging support.

## Technical details

>This section may be too technical for most readers to understand. Please help improve this section to make it understandable to non-experts, without removing the technical details. The talk page may contain suggestions. (August 2015) (Learn how and when to remove this template message)

Node.js is a Javascript runtime environment that processes incoming requests in a loop, called the event loop.

### Threading

Node.js operates on a single thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching. The design of sharing a single thread between all the requests that uses the observer pattern is intended for building highly concurrent applications, where any function performing I/O must use a callback. In order to accommodate the single-threaded event loop, Node.js utilizes the libuv library that in turn uses a fixed-sized threadpool that is responsible for all non-blocking asynchronous I/O operations.

A downside of this single-threaded approach is that Node.js doesn't allow vertical scaling by increasing the number of CPU cores of the machine it is running on without using an additional module, such as cluster, StrongLoop Process Manager or pm2. However, developers can increase the default number of threads in the libuv threadpool; these threads are likely to be distributed across multiple cores by the server operating system.

Execution of parallel tasks in Node.js is handled by a thread pool. The main thread call functions post tasks to the shared task queue that threads in the thread pool pull and execute. Inherently non-blocking system functions like networking translates to kernel-side non-blocking sockets, while inherently blocking system functions like file I/O run in a blocking way on its own thread. When a thread in the thread pool completes a task, it informs the main thread of this that in turn wakes up and execute the registered callback. Since callbacks are handled in serial on the main thread, long lasting computations and other CPU-bound tasks will freeze the entire event-loop until completion.

### V8

V8 is the JavaScript execution engine built for Google Chrome and open-sourced by Google in 2008. Written in C++, V8 compiles JavaScript source code to native machine code instead of interpreting it in real time.

Node.js uses libuv to handle asynchronous events. Libuv is an abstraction layer for network and file system functionality on both Windows and POSIX-based systems like Linux, Mac OS X, OSS on NonStop and Unix.

The core functionality of Node.js resides in a JavaScript library. The Node.js bindings, written in C++, connect these technologies to each other and to the operating system.
Package management

npm is the pre-installed package manager for the Node.js server platform. It is used to install Node.js programs from the npm registry, organizing the installation and management of third-party Node.js programs. npm is not to be confused with the CommonJS require() statement. It is not used to load code; instead, it is used to install code and manage code dependencies from the command line. The packages found in the npm registry can range from simple helper libraries like Underscore.js to task runners like Grunt.

### Unified API

Node.js can be combined with a browser, a document database (such as MongoDB or CouchDB) and JSON for a unified JavaScript development stack. With the adaptation of what were essentially server-side development patterns like MVC, MVP, MVVM, etc., Node.js allows the reuse of the same model and service interface between client-side and server-side.

### Event loop

Node.js registers itself with the operating system so that it is notified when a connection is made, and the operating system will issue a callback. Within the Node.js runtime, each connection is a small heap allocation. Traditionally, relatively heavyweight OS processes or threads handled each connection. Node.js uses an event loop for scalability, instead of processes or threads. In contrast to other event-driven servers, Node.js's event loop does not need to be called explicitly. Instead callbacks are defined, and the server automatically enters the event loop at the end of the callback definition. Node.js exits the event loop when there are no further callbacks to be performed.

## Alternatives

### JXcore

JXcore is a fork of Node.js targeting mobile devices and IoTs. Its first beta was released in January 2014. It was open sourced on February 13, 2015 and made available through a GitHub repository. JXcore can use either of the Google V8 or Mozilla SpiderMonkey JavaScript engines. As a result, JXcore can run Node applications on iOS devices using SpiderMonkey. As of March 25, 2016, active development on JXcore has been halted.

### Other languages

Similar open source event-driven server frameworks for other platforms include:

- EventMachine for Ruby
- libevent for C
- Perl Object Environment for Perl
- Twisted for Python
- Vert.x for Java, JavaScript, Groovy, Ruby, Python, Scala, Clojure and Ceylon

Node.js may utilize code written in other programming languages using:

- Edge.js allows Microsoft .NET applications to run Node.js scripts in-process, and allows Node.js servers to utilize .NET compiled code via async callbacks.
- Luvit implements the Node.js APIs for the language Lua
- Node-julia allows using Julia with Node.js/io.js
- The COBOL bridge for Node.js allows using COBOL with Node.js


<!--metadata
	name-meta: meta in other place
-->