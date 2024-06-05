# previewed.js+markdown-it+katex+hebrew

A variant of the template with support for code snippets that you can use in cs class. Here's the slightly modified steps to clone this branch:

-   **step 1:** Clone this repo and install all the stuff:
    ```bash
    git clone --branch cs https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git
    cd previewed.js-markdown-it-katex-hebrew-template
    pnpm install
    ```
    Or if you're a looser that uses npm:
    ```bash
    git clone --branch cs https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git
    cd previewed.js-markdown-it-katex-hebrew-template
    npm install
    ```
    Or if you already have a folder open (this one is mainly for me so I don't have to tweak the commands every time I copy and paste them):
    ```bash
    git clone --branch cs https://github.com/danielFHcode/previewed.js-markdown-it-katex-hebrew-template.git .
    pnpm install
    ```
-   **step 2:** Start the dev server:
    ```bash
    node preview
    ```
    and open it in your browser.
-   **step 3:** Write and edit your markdown in the `src` directory and watch the browser reload.
-   **bonus step:** Once you're done you can print to pdf in you're browser to get a final pdf.
