/*jslint node:true */
"use strict";

function HtmlCommentClean(content) {

    var startComment = '<!--dev-->'
    var endComment = '<!--/dev-->'

    var regexPattern = new RegExp(startComment + "[\\s\\S]*?" + endComment, "g");

    content = content.replace(regexPattern, '');

    if (this.cacheable) {
        this.cacheable(true);
    }

    return content;
}

module.exports = HtmlCommentClean;
