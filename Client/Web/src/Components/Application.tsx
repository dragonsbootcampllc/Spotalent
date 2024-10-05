import { RadioGroup } from "@lemonsqueezy/wedges";
import { formatTimeDifference } from "../Services/utils";
import { useState } from "react";
import { Question, QuestionType } from "../Types";
import { Textarea } from "./MicroComponents";

const Option = RadioGroup.Item;

interface QuestionProps {
  question: Question;
  onChange: (value: string) => void;
}

function TextQuestion({ question, onChange }: QuestionProps) {
  const { id, text, required } = question;

  return (
    <div key={id}>
      <h2 className="font-medium py-2 md:text-xl">{text}</h2>
      <Textarea placeholder="Answer here" required={required} onValueChange={onChange} />
    </div>
  );
}

function MCQQuestion({ question, onChange }: QuestionProps) {
  const { id, text, required } = question;

  return (
    <div key={id}>
      <h2 className="font-medium py-2 md:text-xl">{text}</h2>
      <Textarea placeholder="Write your code here" required={required} onValueChange={onChange} />
    </div>
  );
}

function CodeQuestion({ question, onChange }: QuestionProps) {
  const { id, text, options } = question;

  return (
    <div key={id}>
      <h2 className="font-medium py-2 md:text-xl">{text}</h2>
      <RadioGroup required onValueChange={onChange}>
        {options &&
          options.map((option, index) => (
            <Option key={index} label={option} value={option} />
          ))}
      </RadioGroup>
    </div>
  );
}

export interface ApplicationProps {
  jobTitle: string;
  timePosted: Date;
  appliedCount: number;
  candidatesCount: number;
  initialQuestions?: Question[];
  onSubmit: (Questions: Question[]) => void;
}

export default function Application({
  jobTitle,
  timePosted,
  appliedCount,
  candidatesCount,
  initialQuestions,
  onSubmit
}: ApplicationProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions || []);
  const handleQuestions = (index: number, key: string, value: string) => {
    setQuestions(oldQuestions => (
      oldQuestions.map((question, i) => (i === index ? { ...question, [key]: value } : question))
    ))
  };

  return (
    <div className="p-8 w-11/12 md:w-5/6 lg:w-4/6 mx-auto my-7 flex flex-col gap-4">
      <div className="border-b pb-4 border-gray-200">
        <h3 className="font-medium md:text-xl">{jobTitle}</h3>

        <div className="flex flex-col gap-2 md:flex-row md:justify-between py-2">
          <span className="text-gray-600 text-sm">
            Posted {formatTimeDifference(timePosted)}
          </span>
          <span className="text-gray-500 font-semibold">{appliedCount} Applied</span>
        </div>

        <span className="font-bold">{candidatesCount} Candidates</span>
      </div>

      <div className="flex flex-col">
        {questions.map((question, index) => {
          switch (question.type) {
            case QuestionType.MCQ:
              return <CodeQuestion key={index} question={question} onChange={(value) => handleQuestions(index, "answer", value)} />;
            case QuestionType.Code:
              return <MCQQuestion key={index} question={question} onChange={(value) => handleQuestions(index, "answer", value)} />;
            default:
              return <TextQuestion key={index} question={question} onChange={(value) => handleQuestions(index, "answer", value)} />;
          }
        })}
      </div>

      <button
        onClick={() => {
          let is_valid = true;

          for (const question of questions) {
            if (question.required && (!question.answer || 0 === question.answer.trim().length)) {
              is_valid = false;
              break;
            }
          }

          if (is_valid) onSubmit(questions);
        }}
        className="bg-gray-600 hover:bg-gray-800 px-24 md:self-end text-white py-2 rounded-full"
      >
        Confirm
      </button>
    </div>
  );
}
