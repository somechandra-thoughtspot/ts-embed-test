import React from "react";
import {
    init,
    AppEmbed,
    AuthType,
    EmbedEvent
} from "@thoughtspot/visual-embed-sdk";

init({
    thoughtSpotHost: "https://10.87.89.232",
    authType: AuthType.None,
});

const FullApp = () => {
    const embedRef = React.useRef(null);
    const [isEmbedLoading, setIsEmbedLoading] = React.useState(true);

    React.useEffect(() => {
        if (embedRef !== null) {
            embedRef.current.innerHTML = "";
        }

        const embed = new AppEmbed("#tsEmbed", {
            frameParams: {},
            pageId: "home",
        });
        embed
            .on(EmbedEvent.Init, () => setIsEmbedLoading(true))
            .on(EmbedEvent.Load, () => setIsEmbedLoading(false))
            .render();
    }, []);
    return (
        <div className="fullApp">
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

export default FullApp;