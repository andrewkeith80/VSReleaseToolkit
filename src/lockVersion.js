const xmldoc = require('xmldoc');


exports.lockVSProjVersion = function(projFileContents) {
    const document = new xmldoc.XmlDocument(projFileContents);

    return projFileContents;
}