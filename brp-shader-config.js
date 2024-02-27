///////////////////////////////
// These are the exposed properties
// in Unity for Materials using
// this shader.
// These also automatically get
// wired up to the HLSL sub-programs
//
// Valid types are:
//      paramTypes.Color
//      paramTypes.Float
//      paramTypes.Texture2D
//      paramTypes.Vector4
///////////////////////////////
const shaderParams = {
    ExampleColor: paramTypes.Color,
    ExampleFloat: paramTypes.Float,
    ExampleQuaternion: paramTypes.Vector4,
    ExampleSecondTexture: paramTypes.Texture2D
};

///////////////////////////////
// Words that get substituted
// into the shader template
///////////////////////////////
const content = {
    SHADER_NAME: "GeneratedExample",

    FALLBACK_SHADER: "Diffuse",
};

///////////////////////////////
// Sections of the Shader Template
// which are included or hidden
///////////////////////////////
const enabled = {

    PARAMS_MAINTEX: true,

    PASSES_SURF: true,
    PASSES_VERTFRAG: false,

    TAGS_OPAQUE: true,
    TAGS_TRANSPARENT: false,

    INCLUDE_UNITYCGINC: true

};
