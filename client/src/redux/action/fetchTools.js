
export const baseUrl = '';
export const baseConfig = {
    headers: {
        // 'Content-Type': 'application/json',
        // 'mode': 'no-cors'
    }
};


// urls ------------------

export const fetchRequest = async (fetchUrl, method = 'GET', body = null, config = baseConfig) => {
    const response = await fetch(`${baseUrl}${fetchUrl}`, {
        method: method,
        body: body,
        ...config
    });
    const resData = await response.json();
    if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {message: resData, status: response.status};
    }
    return resData
}

export const setBoolean = (item) => item && item?.toLowerCase() !== 'false'
