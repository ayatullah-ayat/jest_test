const microTimeToDate = (time)=> {
    const date = new Date(time).toISOString()
                .split('T')[0].split('-')
                .reverse()
                .join('/');

    return date;
}


const str_limit_conent = (str, limit = 100, wrap = "...") => {
    let arr2 = [];
    let newArray = [];
    let count = 0;
    let resultOfArr = [];
    if (str && typeof str == "string") {
        arr2 = str.split(' ');
        arr2.forEach((item, i) => {
            if (count <= limit) {
                newArray.push(item);
            } else {
                resultOfArr.push(item);
            }

            count += item.length;
        });


        if (count > limit) {
            newArray.push(wrap);
        }
    }

    return {
        "str1": newArray.join(" "),
        "str2": resultOfArr.join(" ")
    };
}

export { microTimeToDate, str_limit_conent };