import { Resource, Media, Image } from "./Resource";

export interface Transcription {
    name: string;
    text: string;
    audio: Media;
}

export interface Sentence {
    text: string;
    audio?: Media;
}

export interface Word extends Resource {
    text: string;
    transcriptions: Transcription[];
    translations: string[];
    definitions: Sentence[];
    synonyms: string[];
    examples: {
        images: Image[];
        audios: Media[];
        videos: Media[];
        sentences: Sentence[];
    };
}
