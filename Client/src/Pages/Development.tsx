import Application, { ApplicationProps } from "../Components/Application";
import { QuestionType } from "../Types";

export default function Development() {
    const data: ApplicationProps = {
        "jobTitle": "Senior Frontend Developer",
        "timePosted": new Date("2024-09-08T16:00:00.000Z"),
        "appliedCount": 79,
        "candidatesCount": 3,
        "initialQuestions": [
            {
                "id": 1,
                "type": QuestionType.Text,
                "text": "What is your full name?",
                "required": true
            },
            {
                "id": 2,
                "type": QuestionType.MCQ,
                "text": "What is your highest level of education?",
                "options": ["High School", "Bachelor's", "Master's", "PhD"],
                "required": true
            },
            {
                "id": 3,
                "type": QuestionType.Code,
                "text": "Write a Python function to reverse a string.",
                "required": true
            }
        ]
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <Application {...data} />
        </div>
    )
}