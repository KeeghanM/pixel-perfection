
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import { createSignal } from "solid-js";

export default function Compare() {
    const [wrongImage, setWrongImage] = createSignal<string | undefined>(undefined);
    const [correctImage, setCorrectImage] = createSignal<string | undefined>(undefined);
    const [opacity, setOpacity] = createSignal(0.5);
    const [matchPercentage, setMatchPercentage] = createSignal(0);
    const [modalShown, setModalShown] = createSignal(false);
    const [loadingPercentage, setLoadingPercentage] = createSignal(0);
    const [sizeString, setSizeString] = createSignal("");

    const calculateWeightedPercentage = (rawPercentage: number): number => {
        if (rawPercentage >= 1) {
            return 100;
        } else if (rawPercentage >= 0.98) {
            return 60 + (rawPercentage - 0.98) * 2000; // linear function from (0.98, 60) to (1, 100)
        } else if (rawPercentage >= 0.8) {
            return 30 + (rawPercentage - 0.8) * 150; // linear function from (0.8, 30) to (0.98, 60)
        } else {
            return rawPercentage * 37.5; // linear function from (0, 0) to (0.8, 30)
        }
    }

    const calculateColor = (weightedPercentage: number): string => {
        let r, g;
        if (weightedPercentage >= 80) {
            // When weightedPercentage >= 80, color goes from (50, 255) to (0, 255)
            r = 50 - (weightedPercentage - 80) * 2.5;
            g = 255;
        } else if (weightedPercentage >= 60) {
            // When 60 <= weightedPercentage < 80, color goes from (180, 205) to (50, 255)
            r = 180 - (weightedPercentage - 60) * 6.5;
            g = 205 + (weightedPercentage - 60) * 2.5;
        } else {
            // When weightedPercentage < 60, color goes from (255, 0) to (180, 205)
            r = 255;
            g = weightedPercentage * 3.42;
        }
        return `rgb(${Math.round(r)}, ${Math.round(g)}, 0)`;
    }

    const imageToPixelData = (dataURL: string): Promise<{data:Uint8ClampedArray,size:{width:number,height:number}} | undefined> => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = dataURL;
        image.onload = () => {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(image, 0, 0);
                resolve({
                    data:ctx.getImageData(0, 0, canvas.width, canvas.height).data,
                    size: {
                        width: canvas.width,
                        height: canvas.height
                    }}
                    );
            } else {
                reject(new Error("Unable to get 2D context from canvas"));
            }
        };
        image.onerror = err => reject(err);
    });
};
    
    const runTest = async () => {
        setModalShown(true);
        setLoadingPercentage(0);
        setWrongImage(undefined);
        setCorrectImage(undefined);
        setMatchPercentage(0);
        setOpacity(0.5);

        const wrongIframe = document.getElementById("wrongIframe") as HTMLIFrameElement;
        const wrongScreen = wrongIframe?.contentDocument?.body as HTMLBodyElement;
        const correctIframe = document.getElementById("correctIframe") as HTMLIFrameElement;
        const correctScreen = correctIframe?.contentDocument?.body as HTMLBodyElement;

        const wrongUrl = await htmlToImage.toPng(wrongScreen)
        const wrongData = await imageToPixelData(wrongUrl);
        const wrongPixelData = wrongData?.data;
        setSizeString(`width: ${wrongData?.size.width}px; height: ${wrongData?.size.height}px;`)

        const correctUrl = await htmlToImage.toPng(correctScreen)
        const correctData = await imageToPixelData(correctUrl);
        const correctPixelData = correctData?.data;

        setWrongImage(wrongUrl);
        setCorrectImage(correctUrl);

        if (wrongPixelData && correctPixelData) {
            let match = 0;
            for (let i = 0; i < wrongPixelData.length; i += 4) {
                let rDiff = Math.abs(wrongPixelData[i] - correctPixelData[i]);
                let gDiff = Math.abs(wrongPixelData[i + 1] - correctPixelData[i + 1]);
                let bDiff = Math.abs(wrongPixelData[i + 2] - correctPixelData[i + 2]);

                if ((rDiff + gDiff + bDiff) / 3 == 0) {
                    match++;
                }
            }
            let rawPercentage = match / (wrongPixelData.length / 4);
            let weightedPercentage = calculateWeightedPercentage(rawPercentage);
            setMatchPercentage(weightedPercentage)
            var id = setInterval(() => {
                if (loadingPercentage() >= 100) {
                    clearInterval(id);
                }
                setLoadingPercentage((old) => old + 1);
            }, 10);
        }


    }

    return (
        <>
            <div
                onclick={() => { setModalShown(false) }}
                class={"fixed inset-0 bg-[rgba(0,0,0,0.8)]"
                    + (modalShown() ? " z-10" : " hidden")}></div>
            <div class={"fixed z-20 top-24 mx-auto left-0 right-0 min-w-[300px] max-w-fit p-6 border rounded-lg shadow border-gray-400 bg-white dark:border-gray-700 dark:bg-gray-800"
                + (modalShown() ? "" : " hidden")}>
                {loadingPercentage() < 100 ? (
                    <>
                        <div class="relative w-full h-10">
                            <div class="h-10 bg-blue-500 rounded-full" style={`width: ${loadingPercentage()}%;`}></div>
                            <span class="absolute w-fit mx-auto right-0 left-0 top-2">Calculating...</span>
                        </div>
                    </>
                ) : (
                    <div class="mt-4 mx-auto w-fit flex flex-col justify-center">
                        <h3 class="text-3xl font-bold mb-6 w-full text-center">Match Percentage:{" "}
                        <span
                        style={
                        `color: ${calculateColor(matchPercentage())}`
                        }
                        >{Math.round(matchPercentage() * 100) / 100}%</span></h3>
                        <div class="flex gap-2 items-center w-full justify-between mb-2">
                            <p>Correct</p>
                            <input type="range" min="0" max="1" step="0.01" value={opacity()} oninput={e => setOpacity(parseFloat(e.target.value))} />
                            <p>Wrong</p>
                        </div>
                        <div class="relative" style={sizeString()}>
                            <div class="absolute inset-0 w-fit mx-auto left-0 right-0" >
                                <img src={correctImage()} alt="Correct Image" />
                            </div>
                            <div class="absolute inset-0 w-fit mx-auto left-0 right-0" style={`opacity: ${opacity()};`}>
                                <img src={wrongImage()} alt="Wrong Image"  />
                            </div>
                        </div>
                        <button
                        onclick={() => { setModalShown(false) }}
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-2 w-fit"
                        >Close</button>
                    </div>)}
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-2 w-fit mx-auto h-fit"
                onClick={runTest}>Run Comparison</button>
        </>
    )
}