export interface Resource {
    id: string;
    location: "local" | "remote";
    modifiedAt: number;
    createdAt: number;
}

export interface Image extends Resource {
    size: {
        width: number;
        height: number;
    };
}

export interface Media extends Resource {
    duration: number;
    type: "audio" | "video";
}
