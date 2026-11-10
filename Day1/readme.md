* Note Url -> https://classroom.sheryians.com/platform/note?batchId=691dd880a4074343af9c23b5&submoduleId=696bd48fc379b8989d8062b0&contentId=6974d1af9e1d09d850be530a

# Node.js & Backend Basics

## 1. How to Run JavaScript Outside the Browser

Till now, you may have run JavaScript inside a web browser. But JavaScript is not limited to browsers.

**Node.js** allows us to run JavaScript directly on our computer without needing a browser, HTML, or React.

### What Can We Do with Node.js?

- Create web servers.
- Connect to databases.
- Run JavaScript scripts.
- Handle backend logic.
- Read and write files.
- Build APIs for web applications.

### Technical Definition

Node.js is an open-source JavaScript runtime environment that uses the **V8 JavaScript engine** to execute JavaScript outside a web browser.

**Remember:** V8 is the JavaScript engine used by Google Chrome and Node.js.

### Steps to Run a JavaScript File

**Step 1: Install Node.js**

Download Node.js from the official website:

https://nodejs.org/

After installation, open your terminal and check the version:

```bash
node -v
```

Check the npm version:

```bash
npm -v
```

**Step 2: Create a JavaScript File**

Create a file named `app.js`.

**Step 3: Write JavaScript Code**

Add the following code to `app.js`:

```javascript
console.log("Hello from Node.js!");
```

**Step 4: Open the Terminal**

Open the terminal in the folder containing your `app.js` file.

**Step 5: Run the JavaScript File**

Execute this command:

```bash
node app.js
```

**Step 6: Check the Output**

Output:

```text
Hello from Node.js!
```

The output appears in the terminal, not in the browser.

### Example 1: Print Your Name and Age

```javascript
const name = "Priyabrata";
const age = 20;

console.log("Name:", name);
console.log("Age:", age);
```

Output:

```text
Name: Priyabrata
Age: 20
```

*Note: Change the name and age to your own details.*

### Example 2: Add Two Numbers

```javascript
const a = 10;
const b = 20;

const sum = a + b;

console.log("Sum:", sum);
```

Output:

```text
Sum: 30
```

### Common Mistakes

1. **Node.js is not installed:** Install Node.js from the official website.
2. **Wrong folder:** Open the terminal in the folder containing your JavaScript file.
3. **Incorrect file name:** Check the file name and extension, such as `app.js`.
4. **Incorrect command:** Use `node app.js`, not `noce app.25`.
5. **Using browser APIs:** Objects such as `window` and `document` are generally available in browsers, not in the standard Node.js environment.

### Interview Questions

**Q1. What is Node.js?**

Node.js is an open-source JavaScript runtime environment that uses the V8 engine to run JavaScript outside a browser.

**Q2. Can JavaScript run without a browser?**

Yes, JavaScript can run outside a browser using a runtime environment such as Node.js.

**Q3. Why do we need Node.js?**

Node.js allows developers to use JavaScript for backend development, creating servers, building APIs, working with files, and running scripts.

**Q4. What is the difference between browser JavaScript and Node.js?**

| Browser JavaScript | Node.js |
|---|---|
| Runs inside a web browser. | Runs in the Node.js runtime. |
| Can interact with the webpage using the DOM. | Provides APIs for server-side and system tasks. |
| Commonly handles user interactions. | Commonly handles backend logic. |
| Uses browser APIs. | Provides Node.js APIs for files, servers, and other tasks. |

---

## 2. What Are Packages?

A **package** is reusable code written by another developer that we can install and use in our own projects.

Instead of writing everything from scratch, we can use existing packages to save time and effort.

### Examples of Packages

Packages can help us with:

- Password hashing and encryption.
- Sending emails.
- Handling file uploads.
- Creating web servers.
- Validating data.
- Connecting to databases.

### Where Are JavaScript Packages Published?

Many JavaScript packages are published on **npm**, the JavaScript package registry.

Website: https://www.npmjs.com/

Think of npm as a store or library of reusable JavaScript code where developers can publish packages for others to use.

### What Is npm?

**npm stands for Node Package Manager.**

It is a tool used to install and manage JavaScript packages in a project. npm is normally installed along with Node.js.

Check the npm version:

```bash
npm -v
```

### How to Install a Package

For example, Express is a popular package used to create web servers and APIs with Node.js.

**Step 1: Create a Project**

Open your terminal in your project folder and run:

```bash
npm init -y
```

This creates a `package.json` file with default settings.

**Step 2: Install Express**

```bash
npm install express
```

This installs Express and adds it to your project's dependencies.

### What Is package.json?

`package.json` is a configuration file that stores information about a Node.js project.

It can contain:

- Project name and version.
- Installed dependencies.
- Scripts used to run the project.
- Other project configuration details.

Example:

```json
{
  "name": "my-backend",
  "version": "1.0.0",
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

*Note: The exact Express version in your file may be different.*

### Interview Questions

**Q1. What is a package?**

A package is reusable code that we can install and use in our project.

**Q2. What is npm?**

npm is a tool for installing and managing JavaScript packages. It also refers to the public npm package registry.

**Q3. Why do developers use packages?**

Developers use packages to save time, avoid rewriting common functionality, and build applications more efficiently.

**Q4. What is package.json?**

`package.json` is a configuration file that stores project information, scripts, and dependencies.

**Q5. What is Express.js?**

Express.js is a web framework for Node.js that makes it easier to create web servers and APIs.

---

## 3. Quick Revision

- **Node.js:** Runs JavaScript outside the browser.
- **V8 Engine:** Executes JavaScript code.
- **npm:** Installs and manages packages.
- **Package:** Reusable code that can be installed in a project.
- **Express.js:** A web framework used with Node.js.
- **package.json:** Stores project information, scripts, and dependencies.
- **`node app.js`:** Runs a JavaScript file using Node.js.
- **`npm install express`:** Installs the Express package.

## 4. Practice Tasks

1. Install Node.js and check its version.
2. Create an `app.js` file and print your name and age.
3. Write a program to add, subtract, multiply, and divide two numbers.
4. Create a Node.js project using `npm init -y`.
5. Install Express using `npm install express`.
6. Open `package.json` and identify its dependencies and scripts.
7. Explain the difference between Node.js and browser JavaScript in your own words.

**Goal:** Understand how JavaScript runs outside the browser and how npm packages help us build backend applications.
