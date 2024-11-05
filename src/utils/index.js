export const requireImage = (folderPath, imageName) => {
    return new URL(folderPath + imageName, import.meta.url).href;
}

export const openModal = ()=>{
    document.body.classList.add('no-scroll');
    return true;
}