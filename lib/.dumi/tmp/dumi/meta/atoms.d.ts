export declare const components: {
    Alert: {
        type: string;
        id: string;
        title: string;
        propsConfig: {
            type: string;
            required: string[];
            className: string;
            properties: {
                children: {
                    type: string;
                    description: string;
                    tags: {
                        description: string;
                        default: string;
                    };
                    default: string;
                };
                kind: {
                    type: string;
                    enum: string[];
                    description: string;
                    tags: {
                        description: string;
                        default: string;
                    };
                    default: string;
                };
            };
        };
    };
};
