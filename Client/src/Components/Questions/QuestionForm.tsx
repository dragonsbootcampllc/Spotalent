import { useEffect, useState } from "react";
import { XIcon } from "../../assets/Icons";
import { Dropdown, DropdownProps, Input, InputProps } from "../MicroComponents";
import { Question, QuestionType } from "../../Types";

export type QuestionFormProps = {
    questions?: Question[];
    onValuesUpdate?: (updatedQuesions: Question[]) => void;
    onSubmit?: (quesions: Question[]) => void;
};

export default function QuestionForm({
    questions: questionsProp,
    onValuesUpdate,
    onSubmit,
}: QuestionFormProps) {
    const dropdownProps: DropdownProps = {
        options: Object.values(QuestionType),
        placeholder: "Select type",
    };

    const inputProps: InputProps = {
        required: true,
        className: "w-full bg-transparent",
        placeholder: "Enter question text",
    };

    const [questions, setQuestions] = useState<Question[]>((questionsProp && 0 !== questionsProp.length) ? questionsProp : [
        { text: "", type: undefined },
    ]);

    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { text: "", type: undefined },
        ]);
    };

    const handleEditQuestion = (
        index: number,
        field: keyof Question,
        value: string
    ) => {
        const updatedQuesions = questions.map((question, i) =>
            i === index ? { ...question, [field]: value } : question
        );

        setQuestions(updatedQuesions);
        if (onValuesUpdate) {
            onValuesUpdate(updatedQuesions);
        }
    };

    const handleDeleteQuestion = (index: number) => {
        setQuestions((prevQuestions) =>
            prevQuestions.filter((_, i) => i !== index)
        );
    };

    useEffect(() => {
        setQuestions(
            (questionsProp && 0 !== questionsProp.length) ?
                questionsProp : [{ text: "", type: undefined },]
        );
    }, [questionsProp])

    return (
        <div className="w-full max-w-4xl rounded-xl p-6 bg-transparent">
            <div className="flex flex-col items-end gap-8">
                <div className="flex flex-col gap-2 w-full items-end">
                    {questions.map((question, index) => (
                        <div key={index} className={`flex w-full gap-3 justify-center items-center ${0 === index && "pr-[30px]"}`}>
                            <Input
                                {...inputProps}
                                onValueChange={(value) =>
                                    handleEditQuestion(index, "text", value)
                                }
                                value={question.text}
                            />
                            <Dropdown
                                {...dropdownProps}
                                onValueChange={(value) =>
                                    handleEditQuestion(index, "type", value)
                                }
                                value={question.type}
                            />
                            {
                                0 !== index && (
                                    <button
                                        onClick={() => handleDeleteQuestion(index)}
                                        className="w-6 h-6"
                                    >
                                        <XIcon />
                                    </button>
                                )
                            }
                        </div>
                    ))}

                    <button
                        onClick={handleAddQuestion}
                        className="text-gray-900 font-semibold w-full text-center rounded-md hover:bg-gray-400/60 bg-gray-300 transition-all py-2 duration-500"
                    >
                        + Add Question
                    </button>
                </div>

                {
                    onSubmit && (
                        <button
                            type="button"
                            className="w-52 justify-center rounded-full bg-gray-700 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                            onClick={() => {
                                let is_valid = true;

                                for (const question of questions) {
                                    if (question.text.length === 0 || !question.type) {
                                        is_valid = false;
                                        break;
                                    }
                                }

                                if (is_valid) onSubmit(questions);
                            }}
                        >
                            Submit
                        </button>
                    )
                }
            </div>
        </div>
    );
}
