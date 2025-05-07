const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const pong = async () => {
    const ping = document.getElementById("ping");
    ping.innerText = await window.versions.ping();
};

pong();
