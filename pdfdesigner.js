function designerPdfViewer(h, word) {
    // Write your code here
    const maxHeight = Math.max(...word.split('').map(el => h[el.charCodeAt(0) - 97]))
    return maxHeight * word.length
}