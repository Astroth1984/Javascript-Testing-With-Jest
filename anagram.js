function isAnagrma(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[\W]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}


module.exports = isAnagrma