import { Resource, Media, Image, Sentence } from "./Resource";

export interface Transcription {
    name: string;
    text: string;
    audio: Media;
}

export interface Word extends Resource {
    text: string;
    transcriptions: Transcription[];
    translations: string[];
    definitions: string[];
    synonyms: string[];
    examples: {
        images: Image[];
        audios: Media[];
        videos: Media[];
        sentences: Sentence[];
    };
}
