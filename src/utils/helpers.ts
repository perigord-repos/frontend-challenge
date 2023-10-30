import { Player } from "./types";

export const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const hourString = hours < 10 ? `0${hours}` : hours;

    const minutes = Math.floor((seconds % 3600) / 60);
    const minuteString = minutes < 10 ? `0${minutes}` : minutes;

    const extraSeconds = seconds % 60;
    const secondString = extraSeconds < 10 ? `0${extraSeconds}` : extraSeconds;
    return `${hourString}:${minuteString}:${secondString}`;
}


export const getPlayerClass = (player: Player) => {
    return (player === Player.O ? 'player-o' : player === Player.X ? 'player-x' : '');
}