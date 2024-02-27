///////////////////////////////
// These set up our ShaderLab
// & HLSL available types
// according to Unity docs
///////////////////////////////

const paramTypes = {
    Color: "Color",
    Float: "Float",
    Texture2D: "2D",
    Vector4: "Vector",
};

const paramDefaults = {};
paramDefaults[paramTypes.Color] = "(1,1,1,1)";
paramDefaults[paramTypes.Float] = "0.5";
paramDefaults[paramTypes.Texture2D] = '"white" {}';
paramDefaults[paramTypes.Vector4] = "(0, 0, 0, 0)";

const cgprogramTypes = {};
cgprogramTypes[paramTypes.Color] = "fixed4";
cgprogramTypes[paramTypes.Float] = "float";
cgprogramTypes[paramTypes.Texture2D] = "sampler2D";
cgprogramTypes[paramTypes.Vector4] = "float4";
