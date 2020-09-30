(() => {
    const restoreAll = () => {
        document.getElementById("request_url").value = localStorage.getItem("request_url");
        document.getElementById("username").value = localStorage.getItem("username");
    };

    const saveAll = () => {
        localStorage.setItem("request_url", document.getElementById("request_url").value);
        localStorage.setItem("username", document.getElementById("username").value);
    };

    const init = () => {
        restoreAll();
        document.getElementById("save").addEventListener("click", saveAll);
    };

    init();
})();
