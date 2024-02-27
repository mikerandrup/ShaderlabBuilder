window.onload = function () {

    ///////////////////////////////
    // Shader-specific Utilities
    ///////////////////////////////

    const shaderlabParamsSelector = ".LINKED_PARAMS_SHADERLAB";
    const cgprogramParamsSelector = ".LINKED_PARAMS_CGPROGRAM";

    function generateLinkedParams() {
        var shaderlabString = "";
        var cgprogramString = "";

        var paramName;
        var shaderlabType;

        for (paramName in shaderParams) {
            shaderlabType = shaderParams[paramName];

            // e.g. _MainTex ("MainTex", 2D) = "white" {}
            shaderlabString += indentor(3)
                + `_${paramName} ("${paramName}", ${shaderParams[paramName]}) = `
                + paramDefaults[shaderlabType]
                + '\n';

            // e.g. sampler2D _MainTex;
            cgprogramString += indentor(3)
                + `${cgprogramTypes[shaderlabType]} _${paramName};\n`;
        }

        document.querySelectorAll(shaderlabParamsSelector).forEach(
            function (el) {
                el.innerHTML = shaderlabString;
            }
        );

        document.querySelectorAll(cgprogramParamsSelector).forEach(
            function (el) {
                el.innerHTML = cgprogramString;
            }
        );
    }

    function indentor(levels) {
        const singleIndent = "   ";
        var resultString = "";

        for (var i = 0; i < levels; i++) {
            resultString += singleIndent;
        }
        return resultString;
    }


    ///////////////////////////////
    // Generic Template Rendering
    ///////////////////////////////

    function renderContent() {
        for (var key in content) {
            document.querySelectorAll('.' + key).forEach(
                function (el) {
                    el.innerHTML = content[key];
                }
            );
        }
    }

    function setEnabledElements() {
        for (var key in enabled) {
            document.querySelectorAll('.' + key).forEach(
                function (el) {
                    if (!enabled[key]) {
                        el.parentNode.removeChild(el);
                    }
                }
            );
        }
    }

    function setDocTitle() {
        document.title
            = content.SHADER_NAME + "Shader.shader";
    }

    // shader stuff
    generateLinkedParams();

    // swap content
    renderContent();

    // hide disabled stuff
    setEnabledElements();

    // for default printed filename
    setDocTitle();

};
