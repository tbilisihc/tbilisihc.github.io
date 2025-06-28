# Tbilisi Hack Club Website

<p align="center">
  <a href="https://github.com/tbilisihc/tbilisihc.github.io/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/tbilisihc/tbilisihc.github.io" alt="License">
  </a>
  <a href="https://github.com/tbilisihc/tbilisihc.github.io/commits/main">
    <img src="https://img.shields.io/github/last-commit/tbilisihc/tbilisihc.github.io" alt="Last Commit">
  </a>
  <a href="https://github.com/tbilisihc/tbilisihc.github.io">
    <img src="https://img.shields.io/github/repo-size/tbilisihc/tbilisihc.github.io" alt="Repo Size">
  </a>
  <a href="https://prettier.io">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Code Style: Prettier">
  </a>
</p>

Welcome to the official repository for the tbilisihc.github.io website, built with SvelteKit. This README provides all the necessary information to get you started with development, deployment, and contribution.

## ✨ Features

* **Fast & Modern:** Built with [SvelteKit](https://kit.svelte.dev/), a framework known for producing highly optimized and fast web applications.
* **Component-Based:** A modular architecture using Svelte components for easy maintenance and scalability.
* **Static Site Generation:** Optimized for performance and SEO by generating static HTML files.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development.

### Prerequisites

Make sure you have the following software installed on your machine:

* [Node.js](https://nodejs.org/) (v18.x or newer is recommended)
* [npm](https://www.npmjs.com/) (which is included with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tbilisihc/tbilisihc.github.io.git](https://github.com/tbilisihc/tbilisihc.github.io.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd tbilisihc.github.io
    ```

3.  **Install the project dependencies:**
    ```bash
    npm install
    ```

## 🛠️ Development

To start the local development server, run the following command. This will launch the site with hot-reloading enabled.

```bash
npm run dev
```

Your local development server will be accessible at `http://localhost:5173`. Any changes you make to the source code will be reflected in the browser automatically.

## 📜 Available Scripts

This project includes the following scripts, which can be run with `npm run <script-name>`:

* `dev`: Starts the development server.
* `build`: Compiles the application for production.
* `preview`: Starts a local server to preview the production build.

## 📦 Building for Production

When you're ready to deploy, you need to create an optimized, static version of your site.

```bash
npm run build
```

This command bundles the application and outputs the static files to the `build/` directory.

## 🌐 Deployment

This SvelteKit project is configured to be deployed as a static site. The contents of the `build/` directory are all you need to host. Here are a few popular and easy-to-use hosting platforms:

* [**Vercel**](https://vercel.com): Offers seamless integration with GitHub repositories for automatic builds and deployments.
* [**Netlify**](https://www.netlify.com): Another excellent choice for static site hosting with continuous deployment.
* [**GitHub Pages**](https://pages.github.com/): Host your site directly from your GitHub repository for free.

## 📁 Project Structure

Here is a brief overview of the key files and directories in this project:

```
/
├── src/
│   ├── routes/           # File-based routing for your pages
│   └── app.html          # DO NOT EDIT. Svelte integration
├── svelte.config.js      # DO NOT EDIT. SvelteKit configuration, change if required
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🤝 Contributing

We welcome contributions! If you have suggestions or find a bug, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

You can also open an issue with the "bug" or "enhancement" tag.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.
