const expToLevel = (exp) => {
    const k = 36;

    let tmp = Math.sqrt(exp / k + 0.25);
    let leveltmp = tmp + 0.5;

    return {
        level: parseInt(leveltmp),
        percent: parseInt((leveltmp - parseInt(leveltmp)) * 100),
        currentExp: exp - levelToExp(parseInt(leveltmp)),
        nextExp: levelToExp(parseInt(leveltmp) + 1) - levelToExp(parseInt(leveltmp))
    }
}

const levelToExp = (level) => {
    const k = 36;
    let exp = level * (level - 1) * k;
    return exp;
}

const randomString = (len = 80) => {
    let s = '';
    const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const datalen = data.length;

    for (let i = 0; i < len; i++) {
        s += data.charAt(Math.floor(Math.random() * datalen))
    }
    return s;
}

export { expToLevel, randomString };