function fakeApi(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
}

export { fakeApi }