import { createMarkdown } from 'safe-marked';
const markdown = createMarkdown();

window.addEventListener('load', () => {
    const html = markdown(`
- root/
    - dist/
        - assets/
            - hoge.pdf
            - fuga.docx
        - css/
            - index.css
        - img/
            - piyo.jpg
            - hogera.png
        - js/
            - app.min.js
        - .htaccess
        - favicon.ico
        - favicon.png
        - index.html
        - about.html
    - misc/
        - docs.md
    - src/
        - assets/
            - hoge.pdf
            - fuga.docx
        - ejs/
            - parts/
                - _footer.ejs
                - _head.ejs
                - _header.ejs
            - index.ejs
            - about.ejs
        - img/
            - piyo.jpg
            - hogera.png
        - js/
            - app.js
        - scss/
            - foundation/
                - _import.scss
                - _index.scss
                - _var.scss
            - layout/
                - _l-footer.scss
                - _l-header.scss
                - _l-main.scss
            - object/
                - component/
                    - _c-section.scss
                    - _c-button.scss
                - project/
                    - _p-index.scss
                    - _p-about.scss
                - utility/
    - package.json
    - readme.md
    - webpack.config.js
    `);
    console.log(html);
    const $tree = document.querySelector('#tree');
    $tree.innerHTML = html;
});
