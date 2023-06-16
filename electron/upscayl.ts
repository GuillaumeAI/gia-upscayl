import { spawn } from "child_process";
import { execPath } from "./binaries";

export const spawnUpscayl = (
  binaryName: string,
  command: string[],
  logit: (...args: any) => void
) => {
  
// //@STCIssue Upscayl Command
//   var mname = command[9];
//   var fout = command[3];
//   //upscayl_4x or upscayl_16x
//   fout = fout.replace("_upscayl_4x_","__x4");
//   fout = fout.replace("_upscayl_16x_","__x16");
//   fout = fout.replace("RealESRGAN_General_x4_v3","g");
//   fout = fout.replace("realesrgan-x4plus-anime","a");
//   fout = fout.replace("realesrgan-x4plus","r");
//   fout = fout.replace("remacri","i");
//   fout = fout.replace("ultramix_balanced","b");
//   fout = fout.replace("ultrasharp","s");
//   command[3] = fout;

//   logit("      SHOULD fixed fout:\n        "+fout );
  logit("📢 Upscayl Command: ", command);
  logit("===================================");
  logit("===================================");
  logit("===================================");
  const spawnedProcess = spawn(execPath(binaryName), command, {
    cwd: undefined,
    detached: false,
  });

  return {
    process: spawnedProcess,
    kill: () => spawnedProcess.kill(),
  };
};
