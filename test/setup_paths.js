var module = require("module");
var oldResolve = module._resolveFilename;
var extraPaths = [
    __dirname + "/../node_modules/ace/lib",
    __dirname + "/../node_modules/treehugger/lib",
    __dirname + "/../plugins-client",
];
module._resolveFilename = function(request, paths) {
    // Ensure client extensions can be loaded
    request = request.replace(/^ext\//, "ext.");
    // Add the extra paths
    extraPaths.forEach(function(p) {
        if(paths.paths.indexOf(p) === -1)
            paths.paths.push(p);
    });
    return oldResolve(request, paths);
}
