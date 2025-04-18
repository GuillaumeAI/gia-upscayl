import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import ReactTooltip from "react-tooltip";
import { themeChange } from "theme-change";
import { modelsListAtom } from "../atoms/modelsListAtom";
import useLog from "./hooks/useLog";

interface IProps {
  progress: string;
  selectImageHandler: () => Promise<void>;
  selectFolderHandler: () => Promise<void>;
  handleModelChange: (e: any) => void;
  outputHandler: () => Promise<void>;
  upscaylHandler: () => Promise<void>;
  imagePath: string;
  outputPath: string;
  doubleUpscayl: boolean;
  setDoubleUpscayl: React.Dispatch<React.SetStateAction<boolean>>;
  dimensions: {
    width: number | null;
    height: number | null;
  };
  setSaveImageAs: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
  setGpuId: React.Dispatch<React.SetStateAction<string>>;
}

function LeftPaneIGIASteps({
  progress,
  selectImageHandler,
  selectFolderHandler,
  handleModelChange,
  outputHandler,
  upscaylHandler,
  imagePath,
  outputPath,
  doubleUpscayl,
  setDoubleUpscayl,
  dimensions,
  setSaveImageAs,
  setModel,
  setGpuId,
}: IProps) {
  const [currentModel, setCurrentModel] = useState<{
    label: string;
    value: string;
  }>({
    label: null,
    value: null,
  });

  const modelOptions = useAtomValue(modelsListAtom);

  const { logit } = useLog();

  useEffect(() => {
    themeChange(false);

    if (!localStorage.getItem("saveImageAs")) {
      logit("⚙️ Setting saveImageAs to png");
      localStorage.setItem("saveImageAs", "png");
    } else {
      const currentlySavedImageFormat = localStorage.getItem("saveImageAs");
      logit(
        "⚙️ Getting saveImageAs from localStorage",
        currentlySavedImageFormat
      );
      setSaveImageAs(currentlySavedImageFormat);
    }

    if (!localStorage.getItem("model")) {
      setCurrentModel(modelOptions[0]);
      setModel(modelOptions[0].value);
      localStorage.setItem("model", JSON.stringify(modelOptions[0]));
      logit("🔀 Setting model to", modelOptions[0].value);
    } else {
      const currentlySavedModel = JSON.parse(
        localStorage.getItem("model")
      ) as (typeof modelOptions)[0];
      setCurrentModel(currentlySavedModel);
      setModel(currentlySavedModel.value);
      logit(
        "⚙️ Getting model from localStorage",
        JSON.stringify(currentlySavedModel)
      );
    }

    if (!localStorage.getItem("gpuId")) {
      localStorage.setItem("gpuId", "");
      logit("⚙️ Setting gpuId to empty string");
    } else {
      const currentlySavedGpuId = localStorage.getItem("gpuId");
      setGpuId(currentlySavedGpuId);
      logit("⚙️ Getting gpuId from localStorage", currentlySavedGpuId);
    }
  }, []);

  useEffect(() => {
    logit("🔀 Setting model to", currentModel.value);
  }, [currentModel]);

  return (
    <div className="animate-step-in animate flex h-screen flex-col gap-7 overflow-y-auto p-5 overflow-x-hidden">
      {/* BATCH OPTION */}
      {/* <div className="flex flex-row items-center gap-2">
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={batchMode}
          onClick={() => setBatchMode((oldValue) => !oldValue)}></input>
        <p
          className="mr-1 inline-block  cursor-help text-sm"
          data-tip="This will let you upscale all files in a folder at once">
          Batch Upscale
        </p>
      </div> */}

      {/* STEP 1 */}
      <div data-tip={imagePath}>
        {/* <p className="step-heading">Step 1</p> */}
        <button
          className="btn-primary btn"
          onClick={ selectImageHandler }>
          Select Input { "Image"}
        </button>
      </div>

      {/* STEP 2 */}
      <div className="animate-step-in">
        {/* <p className="step-heading">Step 2</p>
        <p className="mb-2 text-sm">Select Upscaling Type</p> */}

        <Select
          options={modelOptions}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          onChange={(e) => {
            handleModelChange(e);
            setCurrentModel({ label: e.label, value: e.value });
          }}
          className="react-select-container"
          classNamePrefix="react-select"
          value={currentModel}
        />

        {true && (
          <div className="mt-4 flex items-center gap-1">
            <input
              type="checkbox"
              className="checkbox"
              checked={doubleUpscayl}
              onChange={(e) => {
                if (e.target.checked) {
                  setDoubleUpscayl(true);
                } else {
                  setDoubleUpscayl(false);
                }
              }}
            />
            <p
              className="cursor-pointer text-sm"
              onClick={(e) => {
                setDoubleUpscayl(!doubleUpscayl);
              }}>
              x16
            </p>
            {/* <button
              className="badge-info badge cursor-help"
              data-tip="Enable this option to get a 16x upscayl (we just run upscayl twice). Note that this may not always work properly with all images, for example, images with really large resolutions.">
              i
            </button> */}
          </div>
        )}
      </div>

      {/* STEP 3 */}
      <div className="animate-step-in" data-tip={outputPath}>
        {/* <p className="step-heading">Step 3</p>
        <p className="mb-2 text-sm">
          Defaults to {true ? "Image's" : "Folder's"} path
        </p> */}
        <button className="btn-primary btn" onClick={outputHandler}>
          Set Output Folder 
        </button><br />
        <p className="def-folder">
        (default current folder)
        </p>
      </div>

      {/* STEP 4 */}
      <div className="animate-step-in">
        {/* <p className="step-heading">Step 4</p> */}
        {dimensions.width && dimensions.height && (
          <p className="mb-2 text-sm">
            Upscale from{" "}
            <span className="font-bold">
              {dimensions.width}x{dimensions.height}
            </span>{" "}
            to{" "}
            <span className="font-bold">
              {doubleUpscayl ? dimensions.width * 16 : dimensions.width * 4}x
              {doubleUpscayl ? dimensions.height * 16 : dimensions.height * 4}
            </span>
          </p>
        )}
        <button
          className="btn-accent btn"
          onClick={upscaylHandler}
          disabled={progress.length > 0}>
          {progress.length > 0 ? "Upscayling⏳" : "Let's Go"}
        </button>
      </div>

      <ReactTooltip class="max-w-sm" />
    </div>
  );
}

export default LeftPaneIGIASteps;
