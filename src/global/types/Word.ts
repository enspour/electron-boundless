import { Resource } from "./Resource";

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

export interface Transcription {
    name: string;
    transcription: string;
    audio: Media;
}

export interface Word extends Resource {
    name: string;
    transcriptions: Transcription[];
    translations: string[];
    definitions: string[];
    synonyms: string[];
    images: Image[];
    audios: Media[];
    videos: Media[];
}
