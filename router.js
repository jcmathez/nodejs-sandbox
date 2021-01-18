
function route(handle,pathname){
    console.log("début du traitement de l'URL "+pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log("aucun gestionnaire associé à " + pathname);
        return "404 Non trouvé";
    }
}

exports.route=route;