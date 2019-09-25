
var config = {};
// NOTE: ApplicationActor is in '/' format, it is loaded by createActor from this path (not "./")
config.ApplicationActor = "/src/App";
// NOTE: ActorConfig is loaded with reqire directly, ./ notation is used
config.ApplicationActorConfig = "./src/App.json";
config.ApplicationActorLoggerConfig = "./src/App.logger";
// NOTE: Back to actor path notation here for comedy
config.ActorRootPath = "/src/actors";
// NOTE: Comedy paths will use '/' notation, while other paths will use './'
// NOTE: UpdateInterval will determine how of often app update will be polled in index.js
config.ApplicationActorUpdateInterval = 1000
module.exports = config;
