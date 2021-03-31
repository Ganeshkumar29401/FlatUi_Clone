const btn = document.querySelectorAll("button");

btn.forEach(item => {
    item.addEventListener('click', () => {
        let hexCol = `#${item.id}`;
        navigator.clipboard.writeText(hexCol);
        alert(`Copied to the Clipboard as ${hexCol} (HEX Color)`);
        console.log(`#${item.id}`);
    })
});

