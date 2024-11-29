// Util function to calculate and format the time difference

export default function formatTimeDifference(startDate: Date, endDate: Date = new Date()): string {
    const timeDifference = startDate.getTime() - endDate.getTime();

    const totalSeconds = Math.floor(timeDifference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalWeeks / 4.35);
    const totalYears = Math.floor(totalMonths / 12);

    if (totalSeconds < 60) return "just now";
    if (totalMinutes < 60) return `${totalMinutes}m ago`;
    if (totalHours < 24) return `${totalHours}h ago`;
    if (totalDays < 7) return `${totalDays}d ago`;
    if (totalWeeks < 4) return `${totalWeeks}w ago`;
    if (totalMonths < 12) return `${totalMonths}mo ago`;
    return `${totalYears}y ago`;
}
