(function() {
    'use strict';


    const Extension = class APIExtension {

        constructor() {
            this.tags = ['api'];
        }


        parse(parser, nodes, lexer) {
            const tagName = parser.nextToken();
            const variableName = parser.parsePrimary(true);

            parser.peekToken();
            parser.skipValue(lexer.TOKEN_OPERATOR, '=');

            const fnc = parser.parsePrimary();

            fnc.args.addChild(new nodes.Literal(variableName.lineno, variableName.colno, variableName.value));
            fnc.args.addChild(new nodes.Literal(fnc.name.lineno, fnc.name.colno, fnc.name.value));

            parser.advanceAfterBlockEnd(tagName.value);
            parser.dropLeadingWhitespace = true;

            return new nodes.CallExtensionAsync(this, 'dispatch', fnc.args);
        }



        dispatch(context, arg, property, fnc, callback) {

            // the extension works if the callback is called immediately
            // return callback(null, []);

            process.nextTick(() => {
                callback(null, []);
            });
        }
    }



    module.exports = new Extension();
})();
