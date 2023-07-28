
import { createSignal } from "solid-js";
import { challenge } from "./_store";
import html2canvas from "html2canvas";

export default function Main() {
    const [css, setCss] = createSignal(challenge().wrongCSS);
    const [html, setHtml] = createSignal(challenge().HTML);
    const [wrongImage, setWrongImage] = createSignal<string | undefined>(undefined);
    const [correctImage, setCorrectImage] = createSignal<string | undefined>(undefined);
    const [opacity, setOpacity] = createSignal(0.5);
    const [matchPercentage, setMatchPercentage] = createSignal(0);

    const calculateWeightedPercentage = (rawPercentage: number):number => {
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

    const runTest = async () => {
        const wrongIframe = document.getElementById("wrongIframe") as HTMLIFrameElement;
        const wrongScreen = wrongIframe?.contentDocument?.body as HTMLBodyElement;
        const correctIframe = document.getElementById("correctIframe") as HTMLIFrameElement;
        const correctScreen = correctIframe?.contentDocument?.body as HTMLBodyElement;
        let wrongPixelData: Uint8ClampedArray | undefined;
        let correctPixelData: Uint8ClampedArray | undefined;

        await html2canvas(wrongScreen).then(canvas => {
            const url = canvas.toDataURL("image/png");
            wrongPixelData = canvas.getContext("2d")?.getImageData(0, 0, canvas.width, canvas.height).data;
            setWrongImage(url);
        })
        await html2canvas(correctScreen).then(canvas => {
            const url = canvas.toDataURL("image/png");
            correctPixelData = canvas.getContext("2d")?.getImageData(0, 0, canvas.width, canvas.height).data;
            setCorrectImage(url);
        })

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
            
            console.log({
                rawPercentage,
                weightedPercentage
            })
            setMatchPercentage(weightedPercentage)
        }
    }

    return (
        <div class="text-center">
            <h1 class="mt-6 mb-2 text-4xl text-blue-500">{challenge().name}</h1>
            <p class="text-xl leading-7 max-w-screen-md mx-auto mb-6">{challenge().description}</p>
            <div class="flex gap-4">
                <textarea class="bg-gray-200 p-2 dark:bg-gray-900 text-black dark:text-gray-100 w-1/2" name="html" id="html" cols="30" rows="10" value={html()} oninput={e => setHtml(e.target.value)} />
                <textarea class="bg-gray-200 p-2 dark:bg-gray-900 text-black dark:text-gray-100 w-1/2" name="css" id="css" cols="30" rows="10" value={css()} oninput={e => setCss(e.target.value)} />
            </div>
            <div class="flex justify-between items-center">
                <div class="w-[300px] h-[300px] flex flex-col items-center">
                    <h3>Correct</h3>
                    <iframe
                        width="300px"
                        height="300px"
                        id="correctIframe"
                        style="border:none;"
                        srcdoc={
                            `<html>
                    <head>
                        <style>
                            ${challenge().generalCSS}
                            ${challenge().correctCSS}
                        </style>
                    </head>
                    <body>
                        ${challenge().HTML}
                    </body>
                </html>`}
                    />
                </div>
                <div class="flex-1 flex items-center justify-center flex-col">
                    {correctImage() && wrongImage() && (
                        <div class="mt-4 mx-auto w-[300px]">
                            <h3 class="font-bold">Match Percentage: {Math.round(matchPercentage() * 100) / 100}%</h3>
                            <div class="flex gap-2 items-center">
                                <p>Compare the two:</p>
                                <input type="range" min="0" max="1" step="0.01" value={opacity()} oninput={e => setOpacity(parseFloat(e.target.value))} />
                            </div>
                            <div class="relative w-[300px] h-[300px]">
                                <div class="absolute inset-0" >
                                    <img src={correctImage()} alt="Correct Image" width="300px" />
                                </div>
                                <div class="absolute inset-0" style={`opacity: ${opacity()};`}>
                                    <img src={wrongImage()} alt="Wrong Image" width="300px" />
                                </div>
                            </div>
                        </div>)}
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-2 w-fit mx-auto h-fit"
                        onClick={runTest}>Run Comparison</button>
                </div>
                <div class="w-[300px] h-[300px] flex flex-col items-center">
                    <h3>Wrong</h3>
                    <iframe
                        width="300px"
                        height="300px"
                        id="wrongIframe"
                        style="border:none;"
                        srcdoc={
                            `<html>
                    <head>
                        <style>
                            ${challenge().generalCSS}
                            ${css()}
                        </style>
                    </head>
                    <body>
                        ${html()}
                    </body>
                </html>`}
                    />
                </div>
            </div>
        </div>
    )
}