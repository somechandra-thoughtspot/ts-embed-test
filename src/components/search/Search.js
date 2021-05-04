import React from "react";
import {
    init,
    SearchEmbed,
    AuthType,
    EmbedEvent
} from "@thoughtspot/visual-embed-sdk";

init({
    thoughtSpotHost: "https://10.87.89.232",
    authType: AuthType.None,
});

const Search = () => {
    const embedRef = React.useRef(null);
    const [isEmbedLoading, setIsEmbedLoading] = React.useState(true);

    React.useEffect(() => {
        if (embedRef !== null) {
            embedRef.current.innerHTML = "";
        }

        const tsSearch = new SearchEmbed("#tsEmbed", {
            frameParams: {},
            hideDataSources: true,
            dataSources: ["0d3713c5-9b7d-473f-a262-b2f23ae4fce6"],
        });
        tsSearch
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
        <div className="search">
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

export default Search;