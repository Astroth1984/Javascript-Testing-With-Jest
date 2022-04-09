function arrayChunks(arr, len) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i++) {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([arr[i]]);
        } else {
            last.push(arr[i]);
        }

    }

    return chunkedArr;
}

module.exports = arrayChunks;