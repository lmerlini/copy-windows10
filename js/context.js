const contextMenu = document.querySelector('.contextmenu');

let ctxPosition = {
    pageX: 0,
    pageY: 0
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const ctxHeight = contextMenu.offsetHeight;
    const ctxWidth = contextMenu.offsetWidth;

    console.log(ctxHeight);
    console.log(ctxWidth);

    const heighthOverflow = e.pageX + ctxHeight > window.innerHeight;
    const widthOverflow = e.pageX + ctxWidth > window.innerWidth;


    console.log(heighthOverflow);
    console.log(widthOverflow);

    ctxPosition = {
        pageX: widthOverflow ? e.pageX - ctxWidth - 5 : e.pageX,
        pageY: heighthOverflow ? e.pageY - ctxWidth : e.pageY,
    };

    hideContextMenu();
    setTimeout(showCtxMenu, 50);
})

document.addEventListener("click", hideContextMenu)

function showCtxMenu() {
    contextMenu.style.cssText = `
        opacity:1;
        transform: scale(1);
        top: ${ctxPosition.pageY}px;
        left: ${ctxPosition.pageX}px;
    `;
}

function hideContextMenu() {
    contextMenu.style.cssText = `
        opacity:0;
        transform: scale(0);
        top: ${ctxPosition.pageY}px;
        left: ${ctxPosition.pageX}px;
    `;
}