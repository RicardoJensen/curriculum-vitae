export interface Curriculum {
    column: {
        titles: {
            title: string;
            subtitles: {
                subtitle: string;
                itens: {
                    item: string;
                    noDot?: boolean;
                }[];
            }[];
        }[];
    };
}

export interface Contacts {
    text: string;
    rows: {
        row: {
            url: string;
            content: string;
            link: string;
        }[];
    }[];
}


export interface Options {
    summedUpText: string;
    languageText: string;
}

export interface Images {
    url: string;
}