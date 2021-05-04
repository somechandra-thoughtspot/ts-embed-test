import React from "react";
import {
    init,
    PinboardEmbed,
    AuthType,
    EmbedEvent,
    Action,
} from "@thoughtspot/visual-embed-sdk";

init({
    thoughtSpotHost: "https://10.87.89.232",
    authType: AuthType.None,
});

const Pinboard = () => {
    const embedRef = React.useRef(null);
    const [isEmbedLoading, setIsEmbedLoading] = React.useState(true);

    React.useEffect(() => {
        if (embedRef !== null) {
            embedRef.current.innerHTML = "";
        }

        const embed = new PinboardEmbed("#tsEmbed", {
            frameParams: {},
            pinboardId: "b27d4ce9-0220-4238-b0b0-917ee18147df",
            hiddenActions: [
                Action.Save,
                Action.MakeACopy,
            ],
            disabledActions: [
                Action.PinboardInfo,
            ],
            enableVizTransformations: true,
        });
        embed
            .on(EmbedEvent.Init, () => setIsEmbedLoading(true))
            .on(EmbedEvent.Load, () => setIsEmbedLoading(false))
            .on(EmbedEvent.CustomAction, (payload) => {
                const data = payload.data;
                if (data.id === "send-survey") {
                    console.log(data);
                }
            })
            .render();
    }, []);
    return (
        <div className="pinboard">
            {isEmbedLoading ? (
                <div className="embedSpinner">
                </div>
            ) : (
                    ""
                )}
            <div className="tsEmbed" ref={embedRef} id="tsEmbed"></div>
        </div>
    );
};

export default Pinboard;