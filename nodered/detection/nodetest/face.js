module.exports = function(RED) {
    function name(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: "Car Detection"};
    
        node.send(outMsg);
        
        });
    }

    RED.nodes.registerType("Car Detection",name);
};
