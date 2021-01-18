var exec = require("child_process").exec;

function start(){
    console.log("le gestionnaire 'start' est appelé");
    var content
    return "Bonjour Start";
}

function upload(){
    console.log("Le gestionnaire 'upload' est appelé");
    return "Bonjour Upload";
}

exports.start=start;
exports.upload = upload;