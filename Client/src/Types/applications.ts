export enum QuestionType {
    Text = "text",
    MCQ = "mcq",
    Code = "code",
}

export type Question = {
    id?: number;
    type?: QuestionType;
    text: string;
    options?: string[];
    code?: string;
    answer?: string;
    required?: boolean;
};
