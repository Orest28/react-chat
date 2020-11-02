export const getImageFromLocalStorage = (path) => {

    if(path.startsWith("..")) return path;

    const item = localStorage.getItem(path);

    return item;
}