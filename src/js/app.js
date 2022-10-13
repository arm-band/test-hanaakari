import { createMarkdown } from 'safe-marked';
const markdown = createMarkdown();

const isStrDir = (str) => {
    return typeof str === 'string' && str.slice(-1) === '/';
};
const isDomDir = (dom) => {
    return dom.hasChildNodes();
};

const underOnlyOneHierarchyText = (elm) => {
    let result = '';
    for(const el of elm.childNodes) {
        if(el.nodeName === "#text") {
            result += el.nodeValue;
        }
    }
    return result;
}

const dirWalker = (elm, /*file,*/ row) => {
    row = row || '';
    console.log(elm)
    Array.prototype.forEach.call(elm, (el) => {
//        if(isDomDir(el) && isStrDir(el.value())) {
//
//        }
        console.log('hogeeeeeeeeeeeee')
        // textContent だと子孫要素含めて全てのテキストを取得してしまうので、直下のみが欲しい
        console.log(underOnlyOneHierarchyText(el));
    })
//    _.each(dirs, function(dir, dirName) {
//        _.each(dir, function(child){
//            if(isFile(child)) {
//                if(child === file) {
//                    console.log(row + dirName + '/' + child);
//                }
//            } else {
//                lookDir(child, file, row += dirName + '/');
//            }
//        });
//    });
};

window.addEventListener('load', () => {
    // ├ └ │
    const sampleDir = `
- /
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
    `
    const html = markdown(sampleDir);
    console.log(html);
    const $tree = document.querySelector('#tree');
    $tree.innerHTML = html;
    const $treeNode = document.querySelectorAll("#tree > ul");
    console.log($treeNode)
    dirWalker($treeNode, '');
});
