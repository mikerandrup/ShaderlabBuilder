window.onload = function () {

    ///////////////////////////////
    // Configuration Section
    ///////////////////////////////

    const content = {
        SHADER_NAME: "Phong",

        FALLBACK_SHADER: "Diffuse",
    };

    const enabled = {

        PARAMS_MAINTEX: true,

        PASSES_SURF: true,
        PASSES_VERTFRAG: false,

        TAGS_OPAQUE: true,
        TAGS_TRANSPARENT: false,

        INCLUDE_UNITYCGINC: true

    };

    ///////////////////////////////
    // Do not normally edit this
    ///////////////////////////////

    const paramTypes = {
        Color: "Color",
        Float: "Float",
        Texture2D: "2D",
        Vector4: "Vector",
    };
    const paramDefaults = defineParamDefaults();
    const cgprogramTypes = defineCGProgramTypes();

    ///////////////////////////////
    // Define Shader Properties Here
    ///////////////////////////////
    const shaderParams = {
        MainTint: paramTypes.Color,
        SpecularColor: paramTypes.Color,
        SpecularPower: paramTypes.Float
    };

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

    function defineParamDefaults() {
        const defaults = {};
        defaults[paramTypes.Color] = "(1,1,1,1)";
        defaults[paramTypes.Float] = "0.5";
        defaults[paramTypes.Texture2D] = '"white" {}';
        defaults[paramTypes.Vector4] = "(0, 0, 0, 0)";
        return defaults;
    }

    function defineCGProgramTypes() {
        const cgTypes = {};
        cgTypes[paramTypes.Color] = "fixed4";
        cgTypes[paramTypes.Float] = "float";
        cgTypes[paramTypes.Texture2D] = "sampler2D";
        cgTypes[paramTypes.Vector4] = "float4";
        return cgTypes;
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
