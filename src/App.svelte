<script lang="ts">
    export let name: string;
    $: targetURL = "";

    import axios from "axios";

    const config = {
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    };

    const main = () => {
        chrome.tabs.getSelected(null, (tab) => {
            const requestURL = localStorage.getItem("request_url");
            const username = localStorage.getItem("username");
            const text = tab.title + " : " + tab.url;

            targetURL = text;

            const postData = {
                username: "Later",
                content: text,
            };

            axios.post(requestURL, postData, config);
        });
    };

    main();
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<main>
    <h1>Read it later!</h1>
</main>
