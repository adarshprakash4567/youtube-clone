const mAxiosInstance = {
    get: jest.fn(),
    interceptors: {
        request: {
            use: jest.fn(),
        },
        response: {
            use: jest.fn(),
        },
    },
};

export default {
    create: jest.fn(() => mAxiosInstance),
};