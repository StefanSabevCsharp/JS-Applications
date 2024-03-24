

export function createFormEntity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    return [...formData.entries()].reduce((acc, [k, v]) => {
        //trim() removes white spaces from the input fields

        acc[k] = v.trim();
        return acc;
    }, {});
}