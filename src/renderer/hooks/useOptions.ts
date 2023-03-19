const useOptions = <T>(initial: T, options: T) => {
    return Object.assign({}, initial, options);
};

export default useOptions;
