# 📝 Quora Clone Backend – CRUD REST API
This is a **mini backend project** for a Quora-like post system built with **Node.js** and **Express.js**, demonstrating full **CRUD operations** (Create, Read, Update, Delete) using RESTful API principles.
It uses **EJS** for templating and **method-override** to enable PUT/PATCH and DELETE requests via HTML forms.


## 🚀 Features

* 🔥 **Create Post**
  Add new posts with a username and content using a simple HTML form.
  
* 👀 **Read All Posts**
  View all posts on the main page with usernames and their content.
  
* 📄 **Read Single Post**
  View details of a specific post by clicking on it.
  
* ✏️ **Edit Post**
  Update the content of any post using an edit form (supports `PATCH` requests).
  
* 🗑️ **Delete Post**
  Delete any post permanently (supports `DELETE` requests).


## 🛠 Tech Stack & Tools
* **Node.js** – JavaScript runtime
* **Express.js** – Backend framework
* **EJS** – Templating engine for dynamic HTML
* **uuid** – Unique IDs for posts
* **method-override** – To simulate PATCH/DELETE methods in forms
* **HTML/CSS** – Frontend templates
* **In-memory storage** – (No database, for simplicity)


4️⃣ Open your browser and navigate to:

```
http://localhost:8000/posts
```


## 🌐 RESTful Endpoints

| Method | Route             | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/posts`          | View all posts          |
| GET    | `/posts/:id`      | View a single post      |
| GET    | `/posts/new`      | Form to create new post |
| POST   | `/posts`          | Create a new post       |
| GET    | `/posts/:id/edit` | Form to edit post       |
| PATCH  | `/posts/:id`      | Update an existing post |
| DELETE | `/posts/:id`      | Delete a post           |

