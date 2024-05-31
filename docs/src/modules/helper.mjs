
async function loadModule(moduleName) {
    const module = await import(moduleName);
    return module;
}

function processArgs(...args) {
    const kwargs = {};

    args.forEach(arg => {
        if (typeof arg === 'object') {
            Object.assign(kwargs, arg);
        }
    });

    return kwargs;
}

const helper = {
    loadModule,
    processArgs
};


export default helper;