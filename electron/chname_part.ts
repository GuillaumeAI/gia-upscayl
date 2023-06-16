
//@STCIssue Upscayl Command
//@a Insert at Line 505 of index.ts

//upscayl_4x or upscayl_16x
var fout = outFile.replace("_upscayl_4x_", "__x4");
fout = fout.replace("_upscayl_16x_", "__x16");
fout = fout.replace("RealESRGAN_General_x4_v3", "g");
fout = fout.replace("realesrgan-x4plus-anime", "a");
fout = fout.replace("realesrgan-x4plus", "r");
fout = fout.replace("remacri", "i");
fout = fout.replace("ultramix_balanced", "b");
fout = fout.replace("ultrasharp", "s");
// command[3] = fout;

logit("      SHOULD fixed fout:\n        " + fout);
outFile = fout;
//@STCGoal Should we have a short name now :)
