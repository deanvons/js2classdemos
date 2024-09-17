export type Joke = {
    error: boolean;
    category: string | undefined;
    type: string;
    setup: string;
    delivery: string;
    flags: Flags;
    id: number;
    safe: boolean;
    lang: string;
}

export type Flags = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}