module.exports = function(RED) {
    function name(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: "Face Recognition"};
    
        node.send(outMsg);
        
        });
    }

    RED.nodes.registerType("Face Recognition",name);
};
