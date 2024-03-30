
export function formHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    return [...formData.entries()].reduce((acc, [k, v]) => {
        acc[k] = v.trim();
        return acc;
    }, {});
}