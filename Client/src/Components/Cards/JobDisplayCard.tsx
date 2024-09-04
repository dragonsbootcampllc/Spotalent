import { ReactNode, useState } from "react";
import { BuildingIcon, ClockIcon, CoinIcon, ExclamationMarkIcon, HeartIcon, HeartOutlinedIcon, LocationIcon, RightArrowIcon } from "../../assets/Icons";

export type JobDisplayCardProps = {
    title: string;
    companyName: string;
    location: string;
    jobTime: string;
    salary: string;
    timePosted: Date;
    jobType: string[];
    tags: string[];
    LogoIconComponent?: ReactNode;
    isFavorite?: boolean;
    handleFavorite?: (favorite: boolean) => void;
};

// Helper function to calculate and format the time difference
const formatTimePosted = (timePosted: Date) => {
    const now = new Date();
    const diff = now.getTime() - timePosted.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.35);
    const years = Math.floor(months / 12);

    if (seconds < 60) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    if (weeks < 4) return `${weeks}w ago`;
    if (months < 12) return `${months}mo ago`;
    return `${years}y ago`;
};

export default function JobDisplayCard({
    title,
    companyName,
    location,
    jobTime,
    salary,
    timePosted,
    jobType,
    tags,
    LogoIconComponent,
    isFavorite = false,
    handleFavorite
}: JobDisplayCardProps) {
    const jobDetails = [
        {
            icon: (<BuildingIcon />),
            text: companyName,
        },
        {
            icon: (<LocationIcon />),
            text: location,
        },
        {
            icon: (<ExclamationMarkIcon />),
            text: jobType.join(" / "),
        },
        {
            icon: (<CoinIcon />),
            text: salary,
        },
        {
            icon: (<ClockIcon />),
            text: jobTime,
        },
    ];

    const [isFavoriteState, setFavoriteState] = useState(isFavorite);

    const switchFavoriteState = () => {
        if (handleFavorite) {
            handleFavorite(!isFavoriteState);
        }
        setFavoriteState(!isFavoriteState);
    };

    return (
        <div className="bg-white shadow-sm p-4 rounded-lg w-full max-w-[600px] flex flex-col justify-between items-center gap-4 relative">
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-300 outline-2 outline-blue-500 outline-offset-2 aspect-square w-14 rounded-full overflow-hidden relative">
                        <span className="w-9 absolute text-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <BuildingIcon />
                        </span>

                        {LogoIconComponent}
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                        <p className="text-gray-500">{companyName}</p>
                    </div>
                </div>

                <button
                    onClick={switchFavoriteState}
                    className="text-red-400 border-2 opacity-90 hover:opacity-100 w-10 aspect-square border-slate-400 transition-all p-1.5 hover:text-red-600 rounded-lg hover:border-gray-600"
                >
                    {isFavoriteState ? <HeartIcon /> : <HeartOutlinedIcon />}
                </button>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex w-full items-center gap-y-1 font-semibold text-gray-500 flex-wrap">
                    {jobDetails.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-2 w-1/2">
                            <span className="aspect-square w-5">
                                {detail.icon}
                            </span>

                            <span className="whitespace-nowrap">{detail.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex w-full flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full gap-4">
                <span className="w-full h-px rounded-full bg-gray-200" />

                <div className="flex w-full justify-between items-center">
                    <span className="text-blue-500 font-semibold">
                        {formatTimePosted(timePosted)}
                    </span>

                    <button className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:gap-3 hover:opacity-90 transition-all">
                        <span>Details</span>
                        <span className="w-4 aspect-square">
                            <RightArrowIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
