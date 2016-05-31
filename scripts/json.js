module.exports = function() {
    var source_host = env.source_host, host = env.host;
    return body.replace(source_host, host);
};